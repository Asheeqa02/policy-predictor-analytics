
import { Button } from "@/components/ui/button";
import { Globe2, BarChart2, Network, Table, Info } from "lucide-react";

const Navigation = () => {
  return (
    <div className="border-b bg-white">
      <div className="container flex gap-6 py-2">
        <Button variant="ghost" className="gap-2">
          <Globe2 className="h-4 w-4" />
          Global Analysis
        </Button>
        <Button variant="ghost" className="gap-2">
          <BarChart2 className="h-4 w-4" />
          Regional Trends
        </Button>
        <Button variant="ghost" className="gap-2">
          <Network className="h-4 w-4" />
          Network Analysis
        </Button>
        <Button variant="ghost" className="gap-2">
          <Table className="h-4 w-4" />
          Country Data
        </Button>
        <Button variant="ghost" className="gap-2">
          <Info className="h-4 w-4" />
          Methodology
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
