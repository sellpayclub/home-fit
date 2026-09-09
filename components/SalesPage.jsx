import AccessSection from "./AccessSection";
import AudienceSection from "./AudienceSection";
import DevicesSection from "./DevicesSection";
import FAQSection from "./FAQSection";
import HeroSection from "./HeroSection";
import VideoSection from "./VideoSection";

export default function SalesPage() {
  return (
    <main>
      <HeroSection />
      <VideoSection />
      <AccessSection />
      <AudienceSection />
      <DevicesSection />
      <FAQSection />
    </main>
  );
}