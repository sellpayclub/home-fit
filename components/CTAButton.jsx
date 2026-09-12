import { ArrowRight } from "lucide-react";

const PLANS_ANCHOR = "#checkout";

export function getCheckoutUrl(href) {
  if (typeof window === "undefined") return href;

  const checkoutUrl = new URL(href, window.location.origin);
  const incomingParams = new URLSearchParams(window.location.search);

  incomingParams.forEach((value, key) => {
    checkoutUrl.searchParams.set(key, value);
  });

  return checkoutUrl.toString();
}

export default function CTAButton({ children, fullWidth = false, href = PLANS_ANCHOR, onClick }) {
  const className = `cta-button${fullWidth ? " cta-button--full" : ""}`;
  const isExternal = /^https?:\/\//i.test(href);

  if (onClick) {
    return (
      <button type="button" className={className} onClick={onClick}>
        <span>{children}</span>
        <ArrowRight aria-hidden="true" size={20} strokeWidth={2.5} />
      </button>
    );
  }

  const handleTrackedNavigation = (event) => {
    event.currentTarget.href = getCheckoutUrl(href);
  };

  return (
    <a
      className={className}
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleTrackedNavigation}
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={20} strokeWidth={2.5} />
    </a>
  );
}