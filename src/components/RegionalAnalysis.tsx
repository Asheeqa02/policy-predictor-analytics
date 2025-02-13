
import { Card } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const regionalData = [
  { region: "East Asia", influence: 85, cooperation: 75 },
  { region: "Southeast Asia", influence: 70, cooperation: 80 },
  { region: "South Asia", influence: 65, cooperation: 60 },
  { region: "Central Asia", influence: 55, cooperation: 50 },
];

const RegionalAnalysis = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Regional Influence Analysis</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={regionalData}>
            <XAxis dataKey="region" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="influence" fill="#4C6EF5" name="Regional Influence" />
            <Bar dataKey="cooperation" fill="#748FFC" name="Cooperation Level" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default RegionalAnalysis;
