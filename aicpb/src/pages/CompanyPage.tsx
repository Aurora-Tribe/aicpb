import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { companies } from "@/data/companies";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface ScraperData {
  slug: string;
  mau: number;
  mauChange: number;
  websiteViews: number;
  avgTimeOnSite: string;
}

export function CompanyPage() {
  const { slug } = useParams<{ slug: string }>();
  const [activeSection, setActiveSection] = useState("overview");
  const [scraperData, setScraperData] = useState<ScraperData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const company = companies.find(c => c.slug === slug);
  
  // 获取scraper数据
  useEffect(() => {
    if (!slug) return;
    
    const fetchScraperData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(`http://localhost:3001/api/company/${slug}/data`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        setScraperData(data);
      } catch (err) {
        console.error('获取scraper数据失败:', err);
        setError(err instanceof Error ? err.message : '获取数据失败');
        // 如果API失败，使用静态数据作为fallback
        setScraperData({
          slug: slug,
          mau: company?.mau || 0,
          mauChange: company?.mauChange || 0,
          websiteViews: company?.websiteViews || 0,
          avgTimeOnSite: company?.avgTimeOnSite || "0:00"
        });
      } finally {
        setLoading(false);
      }
    };
    
    fetchScraperData();
  }, [slug, company]);

  if (!company) {
    return <div className="container mx-auto px-4 py-8">Company not found</div>;
  }

  const sidebarItems = [
    { id: "overview", label: "Overview" },
    { id: "financials", label: "Financials" },
    { id: "employees", label: "Employees" },
    { id: "news", label: "News" }
  ];

  // 使用scraper数据或fallback到静态数据
  const displayData = scraperData || company;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Navigation</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <nav className="space-y-1">
                  {sidebarItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      className={`w-full text-left px-4 py-2 text-sm transition-colors hover:bg-muted ${
                        activeSection === item.id ? 'bg-muted font-medium' : ''
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {/* Overview Section */}
            {activeSection === "overview" && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl">{company.name}</CardTitle>
                    {loading && (
                      <p className="text-sm text-muted-foreground">正在获取最新数据...</p>
                    )}
                    {error && (
                      <p className="text-sm text-red-500">数据获取失败，显示静态数据</p>
                    )}
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-lg text-muted-foreground">{company.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {company.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                        <div className="text-center">
                          <p className="text-2xl font-bold">{(displayData.mau / 1000000).toFixed(1)}M</p>
                          <p className="text-sm text-muted-foreground">Monthly Active Users</p>
                        </div>
                        <div className="text-center">
                          <p className={`text-2xl font-bold ${displayData.mauChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {displayData.mauChange >= 0 ? '+' : ''}{displayData.mauChange}%
                          </p>
                          <p className="text-sm text-muted-foreground">MAU Growth</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{(displayData.websiteViews / 1000000).toFixed(1)}M</p>
                          <p className="text-sm text-muted-foreground">Website Views</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold">{displayData.avgTimeOnSite}</p>
                          <p className="text-sm text-muted-foreground">Avg. Time on Site</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Financials Section */}
            {activeSection === "financials" && (
              <Card>
                <CardHeader>
                  <CardTitle>Financial Information</CardTitle>
                </CardHeader>
                <CardContent>
                  {company.financials.length > 0 ? (
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Announced Date</TableHead>
                          <TableHead>Transaction Name</TableHead>
                          <TableHead>Number of Investors</TableHead>
                          <TableHead>Money Raised</TableHead>
                          <TableHead>Lead Investors</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {company.financials.map((financial, index) => (
                          <TableRow key={index}>
                            <TableCell>{financial.announcedDate}</TableCell>
                            <TableCell>{financial.transactionName}</TableCell>
                            <TableCell>{financial.numberOfInvestors}</TableCell>
                            <TableCell className="font-medium">{financial.moneyRaised}</TableCell>
                            <TableCell>{financial.leadInvestors.join(", ")}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  ) : (
                    <p className="text-muted-foreground">No financial information available.</p>
                  )}
                </CardContent>
              </Card>
            )}

            {/* Employees Section */}
            {activeSection === "employees" && (
              <Card>
                <CardHeader>
                  <CardTitle>Key Employees</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {company.employees.map((employee, index) => (
                      <div key={index} className="border-b pb-4 last:border-b-0">
                        <h3 className="font-semibold text-lg">{employee.name}</h3>
                        <p className="text-primary font-medium">{employee.currentRole}</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          Previous: {employee.previousRoles.join(", ")}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Education: {employee.education}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* News Section */}
            {activeSection === "news" && (
              <Card>
                <CardHeader>
                  <CardTitle>Latest News</CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {company.news.map((newsItem, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-left">
                          <div className="flex justify-between items-center w-full mr-4">
                            <span className="font-medium">{newsItem.title}</span>
                            <span className="text-sm text-muted-foreground">{newsItem.date}</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2">
                            <p className="text-muted-foreground">{newsItem.summary}</p>
                            <a
                              href={newsItem.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:underline text-sm"
                            >
                              Read more →
                            </a>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}