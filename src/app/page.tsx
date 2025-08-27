'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { RevenueChart } from '@/components/charts/revenue-chart'
import { CategoryChart } from '@/components/charts/category-chart'
import { 
  ShoppingCart, 
  Package, 
  TrendingUp, 
  AlertTriangle, 
  DollarSign, 
  Percent,
  Truck
} from 'lucide-react'

export default function Dashboard() {
  // Mock data for demonstration
  const kpis = [
    {
      title: "Today's Orders",
      value: "24",
      change: "+12%",
      icon: ShoppingCart,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Unshipped Orders",
      value: "8",
      change: "-3%",
      icon: Truck,
      color: "text-orange-600",
      bgColor: "bg-orange-50"
    },
    {
      title: "MTD Revenue",
      value: "£12,450",
      change: "+23%",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "MTD Profit",
      value: "£3,890",
      change: "+18%",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Inventory Value",
      value: "£45,230",
      change: "+5%",
      icon: Package,
      color: "text-indigo-600",
      bgColor: "bg-indigo-50"
    },
    {
      title: "Sell-through %",
      value: "78%",
      change: "+2%",
      icon: Percent,
      color: "text-teal-600",
      bgColor: "bg-teal-50"
    }
  ]

  const alerts = [
    { type: 'warning', message: 'Low stock: iPhone 13 Pro (3 left)', time: '2 hours ago' },
    { type: 'error', message: 'Overdue shipment: Order #1234', time: '4 hours ago' },
    { type: 'info', message: 'Pending payout: £450 from eBay', time: '1 day ago' }
  ]

  const recentOrders = [
    { id: 'ORD-001', customer: 'John Smith', amount: '£89.99', status: 'shipped', channel: 'eBay' },
    { id: 'ORD-002', customer: 'Emma Wilson', amount: '£156.50', status: 'processing', channel: 'Amazon' },
    { id: 'ORD-003', customer: 'Michael Brown', amount: '£45.00', status: 'delivered', channel: 'Vinted' },
    { id: 'ORD-004', customer: 'Sarah Davis', amount: '£234.99', status: 'pending', channel: 'Depop' }
  ]

  return (
    <MainLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Dashboard
            </h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
              Welcome back! Here's what's happening with your business today.
            </p>
          </div>
          <div className="mt-3 sm:mt-0">
            <Button className="button-modern bg-primary text-primary-foreground hover:bg-primary/90 w-full sm:w-auto">
              Generate Report
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {kpis.map((kpi, index) => (
            <Card key={index} className="card-modern">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <div className={`p-2 sm:p-3 rounded-xl ${kpi.bgColor} shadow-sm`}>
                  <kpi.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${kpi.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-xl sm:text-2xl font-bold">
                  {kpi.value}
                </div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {kpi.change} from last month
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Charts Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Tabs defaultValue="revenue" className="space-y-4">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="revenue" className="text-xs sm:text-sm">Revenue Trends</TabsTrigger>
                <TabsTrigger value="categories" className="text-xs sm:text-sm">Category Performance</TabsTrigger>
              </TabsList>
              
              <TabsContent value="revenue" className="space-y-4">
                <RevenueChart />
              </TabsContent>

              <TabsContent value="categories" className="space-y-4">
                <CategoryChart />
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-4 sm:space-y-6">
            {/* Alerts */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center text-sm sm:text-base">
                  <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-orange-500" />
                  Alerts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 sm:p-4 rounded-xl bg-muted/10 border border-border/50 hover:bg-muted/20 transition-all duration-300">
                    <div className={`w-2 h-2 rounded-full mt-2 self-start ${
                      alert.type === 'error' ? 'bg-red-500' :
                      alert.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
                    }`} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Orders */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="text-sm sm:text-base">Recent Orders</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 sm:p-4 rounded-xl bg-muted/10 border border-border/50 hover:bg-muted/20 transition-all duration-300 space-y-2 sm:space-y-0">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{order.id}</p>
                      <p className="text-xs text-muted-foreground truncate">{order.customer}</p>
                    </div>
                    <div className="text-right sm:text-left">
                      <p className="text-sm font-medium">{order.amount}</p>
                      <div className="flex items-center justify-start sm:justify-end space-x-2 mt-1">
                        <Badge variant={
                          order.status === 'shipped' ? 'default' :
                          order.status === 'delivered' ? 'secondary' :
                          order.status === 'processing' ? 'secondary' : 'destructive'
                        } className="badge-modern text-xs">
                          {order.status}
                        </Badge>
                        <Badge variant="outline" className="badge-modern text-xs">{order.channel}</Badge>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}