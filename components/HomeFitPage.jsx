import HomeFitCommunity from "./HomeFitCommunity";
import HomeFitContent from "./HomeFitContent";
import HomeFitFAQ from "./HomeFitFAQ";
import HomeFitGoals from "./HomeFitGoals";
import HomeFitHero from "./HomeFitHero";
import HomeFitPlans from "./HomeFitPlans";
import HomeFitSupport from "./HomeFitSupport";

export default function HomeFitPage() {
  return (
    <main className="homefit-page">
      <HomeFitHero />
      <HomeFitContent />
      <HomeFitGoals />
      <HomeFitCommunity />
      <HomeFitPlans />
      <HomeFitSupport />
      <HomeFitFAQ />
    </main>
  );
}