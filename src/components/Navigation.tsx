
import { Button } from "@/components/ui/button";
import { Globe2, BarChart2, Network, Table, Info, LogOut } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      navigate('/auth');
    }
  };

  return (
    <div className="border-b bg-white">
      <div className="container flex items-center justify-between py-2">
        <div className="flex gap-6">
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
        <Button 
          variant={user ? "ghost" : "default"} 
          className="gap-2"
          onClick={handleAuthClick}
        >
          {user ? (
            <>
              <LogOut className="h-4 w-4" />
              Sign Out
            </>
          ) : (
            'Sign In'
          )}
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
