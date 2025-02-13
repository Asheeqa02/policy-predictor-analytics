
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface PredictionCardProps {
  title: string;
  probability: number;
  impact: "High" | "Medium" | "Low";
  description: string;
}

const PredictionCard = ({ title, probability, impact, description }: PredictionCardProps) => {
  const impactColor = {
    High: "bg-red-100 text-red-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Low: "bg-green-100 text-green-800",
  }[impact];

  return (
    <Card className="p-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Badge variant="outline" className={impactColor}>
            {impact} Impact
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold">{probability}%</div>
          <span className="text-sm text-muted-foreground">probability</span>
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </Card>
  );
};

export default PredictionCard;
