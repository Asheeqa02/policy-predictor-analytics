
import { Navigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import Header from "@/components/Header";
import Navigation from "@/components/Navigation";
import MetricCard from "@/components/MetricCard";
import TrendChart from "@/components/TrendChart";
import PredictionCard from "@/components/PredictionCard";
import RegionalAnalysis from "@/components/RegionalAnalysis";
import CountryTable from "@/components/CountryTable";
import Methodology from "@/components/Methodology";

const Index = () => {
  const { user } = useAuth();

  // Redirect to auth page if not logged in
  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Navigation />
      <main className="container py-6">
        <div className="grid gap-6">
          {/* Metrics Section */}
          <section className="grid gap-6 md:grid-cols-3">
            <MetricCard
              title="Global Relations Index"
              value="85"
              description="Overall international relations score"
              trend="up"
            />
            <MetricCard
              title="Regional Influence"
              value="72%"
              description="ASEAN region influence score"
              trend="neutral"
            />
            <MetricCard
              title="Diplomatic Risk"
              value="Low"
              description="Current global risk assessment"
              trend="down"
            />
          </section>

          {/* Analysis Sections */}
          <div className="grid gap-6 md:grid-cols-2">
            <TrendChart />
            <RegionalAnalysis />
          </div>

          {/* Predictions Section */}
          <section className="grid gap-6 md:grid-cols-2">
            <PredictionCard
              title="Economic Impact"
              probability={78}
              impact="High"
              description="Predicted positive impact on regional trade relations"
            />
            <PredictionCard
              title="Diplomatic Relations"
              probability={65}
              impact="Medium"
              description="Potential improvements in bilateral ties"
            />
          </section>

          {/* Country Data Table */}
          <section>
            <CountryTable />
          </section>

          {/* Methodology Section */}
          <section>
            <Methodology />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
