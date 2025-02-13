
import { Card } from "@/components/ui/card";

const Methodology = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Methodology & Data Sources</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium mb-2">Data Sources</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>UN Comtrade Database - International Trade Statistics</li>
            <li>World Bank Development Indicators</li>
            <li>IMF Direction of Trade Statistics</li>
            <li>ASEAN Statistical Yearbook</li>
            <li>National Foreign Policy Statements</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Analysis Methods</h4>
          <ul className="list-disc list-inside text-sm text-muted-foreground">
            <li>Machine Learning Predictive Models</li>
            <li>Network Analysis for International Relations</li>
            <li>Time Series Analysis for Historical Trends</li>
            <li>Natural Language Processing for Policy Document Analysis</li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Update Frequency</h4>
          <p className="text-sm text-muted-foreground">
            Data is updated in real-time where available, with daily updates for trade statistics
            and weekly updates for policy analysis.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default Methodology;
