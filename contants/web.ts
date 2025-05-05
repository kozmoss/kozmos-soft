import { ChartConfig } from "@/components/ui/chart";

export const registryCategories = [
    {
      name: "Crm",
      slug: "crm",
      hidden: false,
    },
    {
      name: "E-commerce",
      slug: "e-commerce",
      hidden: true,
    },
    {
      name: "Project Managment",
      slug: "project-managment",
      hidden: false,
    },
    {
      name: "Erp",
      slug: "erp",
      hidden: false,
    },
  ]

  // Sample employees data
export const employees = [
  {
    id: "EMP001",
    name: "John Smith",
    position: "Senior Developer",
    department: "Engineering",
    email: "john.smith@example.com",
    status: "active",
    joinDate: "2020-05-12",
  },
  {
    id: "EMP002",
    name: "Sarah Johnson",
    position: "Marketing Manager",
    department: "Marketing",
    email: "sarah.j@example.com",
    status: "active",
    joinDate: "2019-11-23",
  },
  {
    id: "EMP003",
    name: "Michael Brown",
    position: "Sales Representative",
    department: "Sales",
    email: "michael.b@example.com",
    status: "active",
    joinDate: "2021-02-15",
  },
  {
    id: "EMP004",
    name: "Emily Davis",
    position: "HR Specialist",
    department: "Human Resources",
    email: "emily.d@example.com",
    status: "active",
    joinDate: "2018-07-10",
  },
  {
    id: "EMP005",
    name: "Robert Wilson",
    position: "Financial Analyst",
    department: "Finance",
    email: "robert.w@example.com",
    status: "on-leave",
    joinDate: "2020-01-05",
  },
  {
    id: "EMP006",
    name: "Jennifer Lee",
    position: "Product Manager",
    department: "Product",
    email: "jennifer.l@example.com",
    status: "active",
    joinDate: "2019-09-18",
  },
  {
    id: "EMP007",
    name: "David Miller",
    position: "UI/UX Designer",
    department: "Design",
    email: "david.m@example.com",
    status: "active",
    joinDate: "2021-04-22",
  },
  {
    id: "EMP008",
    name: "Lisa Thompson",
    position: "Customer Support",
    department: "Support",
    email: "lisa.t@example.com",
    status: "inactive",
    joinDate: "2020-08-30",
  },
]


export const chartData = [
  { source: "Website", leads: 450, fill: "var(--color-website)" },
  { source: "Referral", leads: 300, fill: "var(--color-referral)" },
  { source: "Ads", leads: 275, fill: "var(--color-ads)" },
  { source: "Social Media", leads: 180, fill: "var(--color-socialmedia)" },
  { source: "Events", leads: 95, fill: "var(--color-events)" },
];

export const chartConfig = {
  leads: {
    label: "Leads",
  },
  website: {
    label: "Website",
    color: "hsl(var(--chart-1))",
  },
  referral: {
    label: "Referral",
    color: "hsl(var(--chart-2))",
  },
  ads: {
    label: "Ads",
    color: "hsl(var(--chart-3))",
  },
  socialmedia: {
    label: "Social Media",
    color: "hsl(var(--chart-4))",
  },
  events: {
    label: "Events",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;
