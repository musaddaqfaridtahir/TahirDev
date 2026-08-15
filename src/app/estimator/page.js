import DynamicCostEstimator from "@/components/DynamicCostEstimator";
import { siteConfig } from "@/config/siteConfig";

export const metadata = {
  title: `Cost Estimator | ${siteConfig.name}`,
  description: "Interactive quote and delivery timeline calculator with PKR / USD currency toggle.",
};

export default function EstimatorPage() {
  return (
    <div className="pt-20">
      <DynamicCostEstimator />
    </div>
  );
}
