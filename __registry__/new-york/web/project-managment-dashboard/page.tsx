import Link from "next/link";
import { ArrowRight, CheckCircle, Clock, ListTodo } from "lucide-react";

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
                        Current Sprint
                      </Button>
                      <Button>
                        <ListTodo className="mr-2 h-4 w-4" />
                        Create Issue
                      </Button>
                    </div>
                  </div>
                  <Tabs defaultValue="overview" className="space-y-4">
                    <TabsList>
                      <TabsTrigger value="overview">Overview</TabsTrigger>
                      <TabsTrigger value="sprints">Sprints</TabsTrigger>
                      <TabsTrigger value="reports">Reports</TabsTrigger>
                    </TabsList>
                    <TabsContent value="overview" className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              Open Issues
                            </CardTitle>
                            <ListTodo className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">24</div>
                            <p className="text-xs text-muted-foreground">
                              +3 since yesterday
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              In Progress
                            </CardTitle>
                            <Clock className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">8</div>
                            <p className="text-xs text-muted-foreground">
                              +2 since yesterday
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              Completed
                            </CardTitle>
                            <CheckCircle className="h-4 w-4 text-muted-foreground" />
                          </CardHeader>
                          <CardContent>
                            <div className="text-2xl font-bold">16</div>
                            <p className="text-xs text-muted-foreground">
                              +5 this week
                            </p>
                          </CardContent>
                        </Card>
                        <Card>
                          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                              Sprint Progress
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
                              Sprint ends in 5 days
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4">
                          <CardHeader>
                            <CardTitle>Current Sprint</CardTitle>
                            <CardDescription>
                              Sprint #24 - April 5 to April 19
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <SprintProgress />
                          </CardContent>
                          <CardFooter>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="#">
                                View Board
                                <ArrowRight className="ml-2 h-4 w-4" />
                              </Link>
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card className="sm:col-span-4 lg:col-span-3">
                          <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>
                              Latest updates from your team
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <RecentActivity />
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              View All Activity
                            </Button>
                          </CardFooter>
                        </Card>
                      </div>
                      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                        <Card className="col-span-4 lg:col-span-3">
                          <CardHeader>
                            <CardTitle>Team Members</CardTitle>
                            <CardDescription>
                              Manage your team and their access
                            </CardDescription>
                          </CardHeader>
                          <CardContent>
                            <TeamMembers />
                          </CardContent>
                          <CardFooter>
                            <Button variant="outline" className="w-full">
                              View All Members
                            </Button>
                          </CardFooter>
                        </Card>
                        <Card className="col-span-4">
                          <CardHeader>
                            <CardTitle>Projects</CardTitle>
                            <CardDescription>
                              Your active projects
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="grid gap-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                              <ProjectCard
                                title="Website Redesign"
                                description="Redesign the company website with new branding"
                                progress={75}
                                dueDate="Apr 15, 2025"
                                team={["JD", "AS", "TK"]}
                              />
                              <ProjectCard
                                title="Mobile App Development"
                                description="Create a new mobile app for customers"
                                progress={45}
                                dueDate="May 20, 2025"
                                team={["JD", "AS"]}
                              />
                            </div>
                            <Button
                              variant="outline"
                              className="w-full"
                              asChild
                            >
                              <Link href="#">
                                View All Projects
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
                          <CardTitle>Sprint Management</CardTitle>
                          <CardDescription>
                            View and manage your sprints
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="rounded-md border">
                              <div className="flex items-center justify-between p-4">
                                <div>
                                  <h3 className="font-medium">
                                    Current Sprint: Sprint #24
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    April 5 - April 19, 2025
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    Manage
                                  </Button>
                                  <Button size="sm">View Board</Button>
                                </div>
                              </div>
                              <div className="border-t p-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span>Progress</span>
                                    <span className="font-medium">65%</span>
                                  </div>
                                  <Progress value={65} />
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                                  <div>
                                    <div className="font-medium">24</div>
                                    <div className="text-muted-foreground">
                                      Total Issues
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">16</div>
                                    <div className="text-muted-foreground">
                                      Completed
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">8</div>
                                    <div className="text-muted-foreground">
                                      Remaining
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-md border">
                              <div className="flex items-center justify-between p-4">
                                <div>
                                  <h3 className="font-medium">
                                    Next Sprint: Sprint #25
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    April 20 - May 3, 2025
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    Plan Sprint
                                  </Button>
                                </div>
                              </div>
                              <div className="border-t p-4">
                                <div className="text-center text-sm">
                                  <p className="text-muted-foreground">
                                    Sprint planning not started yet
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="rounded-md border">
                              <div className="flex items-center justify-between p-4">
                                <div>
                                  <h3 className="font-medium">
                                    Previous Sprint: Sprint #23
                                  </h3>
                                  <p className="text-sm text-muted-foreground">
                                    March 22 - April 4, 2025
                                  </p>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button variant="outline" size="sm">
                                    View Report
                                  </Button>
                                </div>
                              </div>
                              <div className="border-t p-4">
                                <div className="space-y-2">
                                  <div className="flex items-center justify-between text-sm">
                                    <span>Completed</span>
                                    <span className="font-medium">92%</span>
                                  </div>
                                  <Progress value={92} />
                                </div>
                                <div className="mt-4 grid grid-cols-3 gap-4 text-center text-sm">
                                  <div>
                                    <div className="font-medium">26</div>
                                    <div className="text-muted-foreground">
                                      Total Issues
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">24</div>
                                    <div className="text-muted-foreground">
                                      Completed
                                    </div>
                                  </div>
                                  <div>
                                    <div className="font-medium">2</div>
                                    <div className="text-muted-foreground">
                                      Carried Over
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
                          <CardTitle>Reports</CardTitle>
                          <CardDescription>
                            Generate and view reports for your projects
                          </CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">
                                    Burndown Chart
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                                    <p className="text-xs text-muted-foreground">
                                      Burndown chart visualization
                                    </p>
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                  >
                                    View
                                  </Button>
                                </CardFooter>
                              </Card>
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">
                                    Velocity Chart
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                                    <p className="text-xs text-muted-foreground">
                                      Velocity chart visualization
                                    </p>
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                  >
                                    View
                                  </Button>
                                </CardFooter>
                              </Card>
                              <Card>
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base">
                                    Cumulative Flow
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <div className="h-[150px] flex items-center justify-center border rounded-md">
                                    <p className="text-xs text-muted-foreground">
                                      Cumulative flow visualization
                                    </p>
                                  </div>
                                </CardContent>
                                <CardFooter>
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full"
                                  >
                                    View
                                  </Button>
                                </CardFooter>
                              </Card>
                            </div>

                            <div className="rounded-md border p-4">
                              <h3 className="font-medium mb-2">
                                Custom Reports
                              </h3>
                              <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">
                                    Sprint Retrospective Report
                                  </span>
                                  <Button variant="outline" size="sm">
                                    Generate
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">
                                    Issue Resolution Time Report
                                  </span>
                                  <Button variant="outline" size="sm">
                                    Generate
                                  </Button>
                                </div>
                                <div className="flex items-center justify-between">
                                  <span className="text-sm">
                                    Team Workload Report
                                  </span>
                                  <Button variant="outline" size="sm">
                                    Generate
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
