
import { Button } from "@/components/ui/button";
import { Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <h1 className="text-xl font-semibold">Foreign Policy Analysis</h1>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
