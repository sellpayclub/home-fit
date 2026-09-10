import { useEffect } from "react";

const STORAGE_KEY = "__codai_first_touch_tracking_v1";
const VALIDITY_MS = 30 * 24 * 60 * 60 * 1000;
const TRACKING_KEYS = new Set([
  "fbclid",
  "gclid",
  "dclid",
  "ttclid",
  "msclkid",
  "campaign_id",
  "adset_id",
  "ad_id",
  "sck",
  "src",
]);

function isTrackingParameter(key) {
  const normalizedKey = key.toLowerCase();
  return normalizedKey.startsWith("utm_") || TRACKING_KEYS.has(normalizedKey);
}

export default function TrackingBridge() {
  useEffect(() => {
    const now = Date.now();

    const readPersistedParameters = () => {
      try {
        const savedValue = window.localStorage.getItem(STORAGE_KEY);
        if (!savedValue) return {};

        const savedData = JSON.parse(savedValue);
        const savedParameters = savedData?.params || {};
        const validParameters = {};
        let needsCleanup = false;

        Object.entries(savedParameters).forEach(([key, item]) => {
          if (
            item &&
            typeof item.value === "string" &&
            item.value.trim() &&
            typeof item.timestamp === "number" &&
            now - item.timestamp < VALIDITY_MS
          ) {
            validParameters[key] = item;
          } else {
            needsCleanup = true;
          }
        });

        if (needsCleanup) {
          if (Object.keys(validParameters).length) {
            window.localStorage.setItem(
              STORAGE_KEY,
              JSON.stringify({ params: validParameters })
            );
          } else {
            window.localStorage.removeItem(STORAGE_KEY);
          }
        }

        return validParameters;
      } catch {
        return {};
      }
    };

    const currentParameters = [];
    new URLSearchParams(window.location.search).forEach((value, key) => {
      if (isTrackingParameter(key) && value.trim()) {
        currentParameters.push([key, value]);
      }
    });

    let persistedParameters = readPersistedParameters();

    if (currentParameters.length) {
      const updatedParameters = { ...persistedParameters };
      let hasNewParameter = false;

      currentParameters.forEach(([key, value]) => {
        if (!updatedParameters[key]) {
          updatedParameters[key] = { value, timestamp: now };
          hasNewParameter = true;
        }
      });

      if (hasNewParameter) {
        try {
          window.localStorage.setItem(
            STORAGE_KEY,
            JSON.stringify({ params: updatedParameters })
          );
        } catch {
          // Mantém os parâmetros em memória caso o storage não esteja disponível.
        }
        persistedParameters = updatedParameters;
      }
    }

    const isSellpayCheckout = (href) => {
      try {
        return new URL(href, window.location.href).hostname === "checkout.sellpay.com.br";
      } catch {
        return false;
      }
    };

    const buildTrackedCheckoutUrl = (sourceHref) => {
      const destination = new URL(sourceHref, window.location.href);

      currentParameters.forEach(([key, value]) => {
        destination.searchParams.set(key, value);
      });

      Object.entries(persistedParameters).forEach(([key, item]) => {
        if (!destination.searchParams.has(key) && item?.value) {
          destination.searchParams.set(key, item.value);
        }
      });

      return destination.toString();
    };

    const refreshLink = (link) => {
      if (!link?.getAttribute) return;

      const originalHref =
        link.dataset.codaiTrackingSource || link.getAttribute("href");

      if (!originalHref || !isSellpayCheckout(originalHref)) return;

      if (!link.dataset.codaiTrackingSource) {
        link.dataset.codaiTrackingSource = originalHref;
      }

      const trackedHref = buildTrackedCheckoutUrl(originalHref);
      if (link.href !== trackedHref) {
        link.href = trackedHref;
      }
    };

    const refreshLinks = (root = document) => {
      if (root.nodeType === Node.ELEMENT_NODE && root.matches?.("a[href]")) {
        refreshLink(root);
      }

      root.querySelectorAll?.("a[href]").forEach(refreshLink);
    };

    const handleCheckoutClick = (event) => {
      const link = event.target.closest?.("a[href]");
      if (link) refreshLink(link);
    };

    refreshLinks();
    document.addEventListener("click", handleCheckoutClick, true);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes") {
          refreshLink(mutation.target);
          return;
        }

        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            refreshLinks(node);
          }
        });
      });
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["href"],
    });

    return () => {
      document.removeEventListener("click", handleCheckoutClick, true);
      observer.disconnect();
    };
  }, []);

  return null;
}