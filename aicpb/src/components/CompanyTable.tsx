import { useNavigate } from "react-router-dom";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Company } from "@/data/companies";

interface CompanyTableProps {
  companies: Company[];
}

export function CompanyTable({ companies }: CompanyTableProps) {
  const navigate = useNavigate();

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Company</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">MAU</TableHead>
          <TableHead className="text-right">MAU (%)</TableHead>
          <TableHead className="text-right">Website Views</TableHead>
          <TableHead className="text-right">Avg. Time on Site</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {companies.map((company) => (
          <TableRow
            key={company.id}
            className="cursor-pointer hover:bg-muted/50"
            onClick={() => navigate(`/company/${company.slug}`)}
          >
            <TableCell className="font-medium">{company.name}</TableCell>
            <TableCell className="max-w-md truncate">{company.description}</TableCell>
            <TableCell className="text-right">{formatNumber(company.mau)}</TableCell>
            <TableCell className={`text-right ${company.mauChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {company.mauChange >= 0 ? '+' : ''}{company.mauChange}%
            </TableCell>
            <TableCell className="text-right">{formatNumber(company.websiteViews)}</TableCell>
            <TableCell className="text-right">{company.avgTimeOnSite}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}