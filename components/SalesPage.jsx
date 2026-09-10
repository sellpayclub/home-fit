import AccessSection from "./AccessSection";
import AudienceSection from "./AudienceSection";
import DevicesSection from "./DevicesSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";
import TrackingBridge from "./TrackingBridge";

export default function SalesPage() {
  return (
    <main>
      <TrackingBridge />
      <HeroSection />
      <VideoSection />
      <AccessSection />
      <AudienceSection />
      <DevicesSection />
      <FAQSection />
    </main>
  );
}