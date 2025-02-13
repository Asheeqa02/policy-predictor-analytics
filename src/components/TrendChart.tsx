
import { Card } from "@/components/ui/card";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
  { date: "2023-01", value: 65 },
  { date: "2023-02", value: 75 },
  { date: "2023-03", value: 70 },
  { date: "2023-04", value: 80 },
  { date: "2023-05", value: 85 },
  { date: "2023-06", value: 82 },
];

const TrendChart = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Policy Impact Trends</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="date"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `${value}%`}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4C6EF5"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};

export default TrendChart;
