'use client'

import { useState } from 'react'
import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  PieChart, 
  DollarSign, 
  ShoppingCart, 
  Package, 
  Users,
  Calendar,
  Download,
  Filter,
  RefreshCw
} from 'lucide-react'
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts'

export default function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState('6months')

  // Mock analytics data for different time periods
  const analyticsData = {
    '1month': {
      revenue: [
        { month: 'Jun', revenue: 12450, profit: 3890, orders: 72 }
      ],
      categories: [
        { category: 'Electronics', revenue: 4800, profit: 1200, growth: 12, items: 45 },
        { category: 'TCG Cards', revenue: 3200, profit: 960, growth: 23, items: 28 },
        { category: 'Clothing', revenue: 2100, profit: 525, growth: 8, items: 67 },
        { category: 'Accessories', revenue: 1500, profit: 375, growth: 5, items: 89 },
        { category: 'Other', revenue: 850, profit: 212, growth: -2, items: 34 }
      ],
      channels: [
        { channel: 'eBay', revenue: 5400, profit: 1350, orders: 26, fees: 324 },
        { channel: 'Amazon', revenue: 4800, profit: 1200, orders: 22, fees: 384 },
        { channel: 'Vinted', revenue: 1500, profit: 375, orders: 13, fees: 75 },
        { channel: 'Depop', revenue: 750, profit: 187, orders: 11, fees: 45 }
      ],
      products: [
        { name: 'iPhone 13 Pro', revenue: 2100, profit: 525, units: 3, margin: 25 },
        { name: 'Charizard Holographic', revenue: 1800, profit: 900, units: 1, margin: 50 },
        { name: 'Nike Air Max', revenue: 1200, profit: 300, units: 4, margin: 25 },
        { name: 'PlayStation 5', revenue: 900, profit: 225, units: 2, margin: 25 },
        { name: 'Pikachu Card', revenue: 750, profit: 375, units: 3, margin: 50 }
      ],
      metrics: [
        {
          title: "Total Revenue",
          value: "£12,450",
          change: "+12%",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-50",
          period: "Last month"
        },
        {
          title: "Total Profit",
          value: "£3,890",
          change: "+15%",
          icon: TrendingUp,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          period: "Last month"
        },
        {
          title: "Average Order Value",
          value: "£172.92",
          change: "+5%",
          icon: ShoppingCart,
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          period: "vs last month"
        },
        {
          title: "Profit Margin",
          value: "31.3%",
          change: "+3%",
          icon: BarChart3,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          period: "this month"
        }
      ]
    },
    '3months': {
      revenue: [
        { month: 'Apr', revenue: 10500, profit: 2850, orders: 61 },
        { month: 'May', revenue: 11300, profit: 3100, orders: 67 },
        { month: 'Jun', revenue: 12450, profit: 3890, orders: 72 }
      ],
      categories: [
        { category: 'Electronics', revenue: 15600, profit: 3900, growth: 18, items: 98 },
        { category: 'TCG Cards', revenue: 9800, profit: 2940, growth: 34, items: 56 },
        { category: 'Clothing', revenue: 6800, profit: 1700, growth: 10, items: 145 },
        { category: 'Accessories', revenue: 4200, profit: 1050, growth: 6, items: 112 },
        { category: 'Other', revenue: 2800, profit: 700, growth: -3, items: 45 }
      ],
      channels: [
        { channel: 'eBay', revenue: 16200, profit: 4050, orders: 78, fees: 972 },
        { channel: 'Amazon', revenue: 14450, profit: 3612, orders: 67, fees: 1156 },
        { channel: 'Vinted', revenue: 5200, profit: 1300, orders: 45, fees: 260 },
        { channel: 'Depop', revenue: 3450, profit: 862, orders: 10, fees: 207 }
      ],
      products: [
        { name: 'iPhone 13 Pro', revenue: 4500, profit: 1125, units: 6, margin: 25 },
        { name: 'Charizard Holographic', revenue: 3600, profit: 1800, units: 2, margin: 50 },
        { name: 'Nike Air Max', revenue: 2700, profit: 675, units: 9, margin: 25 },
        { name: 'PlayStation 5', revenue: 2100, profit: 525, units: 4, margin: 25 },
        { name: 'Pikachu Card', revenue: 1800, profit: 900, units: 7, margin: 50 }
      ],
      metrics: [
        {
          title: "Total Revenue",
          value: "£34,250",
          change: "+18%",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-50",
          period: "Last 3 months"
        },
        {
          title: "Total Profit",
          value: "£9,840",
          change: "+22%",
          icon: TrendingUp,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          period: "Last 3 months"
        },
        {
          title: "Average Order Value",
          value: "£164.52",
          change: "+6%",
          icon: ShoppingCart,
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          period: "vs last 3 months"
        },
        {
          title: "Profit Margin",
          value: "28.7%",
          change: "+2%",
          icon: BarChart3,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          period: "last 3 months"
        }
      ]
    },
    '6months': {
      revenue: [
        { month: 'Jan', revenue: 8500, profit: 2100, orders: 45 },
        { month: 'Feb', revenue: 9200, profit: 2450, orders: 52 },
        { month: 'Mar', revenue: 7800, profit: 1950, orders: 38 },
        { month: 'Apr', revenue: 10500, profit: 2850, orders: 61 },
        { month: 'May', revenue: 11300, profit: 3100, orders: 67 },
        { month: 'Jun', revenue: 12450, profit: 3890, orders: 72 }
      ],
      categories: [
        { category: 'Electronics', revenue: 28500, profit: 7125, growth: 23, items: 156 },
        { category: 'TCG Cards', revenue: 19800, profit: 5940, growth: 45, items: 89 },
        { category: 'Clothing', revenue: 12400, profit: 3100, growth: 12, items: 234 },
        { category: 'Accessories', revenue: 8900, profit: 2225, growth: 8, items: 178 },
        { category: 'Other', revenue: 5600, profit: 1400, growth: -5, items: 67 }
      ],
      channels: [
        { channel: 'eBay', revenue: 32400, profit: 8100, orders: 156, fees: 1944 },
        { channel: 'Amazon', revenue: 28900, profit: 7225, orders: 134, fees: 2312 },
        { channel: 'Vinted', revenue: 8900, profit: 2225, orders: 78, fees: 445 },
        { channel: 'Depop', revenue: 6800, profit: 1700, orders: 45, fees: 408 }
      ],
      products: [
        { name: 'iPhone 13 Pro', revenue: 8900, profit: 2225, units: 12, margin: 25 },
        { name: 'Charizard Holographic', revenue: 6750, profit: 3375, units: 3, margin: 50 },
        { name: 'Nike Air Max', revenue: 5400, profit: 1350, units: 18, margin: 25 },
        { name: 'PlayStation 5', revenue: 4800, profit: 1200, units: 8, margin: 25 },
        { name: 'Pikachu Card', revenue: 4200, profit: 2100, units: 15, margin: 50 }
      ],
      metrics: [
        {
          title: "Total Revenue",
          value: "£77,200",
          change: "+23%",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-50",
          period: "Last 6 months"
        },
        {
          title: "Total Profit",
          value: "£19,300",
          change: "+28%",
          icon: TrendingUp,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          period: "Last 6 months"
        },
        {
          title: "Average Order Value",
          value: "£156.80",
          change: "+8%",
          icon: ShoppingCart,
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          period: "vs last month"
        },
        {
          title: "Profit Margin",
          value: "25.0%",
          change: "+2%",
          icon: BarChart3,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          period: "overall"
        }
      ]
    },
    '1year': {
      revenue: [
        { month: 'Jul', revenue: 7200, profit: 1800, orders: 41 },
        { month: 'Aug', revenue: 8100, profit: 2025, orders: 48 },
        { month: 'Sep', revenue: 7800, profit: 1950, orders: 44 },
        { month: 'Oct', revenue: 9200, profit: 2300, orders: 54 },
        { month: 'Nov', revenue: 10500, profit: 2625, orders: 62 },
        { month: 'Dec', revenue: 15800, profit: 3950, orders: 89 },
        { month: 'Jan', revenue: 8500, profit: 2100, orders: 45 },
        { month: 'Feb', revenue: 9200, profit: 2450, orders: 52 },
        { month: 'Mar', revenue: 7800, profit: 1950, orders: 38 },
        { month: 'Apr', revenue: 10500, profit: 2850, orders: 61 },
        { month: 'May', revenue: 11300, profit: 3100, orders: 67 },
        { month: 'Jun', revenue: 12450, profit: 3890, orders: 72 }
      ],
      categories: [
        { category: 'Electronics', revenue: 68400, profit: 17100, growth: 28, items: 412 },
        { category: 'TCG Cards', revenue: 52300, profit: 15690, growth: 67, items: 267 },
        { category: 'Clothing', revenue: 31200, profit: 7800, growth: 19, items: 678 },
        { category: 'Accessories', revenue: 21800, profit: 5450, growth: 14, items: 534 },
        { category: 'Other', revenue: 13500, profit: 3375, growth: -8, items: 201 }
      ],
      channels: [
        { channel: 'eBay', revenue: 78900, profit: 19725, orders: 389, fees: 4734 },
        { channel: 'Amazon', revenue: 68400, profit: 17100, orders: 312, fees: 5472 },
        { channel: 'Vinted', revenue: 23400, profit: 5850, orders: 198, fees: 1170 },
        { channel: 'Depop', revenue: 17500, profit: 4375, orders: 134, fees: 1050 }
      ],
      products: [
        { name: 'iPhone 13 Pro', revenue: 19800, profit: 4950, units: 28, margin: 25 },
        { name: 'Charizard Holographic', revenue: 15600, profit: 7800, units: 8, margin: 50 },
        { name: 'Nike Air Max', revenue: 12400, profit: 3100, units: 42, margin: 25 },
        { name: 'PlayStation 5', revenue: 10800, profit: 2700, units: 21, margin: 25 },
        { name: 'Pikachu Card', revenue: 9800, profit: 4900, units: 38, margin: 50 }
      ],
      metrics: [
        {
          title: "Total Revenue",
          value: "£186,300",
          change: "+45%",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-50",
          period: "Last year"
        },
        {
          title: "Total Profit",
          value: "£46,575",
          change: "+52%",
          icon: TrendingUp,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          period: "Last year"
        },
        {
          title: "Average Order Value",
          value: "£168.45",
          change: "+12%",
          icon: ShoppingCart,
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          period: "vs last year"
        },
        {
          title: "Profit Margin",
          value: "25.0%",
          change: "+4%",
          icon: BarChart3,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          period: "yearly"
        }
      ]
    },
    'all': {
      revenue: [
        { month: 'Jul', revenue: 7200, profit: 1800, orders: 41 },
        { month: 'Aug', revenue: 8100, profit: 2025, orders: 48 },
        { month: 'Sep', revenue: 7800, profit: 1950, orders: 44 },
        { month: 'Oct', revenue: 9200, profit: 2300, orders: 54 },
        { month: 'Nov', revenue: 10500, profit: 2625, orders: 62 },
        { month: 'Dec', revenue: 15800, profit: 3950, orders: 89 },
        { month: 'Jan', revenue: 8500, profit: 2100, orders: 45 },
        { month: 'Feb', revenue: 9200, profit: 2450, orders: 52 },
        { month: 'Mar', revenue: 7800, profit: 1950, orders: 38 },
        { month: 'Apr', revenue: 10500, profit: 2850, orders: 61 },
        { month: 'May', revenue: 11300, profit: 3100, orders: 67 },
        { month: 'Jun', revenue: 12450, profit: 3890, orders: 72 }
      ],
      categories: [
        { category: 'Electronics', revenue: 68400, profit: 17100, growth: 28, items: 412 },
        { category: 'TCG Cards', revenue: 52300, profit: 15690, growth: 67, items: 267 },
        { category: 'Clothing', revenue: 31200, profit: 7800, growth: 19, items: 678 },
        { category: 'Accessories', revenue: 21800, profit: 5450, growth: 14, items: 534 },
        { category: 'Other', revenue: 13500, profit: 3375, growth: -8, items: 201 }
      ],
      channels: [
        { channel: 'eBay', revenue: 78900, profit: 19725, orders: 389, fees: 4734 },
        { channel: 'Amazon', revenue: 68400, profit: 17100, orders: 312, fees: 5472 },
        { channel: 'Vinted', revenue: 23400, profit: 5850, orders: 198, fees: 1170 },
        { channel: 'Depop', revenue: 17500, profit: 4375, orders: 134, fees: 1050 }
      ],
      products: [
        { name: 'iPhone 13 Pro', revenue: 19800, profit: 4950, units: 28, margin: 25 },
        { name: 'Charizard Holographic', revenue: 15600, profit: 7800, units: 8, margin: 50 },
        { name: 'Nike Air Max', revenue: 12400, profit: 3100, units: 42, margin: 25 },
        { name: 'PlayStation 5', revenue: 10800, profit: 2700, units: 21, margin: 25 },
        { name: 'Pikachu Card', revenue: 9800, profit: 4900, units: 38, margin: 50 }
      ],
      metrics: [
        {
          title: "Total Revenue",
          value: "£186,300",
          change: "+45%",
          icon: DollarSign,
          color: "text-green-600",
          bgColor: "bg-green-50",
          period: "All time"
        },
        {
          title: "Total Profit",
          value: "£46,575",
          change: "+52%",
          icon: TrendingUp,
          color: "text-blue-600",
          bgColor: "bg-blue-50",
          period: "All time"
        },
        {
          title: "Average Order Value",
          value: "£168.45",
          change: "+12%",
          icon: ShoppingCart,
          color: "text-purple-600",
          bgColor: "bg-purple-50",
          period: "all time"
        },
        {
          title: "Profit Margin",
          value: "25.0%",
          change: "+4%",
          icon: BarChart3,
          color: "text-orange-600",
          bgColor: "bg-orange-50",
          period: "overall"
        }
      ]
    }
  }

  const currentData = analyticsData[selectedPeriod as keyof typeof analyticsData] || analyticsData['6months']

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Analytics
            </h1>
            <p className="text-muted-foreground mt-2">
              Comprehensive business insights and performance metrics
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex items-center space-x-2">
            <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
              <SelectTrigger className="w-[140px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1month">Last Month</SelectItem>
                <SelectItem value="3months">Last 3 Months</SelectItem>
                <SelectItem value="6months">Last 6 Months</SelectItem>
                <SelectItem value="1year">Last Year</SelectItem>
                <SelectItem value="all">All Time</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <RefreshCw className="w-4 h-4 mr-2" />
              Refresh
            </Button>
            <Button className="button-modern bg-primary text-primary-foreground hover:bg-primary/90">
              <Download className="w-4 h-4 mr-2" />
              Export
            </Button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentData.metrics.map((metric, index) => (
            <Card key={index} className="card-modern">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
                <div className={`p-3 rounded-xl ${metric.bgColor} shadow-sm`}>
                  <metric.icon className={`h-5 w-5 ${metric.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {metric.value}
                </div>
                <p className="text-xs text-green-600 flex items-center mt-1">
                  <TrendingUp className="h-3 w-3 mr-1" />
                  {metric.change} {metric.period}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Revenue & Profit Trends */}
          <div className="xl:col-span-2 space-y-6">
            <Tabs defaultValue="revenue" className="space-y-4">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="revenue">Revenue Trends</TabsTrigger>
                <TabsTrigger value="categories">Categories</TabsTrigger>
                <TabsTrigger value="channels">Channels</TabsTrigger>
                <TabsTrigger value="products">Top Products</TabsTrigger>
              </TabsList>
              
              <TabsContent value="revenue" className="space-y-4">
                <Card className="card-modern">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <BarChart3 className="w-5 h-5 mr-2" />
                      Revenue & Profit Trends
                    </CardTitle>
                    <CardDescription>Monthly revenue and profit for the last 6 months</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={currentData.revenue}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis 
                            dataKey="month" 
                            stroke="#6b7280"
                            fontSize={12}
                            tickLine={false}
                          />
                          <YAxis 
                            stroke="#6b7280"
                            fontSize={12}
                            tickLine={false}
                            tickFormatter={(value) => `£${value/1000}k`}
                          />
                          <Tooltip
                            formatter={(value, name) => [
                              `£${Number(value).toLocaleString()}`,
                              name === 'revenue' ? 'Revenue' : 'Profit'
                            ]}
                            labelFormatter={(label) => `${label}`}
                            contentStyle={{
                              backgroundColor: '#ffffff',
                              border: '1px solid #e5e7eb',
                              borderRadius: '0.5rem',
                              fontSize: '12px'
                            }}
                          />
                          <Legend />
                          <Line 
                            type="monotone" 
                            dataKey="revenue" 
                            stroke="#3b82f6" 
                            strokeWidth={3}
                            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, fill: '#3b82f6' }}
                            name="Revenue"
                          />
                          <Line 
                            type="monotone" 
                            dataKey="profit" 
                            stroke="#10b981" 
                            strokeWidth={3}
                            dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
                            activeDot={{ r: 6, fill: '#10b981' }}
                            name="Profit"
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-3 gap-4 mt-4 p-4 bg-muted/20 rounded-lg">
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Peak Month</p>
                        <p className="font-semibold">June (£12,450)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Growth Rate</p>
                        <p className="font-semibold text-green-600">+46% (Jan-Jun)</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground">Avg. Monthly</p>
                        <p className="font-semibold">£9,925</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="categories" className="space-y-4">
                <Card className="card-modern">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <PieChart className="w-5 h-5 mr-2" />
                      Category Performance
                    </CardTitle>
                    <CardDescription>Revenue and profit breakdown by product category</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={currentData.categories}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="revenue"
                              nameKey="category"
                            >
                              {currentData.categories.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={[
                                  '#3b82f6', // blue - Electronics
                                  '#10b981', // green - TCG Cards
                                  '#8b5cf6', // purple - Clothing
                                  '#f59e0b', // orange - Accessories
                                  '#6b7280'  // gray - Other
                                ][index]} />
                              ))}
                            </Pie>
                            <Tooltip
                              formatter={(value) => [`£${Number(value).toLocaleString()}`, 'Revenue']}
                              contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                fontSize: '12px'
                              }}
                            />
                            <Legend />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="space-y-3">
                        {currentData.categories.map((category, index) => (
                          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/10 border border-border/50 hover:bg-muted/20 transition-all duration-300">
                            <div className="flex items-center space-x-3">
                              <div className={`w-3 h-3 rounded-full ${
                                index === 0 ? 'bg-blue-500' :
                                index === 1 ? 'bg-green-500' :
                                index === 2 ? 'bg-purple-500' :
                                index === 3 ? 'bg-orange-500' : 'bg-gray-500'
                              }`} />
                              <div>
                                <p className="font-medium text-sm">{category.category}</p>
                                <p className="text-xs text-muted-foreground">{category.items} items</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="font-medium text-sm">£{category.revenue.toLocaleString()}</p>
                              <p className={`text-xs ${
                                category.growth > 0 ? 'text-green-600' : 'text-red-600'
                              }`}>
                                {category.growth > 0 ? '+' : ''}{category.growth}%
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 h-48">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={currentData.categories}>
                          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                          <XAxis 
                            dataKey="category" 
                            stroke="#6b7280"
                            fontSize={11}
                            tickLine={false}
                          />
                          <YAxis 
                            stroke="#6b7280"
                            fontSize={11}
                            tickLine={false}
                            tickFormatter={(value) => `£${value/1000}k`}
                          />
                          <Tooltip
                            formatter={(value, name) => [
                              `£${Number(value).toLocaleString()}`,
                              name === 'revenue' ? 'Revenue' : 'Profit'
                            ]}
                            contentStyle={{
                              backgroundColor: '#ffffff',
                              border: '1px solid #e5e7eb',
                              borderRadius: '0.5rem',
                              fontSize: '12px'
                            }}
                          />
                          <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="profit" fill="#10b981" name="Profit" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="channels" className="space-y-4">
                <Card className="card-modern">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2" />
                      Sales Channel Performance
                    </CardTitle>
                    <CardDescription>Revenue distribution by sales channel</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={currentData.channels}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="revenue"
                              nameKey="channel"
                            >
                              {currentData.channels.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={[
                                  '#3b82f6', // blue - eBay
                                  '#10b981', // green - Amazon
                                  '#f59e0b', // orange - Vinted
                                  '#8b5cf6'  // purple - Depop
                                ][index]} />
                              ))}
                            </Pie>
                            <Tooltip
                              formatter={(value) => [`£${Number(value).toLocaleString()}`, 'Revenue']}
                              contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                fontSize: '12px'
                              }}
                            />
                            <Legend />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={currentData.channels}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis 
                              dataKey="channel" 
                              stroke="#6b7280"
                              fontSize={11}
                              tickLine={false}
                            />
                            <YAxis 
                              stroke="#6b7280"
                              fontSize={11}
                              tickLine={false}
                              tickFormatter={(value) => `£${value/1000}k`}
                            />
                            <Tooltip
                              formatter={(value, name) => [
                                `£${Number(value).toLocaleString()}`,
                                name === 'revenue' ? 'Revenue' : name === 'profit' ? 'Profit' : 'Fees'
                              ]}
                              contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                fontSize: '12px'
                              }}
                            />
                            <Bar dataKey="revenue" fill="#3b82f6" name="Revenue" radius={[4, 4, 0, 0]} />
                            <Bar dataKey="profit" fill="#10b981" name="Profit" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      {currentData.channels.map((channel, index) => (
                        <div key={index} className="p-4 rounded-xl bg-muted/10 border border-border/50 hover:bg-muted/20 transition-all duration-300">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-semibold">{channel.channel}</h4>
                            <Badge variant="outline">{channel.orders} orders</Badge>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-sm">
                            <div>
                              <p className="text-muted-foreground">Revenue</p>
                              <p className="font-medium">£{channel.revenue.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Profit</p>
                              <p className="font-medium text-green-600">£{channel.profit.toLocaleString()}</p>
                            </div>
                            <div>
                              <p className="text-muted-foreground">Fees</p>
                              <p className="font-medium text-red-600">-£{channel.fees.toLocaleString()}</p>
                            </div>
                          </div>
                          <div className="mt-3">
                            <div className="flex justify-between text-xs text-muted-foreground mb-1">
                              <span>Profit Margin</span>
                              <span>{((channel.profit / channel.revenue) * 100).toFixed(1)}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2">
                              <div 
                                className="bg-green-500 h-2 rounded-full" 
                                style={{ width: `${(channel.profit / channel.revenue) * 100}%` }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="products" className="space-y-4">
                <Card className="card-modern">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Package className="w-5 h-5 mr-2" />
                      Top Performing Products
                    </CardTitle>
                    <CardDescription>Best-selling products by revenue and profit margin</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={currentData.products} layout="horizontal">
                            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                            <XAxis 
                              type="number"
                              stroke="#6b7280"
                              fontSize={11}
                              tickLine={false}
                              tickFormatter={(value) => `£${value}`}
                            />
                            <YAxis 
                              dataKey="name" 
                              type="category"
                              stroke="#6b7280"
                              fontSize={11}
                              tickLine={false}
                              width={120}
                            />
                            <Tooltip
                              formatter={(value, name) => [
                                `£${Number(value).toLocaleString()}`,
                                name === 'revenue' ? 'Revenue' : 'Profit'
                              ]}
                              contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                fontSize: '12px'
                              }}
                            />
                            <Bar dataKey="revenue" fill="#8b5cf6" name="Revenue" radius={[0, 4, 4, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <RechartsPieChart>
                            <Pie
                              data={currentData.products}
                              cx="50%"
                              cy="50%"
                              innerRadius={40}
                              outerRadius={80}
                              paddingAngle={5}
                              dataKey="profit"
                              nameKey="name"
                            >
                              {currentData.products.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={[
                                  '#8b5cf6', // purple - iPhone
                                  '#10b981', // green - Charizard
                                  '#f59e0b', // orange - Nike
                                  '#3b82f6', // blue - PlayStation
                                  '#ec4899'  // pink - Pikachu
                                ][index]} />
                              ))}
                            </Pie>
                            <Tooltip
                              formatter={(value) => [`£${Number(value).toLocaleString()}`, 'Profit']}
                              contentStyle={{
                                backgroundColor: '#ffffff',
                                border: '1px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                fontSize: '12px'
                              }}
                            />
                            <Legend />
                          </RechartsPieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    <div className="space-y-3 mt-6">
                      {currentData.products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-muted/10 border border-border/50 hover:bg-muted/20 transition-all duration-300">
                          <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center font-semibold text-sm text-white">
                              {index + 1}
                            </div>
                            <div>
                              <p className="font-medium">{product.name}</p>
                              <p className="text-sm text-muted-foreground">{product.units} units sold</p>
                            </div>
                          </div>
                          <div className="text-right space-y-1">
                            <p className="font-medium">£{product.revenue.toLocaleString()}</p>
                            <div className="flex items-center justify-end space-x-2">
                              <Badge variant="secondary" className="badge-modern">
                                {product.margin}% margin
                              </Badge>
                              <Badge variant="outline" className="badge-modern">
                                £{product.profit.toLocaleString()} profit
                              </Badge>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Key Insights */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                  Key Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-3 rounded-lg bg-green-50 border border-green-200">
                  <p className="text-sm font-medium text-green-800">Revenue Growth</p>
                  <p className="text-xs text-green-600 mt-1">46% increase over 6 months</p>
                </div>
                <div className="p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <p className="text-sm font-medium text-blue-800">Best Channel</p>
                  <p className="text-xs text-blue-600 mt-1">eBay: £32,400 revenue</p>
                </div>
                <div className="p-3 rounded-lg bg-purple-50 border border-purple-200">
                  <p className="text-sm font-medium text-purple-800">Top Category</p>
                  <p className="text-xs text-purple-600 mt-1">Electronics: £28,500</p>
                </div>
                <div className="p-3 rounded-lg bg-orange-50 border border-orange-200">
                  <p className="text-sm font-medium text-orange-800">Avg Order Value</p>
                  <p className="text-xs text-orange-600 mt-1">£156.80 (+8%)</p>
                </div>
              </CardContent>
            </Card>

            {/* Performance Metrics */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Performance Metrics
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Revenue Target</span>
                    <span>86%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '86%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Profit Target</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Order Target</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '78%' }} />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="card-modern">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm font-medium">Revenue milestone reached</p>
                    <p className="text-xs text-muted-foreground">£75K total revenue • 2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm font-medium">TCG category surge</p>
                    <p className="text-xs text-muted-foreground">45% growth this month • 5 hours ago</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2" />
                  <div>
                    <p className="text-sm font-medium">New best-selling product</p>
                    <p className="text-xs text-muted-foreground">iPhone 13 Pro leads • 1 day ago</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}