'use client'

import { useState } from 'react'
import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Badge } from '@/components/ui/badge'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { 
  Plus, 
  Search, 
  Filter, 
  Download, 
  MoreHorizontal,
  Edit,
  Eye,
  Truck,
  Package,
  DollarSign,
  Users,
  CheckCircle,
  Clock,
  XCircle,
  ShoppingCart,
  ExternalLink
} from 'lucide-react'

export default function OrdersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedChannel, setSelectedChannel] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock data
  const orders = [
    {
      id: 'ORD-001',
      channel: 'eBay',
      channelOrderId: 'EBAY-123456',
      customerName: 'John Smith',
      customerEmail: 'john.smith@email.com',
      status: 'shipped',
      subtotal: 89.99,
      shippingCost: 4.99,
      platformFees: 8.99,
      total: 94.98,
      netProfit: 76.00,
      trackingNumber: 'TRK123456789',
      shippedAt: '2024-01-15T10:30:00Z',
      items: [
        { name: 'iPhone 13 Case', quantity: 1, price: 89.99 }
      ]
    },
    {
      id: 'ORD-002',
      channel: 'Amazon',
      channelOrderId: 'AMZ-789012',
      customerName: 'Emma Wilson',
      customerEmail: 'emma.wilson@email.com',
      status: 'processing',
      subtotal: 156.50,
      shippingCost: 0.00,
      platformFees: 15.65,
      total: 156.50,
      netProfit: 140.85,
      trackingNumber: null,
      shippedAt: null,
      items: [
        { name: 'AirPods Pro', quantity: 1, price: 156.50 }
      ]
    },
    {
      id: 'ORD-003',
      channel: 'Vinted',
      channelOrderId: 'VINT-345678',
      customerName: 'Michael Brown',
      customerEmail: 'michael.brown@email.com',
      status: 'delivered',
      subtotal: 45.00,
      shippingCost: 3.50,
      platformFees: 2.25,
      total: 48.50,
      netProfit: 39.25,
      trackingNumber: 'TRK987654321',
      shippedAt: '2024-01-12T14:20:00Z',
      items: [
        { name: 'Vintage Jacket', quantity: 1, price: 45.00 }
      ]
    },
    {
      id: 'ORD-004',
      channel: 'Depop',
      channelOrderId: 'DEPOP-901234',
      customerName: 'Sarah Davis',
      customerEmail: 'sarah.davis@email.com',
      status: 'pending',
      subtotal: 234.99,
      shippingCost: 5.99,
      platformFees: 23.50,
      total: 240.98,
      netProfit: 211.49,
      trackingNumber: null,
      shippedAt: null,
      items: [
        { name: 'Designer Handbag', quantity: 1, price: 234.99 }
      ]
    }
  ]

  const channels = ['all', 'eBay', 'Amazon', 'Vinted', 'Depop']
  const statuses = ['all', 'pending', 'processing', 'shipped', 'delivered', 'cancelled']

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.channelOrderId?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesChannel = selectedChannel === 'all' || order.channel === selectedChannel
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus
    
    return matchesSearch && matchesChannel && matchesStatus
  })

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0)
  const totalProfit = orders.reduce((sum, order) => sum + order.netProfit, 0)
  const pendingOrders = orders.filter(o => o.status === 'pending' || o.status === 'processing').length
  const shippedOrders = orders.filter(o => o.status === 'shipped').length

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'processing':
        return <Package className="w-4 h-4 text-blue-500" />
      case 'shipped':
        return <Truck className="w-4 h-4 text-purple-500" />
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'cancelled':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const getChannelIcon = (channel: string) => {
    switch (channel) {
      case 'eBay':
        return '🛒'
      case 'Amazon':
        return '📦'
      case 'Vinted':
        return '👕'
      case 'Depop':
        return '🛍️'
      default:
        return '📱'
    }
  }

  return (
    <MainLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Orders</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
              Manage orders from all your sales channels
            </p>
          </div>
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Manual Order
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">£{totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Across all channels
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-green-600">£{totalProfit.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                After fees & shipping
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <Clock className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-orange-600">{pendingOrders}</div>
              <p className="text-xs text-muted-foreground">
                Need attention
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">To Ship</CardTitle>
              <Truck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-blue-600">{shippedOrders}</div>
              <p className="text-xs text-muted-foreground">
                Ready for dispatch
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Orders List</CardTitle>
            <CardDescription>View and manage orders from all channels</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search orders by customer, order ID..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedChannel} onValueChange={setSelectedChannel}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Channel" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg backdrop-blur-lg">
                  {channels.map((channel) => (
                    <SelectItem key={channel} value={channel} className="hover:bg-accent">
                      {channel === 'all' ? 'All Channels' : channel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg backdrop-blur-lg">
                  {statuses.map((status) => (
                    <SelectItem key={status} value={status} className="hover:bg-accent">
                      {status === 'all' ? 'All Statuses' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Orders Table - Mobile Card View */}
            <div className="block sm:hidden space-y-3">
              {filteredOrders.map((order) => (
                <Card key={order.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm">{order.id}</h3>
                      <p className="text-xs text-gray-500">{order.channelOrderId}</p>
                      <p className="text-xs text-gray-500 mt-1 truncate">{order.customerName}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(order.status)}
                      <Badge variant={
                        order.status === 'delivered' ? 'default' :
                        order.status === 'shipped' ? 'secondary' :
                        order.status === 'processing' ? 'secondary' :
                        order.status === 'pending' ? 'outline' : 'destructive'
                      }>
                        {order.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-500">Channel:</span>
                      <div className="flex items-center space-x-1">
                        <span>{getChannelIcon(order.channel)}</span>
                        <Badge variant="outline" className="text-xs">{order.channel}</Badge>
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">Total:</span>
                      <p className="font-medium">£{order.total.toFixed(2)}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Profit:</span>
                      <p className="font-medium text-green-600">£{order.netProfit.toFixed(2)}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Tracking:</span>
                      {order.trackingNumber ? (
                        <div className="flex items-center space-x-1">
                          <span className="font-mono text-xs truncate">{order.trackingNumber}</span>
                          <ExternalLink className="w-3 h-3 text-blue-500 flex-shrink-0" />
                        </div>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-3">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Eye className="mr-2 h-4 w-4" />
                          View Details
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Edit className="mr-2 h-4 w-4" />
                          Edit Order
                        </DropdownMenuItem>
                        {order.status === 'pending' && (
                          <DropdownMenuItem>
                            <Package className="mr-2 h-4 w-4" />
                            Process Order
                          </DropdownMenuItem>
                        )}
                        {order.status === 'processing' && (
                          <DropdownMenuItem>
                            <Truck className="mr-2 h-4 w-4" />
                            Ship Order
                          </DropdownMenuItem>
                        )}
                        <DropdownMenuItem>
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          View on {order.channel}
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Card>
              ))}
            </div>

            {/* Orders Table - Desktop View */}
            <div className="hidden sm:block rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Channel</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Net Profit</TableHead>
                    <TableHead>Tracking</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.id}</div>
                          <div className="text-sm text-gray-500">{order.channelOrderId}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{order.customerName}</div>
                          <div className="text-sm text-gray-500">{order.customerEmail}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span>{getChannelIcon(order.channel)}</span>
                          <Badge variant="outline">{order.channel}</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(order.status)}
                          <Badge variant={
                            order.status === 'delivered' ? 'default' :
                            order.status === 'shipped' ? 'secondary' :
                            order.status === 'processing' ? 'secondary' :
                            order.status === 'pending' ? 'outline' : 'destructive'
                          }>
                            {order.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">£{order.total.toFixed(2)}</TableCell>
                      <TableCell className="font-medium text-green-600">£{order.netProfit.toFixed(2)}</TableCell>
                      <TableCell>
                        {order.trackingNumber ? (
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-mono">{order.trackingNumber}</span>
                            <ExternalLink className="w-3 h-3 text-blue-500" />
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Order
                            </DropdownMenuItem>
                            {order.status === 'pending' && (
                              <DropdownMenuItem>
                                <Package className="mr-2 h-4 w-4" />
                                Process Order
                              </DropdownMenuItem>
                            )}
                            {order.status === 'processing' && (
                              <DropdownMenuItem>
                                <Truck className="mr-2 h-4 w-4" />
                                Ship Order
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              <ShoppingCart className="mr-2 h-4 w-4" />
                              View on {order.channel}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredOrders.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No orders found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}