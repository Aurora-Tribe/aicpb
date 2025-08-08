import { useState } from "react";
import { Banner } from "@/components/Banner";
import { CompanyTable } from "@/components/CompanyTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { companies } from "@/data/companies";

export function Homepage() {
  const [activeTab, setActiveTab] = useState("General");
  
  const categories = ["General", "Growth", "Downloads", "Subscription Revenue"];
  
  const filteredCompanies = companies.filter(company => company.category === activeTab);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <Banner />
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map((category) => (
            <TabsContent key={category} value={category}>
              <CompanyTable companies={filteredCompanies} />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}