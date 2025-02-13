
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";

const countryData = [
  {
    country: "China",
    region: "East Asia",
    relationshipStatus: "Strategic Partnership",
    tradeVolume: "$120B",
    riskLevel: "Medium",
  },
  {
    country: "Japan",
    region: "East Asia",
    relationshipStatus: "Friendly",
    tradeVolume: "$80B",
    riskLevel: "Low",
  },
  {
    country: "Vietnam",
    region: "Southeast Asia",
    relationshipStatus: "Cooperative",
    tradeVolume: "$45B",
    riskLevel: "Low",
  },
  {
    country: "Singapore",
    region: "Southeast Asia",
    relationshipStatus: "Strong Allies",
    tradeVolume: "$65B",
    riskLevel: "Low",
  },
];

const CountryTable = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Country Analysis Table</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Country</TableHead>
            <TableHead>Region</TableHead>
            <TableHead>Relationship Status</TableHead>
            <TableHead>Trade Volume</TableHead>
            <TableHead>Risk Level</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {countryData.map((row) => (
            <TableRow key={row.country}>
              <TableCell className="font-medium">{row.country}</TableCell>
              <TableCell>{row.region}</TableCell>
              <TableCell>{row.relationshipStatus}</TableCell>
              <TableCell>{row.tradeVolume}</TableCell>
              <TableCell>{row.riskLevel}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
};

export default CountryTable;
