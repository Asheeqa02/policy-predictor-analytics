
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";

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
  const [selectedCountry, setSelectedCountry] = useState<string>("all");

  const filteredData = selectedCountry === "all" 
    ? countryData 
    : countryData.filter(row => row.country === selectedCountry);

  return (
    <Card className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Country Analysis Table</h3>
        <Select
          value={selectedCountry}
          onValueChange={setSelectedCountry}
        >
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <ScrollArea className="h-[200px]">
              <SelectItem value="all">All Countries</SelectItem>
              {countryData.map((row) => (
                <SelectItem key={row.country} value={row.country}>
                  {row.country}
                </SelectItem>
              ))}
            </ScrollArea>
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="h-[400px]">
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
            {filteredData.map((row) => (
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
      </ScrollArea>
    </Card>
  );
};

export default CountryTable;
