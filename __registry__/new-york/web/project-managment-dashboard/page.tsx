import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, ListTodo } from "lucide-react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProjectCard } from "@/__registry__/components/project-card";
import { RecentActivity } from "@/__registry__/components/recent-activity";
import { TeamMembers } from "@/__registry__/components/team-member";
import { SprintProgress } from "@/__registry__/components/sprint-progress";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/__registry__/components/app-sidebar";
import { SiteHeader } from "@/__registry__/components/site-header";

export default function DashboardPage() {
  const t = useTranslations('Web.projectManager.dashboard');

  return (
    <SidebarProvider>
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />

        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="@container/page flex flex-1 flex-col gap-8 p-6">
            <div className="flex flex-1 flex-col">
              <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
                  <div className="flex items-center justify-end">
                    <div className="flex items-center gap-2">
                      <Button variant="outline">
                        <Clock className="mr-2 h-4 w-4" />
                        {t('currentSprint')}
                      </Button>
                      <Button>
                        <ListTodo className="mr-2 h-4 w-4" />
                        {t('createIssue')}
                      </Button>
                    </div>
                  </div>
                  <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                      <TabsTrigger value="overview">{t('tabs.overview')}</TabsTrigger>
                      <TabsTrigger value="sprints">{t('tabs.sprints')}</TabsTrigger>
                      <TabsTrigger value="reports">{t('tabs.reports')}</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              {t('cards.openIssues')}
                            </CardTitle>
                            <ListTodo className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-muted-foreground">
                              {t('cards.sinceYesterday', { count: 3 })}
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              {t('cards.inProgress')}
                            </CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">
                              {t('cards.sinceYesterday', { count: 2 })}
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              {t('cards.completed')}
                            </CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">16</div>
                            <p className="text-xs text-muted-foreground">
                              {t('cards.thisWeek', { count: 5 })}
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              {t('cards.sprintProgress')}
                            </CardTitle>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              className="h-4 w-4 text-muted-foreground"
                            >
                              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                              <circle cx="9" cy="7" r="4" />
                              <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                            </svg>
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">65%</div>
                            <p className="text-xs text-muted-foreground">
                              {t('cards.sprintEnds', { days: 5 })}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                          <CardHeader>
                            <CardTitle>{t('currentSprintCard.title')}</CardTitle>
                            <CardDescription>
                              {t('currentSprintCard.description', {
                                number: 24,
                                start: "April 5",
                                end: "April 19"
                              })}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <SprintProgress />
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href="#">
                                {t('currentSprintCard.viewBoard')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card className="sm:col-span-4 lg:col-span-3">
                          <CardHeader>
                            <CardTitle>{t('recentActivity.title')}</CardTitle>
                            <CardDescription>
                              {t('recentActivity.description')}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <RecentActivity />
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              {t('recentActivity.viewAll')}
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4 lg:col-span-3">
                          <CardHeader>
                            <CardTitle>{t('teamMembers.title')}</CardTitle>
                            <CardDescription>
                              {t('teamMembers.description')}
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <TeamMembers />
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              {t('teamMembers.viewAll')}
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card className="col-span-4">
                          <CardHeader>
                            <CardTitle>{t('projects.title')}</CardTitle>
                            <CardDescription>
                              {t('projects.description')}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <ProjectCard
                                title={t('projects.cards.websiteRedesign.title')}
                                description={t('projects.cards.websiteRedesign.description')}
                                progress={75}
                                dueDate="Apr 15, 2025"
                                team={["JD", "AS", "TK"]}
                              />
                              <ProjectCard
                                title={t('projects.cards.mobileApp.title')}
                                description={t('projects.cards.mobileApp.description')}
                                progress={45}
                                dueDate="May 20, 2025"
                                team={["JD", "AS"]}
                              />
                            </div>
                            <Button variant="outline" className="w-full" asChild>
                              <Link href="#">
                                {t('projects.viewAll')}
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                    <TabsContent value="sprints" className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>{t('sprints.title')}</CardTitle>
                          <CardDescription>
                            {t('sprints.description')}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="rounded-md border">
                              <div className="flex items-center justify-between p-4">
                                <div>
                                  <h3 className="font-medium">
                                    {t('sprints.current.title', { number: 24 })}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {t('sprints.current.dateRange', {
                                      start: "April 5",
                                      end: "April 19",
                                      year: "2025"
                                    })}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    {t('sprints.current.manage')}
                                  </Button>
                                  <Button size="sm">
                                    {t('sprints.current.viewBoard')}
                                  </Button>
                                </div>
                              </div>
                              <div className="border-t p-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span>{t('sprints.current.progress')}</span>
                                    <span className="font-medium">65%</span>
                                  </div>
                                  <Progress value={65} />
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                                  <div>
                                    <div className="font-medium">24</div>
                                    <div className="text-muted-foreground">
                                      {t('sprints.current.totalIssues')}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">16</div>
                                    <div className="text-muted-foreground">
                                      {t('sprints.current.completed')}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">8</div>
                                    <div className="text-muted-foreground">
                                      {t('sprints.current.remaining')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-md border">
                              <div className="flex items-center justify-between p-4">
                                <div>
                                  <h3 className="font-medium">
                                    {t('sprints.next.title', { number: 25 })}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {t('sprints.current.dateRange', {
                                      start: "April 20",
                                      end: "May 3",
                                      year: "2025"
                                    })}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    {t('sprints.next.plan')}
                                  </Button>
                                </div>
                              </div>
                              <div className="border-t p-4">
                                <div className="text-center text-sm">
                                  <p className="text-muted-foreground">
                                    {t('sprints.next.notStarted')}
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-md border">
                              <div className="flex items-center justify-between p-4">
                                <div>
                                  <h3 className="font-medium">
                                    {t('sprints.previous.title', { number: 23 })}
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    {t('sprints.current.dateRange', {
                                      start: "March 22",
                                      end: "April 4",
                                      year: "2025"
                                    })}
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    {t('sprints.previous.viewReport')}
                                  </Button>
                                </div>
                              </div>
                              <div className="border-t p-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span>{t('sprints.current.completed')}</span>
                                    <span className="font-medium">92%</span>
                                  </div>
                                  <Progress value={92} />
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                                  <div>
                                    <div className="font-medium">26</div>
                                    <div className="text-muted-foreground">
                                      {t('sprints.current.totalIssues')}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">24</div>
                                    <div className="text-muted-foreground">
                                      {t('sprints.current.completed')}
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">2</div>
                                    <div className="text-muted-foreground">
                                      {t('sprints.previous.carriedOver')}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    <TabsContent value="reports" className="space-y-4">
                      <Card>
                        <CardHeader>
                          <CardTitle>{t('reports.title')}</CardTitle>
                          <CardDescription>
                            {t('reports.description')}
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">
                                    {t('reports.burndown.title')}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                                    <p className="text-xs text-muted-foreground">
                                      {t('reports.burndown.visualization')}
                                    </p>
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                  >
                                    {t('reports.view')}
                                  </Button>
                                </CardFooter>
                              </Card>
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">
                                    {t('reports.velocity.title')}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                                    <p className="text-xs text-muted-foreground">
                                      {t('reports.velocity.visualization')}
                                    </p>
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                  >
                                    {t('reports.view')}
                                  </Button>
                                </CardFooter>
                              </Card>
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">
                                    {t('reports.cumulative.title')}
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                                    <p className="text-xs text-muted-foreground">
                                      {t('reports.cumulative.visualization')}
                                    </p>
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                  >
                                    {t('reports.view')}
                                  </Button>
                                </CardFooter>
                              </Card>
                            </div>

                            <div className="rounded-md border p-4">
                              <h3 className="font-medium mb-2">
                                {t('reports.custom.title')}
                              </h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">
                                    {t('reports.custom.retrospective')}
                                  </span>
                                  <Button variant="outline" size="sm">
                                    {t('reports.custom.generate')}
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">
                                    {t('reports.custom.resolution')}
                                  </span>
                                  <Button variant="outline" size="sm">
                                    {t('reports.custom.generate')}
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">
                                    {t('reports.custom.workload')}
                                  </span>
                                  <Button variant="outline" size="sm">
                                    {t('reports.custom.generate')}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}