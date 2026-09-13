import HomeFitBenefits from "./HomeFitBenefits";
import HomeFitCommunity from "./HomeFitCommunity";
import HomeFitContent from "./HomeFitContent";
import HomeFitFAQ from "./HomeFitFAQ";
import HomeFitGoals from "./HomeFitGoals";
import HomeFitHero from "./HomeFitHero";
import HomeFitPlans from "./HomeFitPlans";
import HomeFitSupport from "./HomeFitSupport";
import TrackingBridge from "./TrackingBridge";

export default function HomeFitPage() {
  return (
    <main className="homefit-page">
      <TrackingBridge />
      <HomeFitHero />
      <HomeFitContent />
      <HomeFitBenefits />
      <HomeFitGoals />
      <HomeFitCommunity />
      <HomeFitPlans />
      <HomeFitSupport />
      <HomeFitFAQ />
    </main>
  );
}