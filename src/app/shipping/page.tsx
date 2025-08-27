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
  Barcode,
  Printer,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  QrCode,
  Weight,
  Box
} from 'lucide-react'

export default function ShippingPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCarrier, setSelectedCarrier] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock data
  const shipments = [
    {
      id: 'SHP-001',
      orderId: 'ORD-001',
      orderNumber: 'EBAY-123456',
      customerName: 'John Smith',
      carrier: 'Royal Mail',
      service: 'Tracked 48',
      trackingNumber: 'TRK123456789GB',
      weight: 0.5,
      dimensions: '25x15x5 cm',
      cost: 3.99,
      labelUrl: '/labels/shp-001.pdf',
      status: 'delivered',
      shippedAt: '2024-01-15T10:30:00Z',
      deliveredAt: '2024-01-17T14:20:00Z'
    },
    {
      id: 'SHP-002',
      orderId: 'ORD-003',
      orderNumber: 'VINT-345678',
      customerName: 'Michael Brown',
      carrier: 'Royal Mail',
      service: 'Tracked 24',
      trackingNumber: 'TRK987654321GB',
      weight: 0.8,
      dimensions: '30x20x8 cm',
      cost: 5.99,
      labelUrl: '/labels/shp-002.pdf',
      status: 'shipped',
      shippedAt: '2024-01-16T09:15:00Z',
      deliveredAt: null
    },
    {
      id: 'SHP-003',
      orderId: 'ORD-002',
      orderNumber: 'AMZ-789012',
      customerName: 'Emma Wilson',
      carrier: 'Royal Mail',
      service: 'Special Delivery',
      trackingNumber: null,
      weight: 1.2,
      dimensions: '35x25x10 cm',
      cost: 8.99,
      labelUrl: null,
      status: 'created',
      shippedAt: null,
      deliveredAt: null
    },
    {
      id: 'SHP-004',
      orderId: 'ORD-004',
      orderNumber: 'DEPOP-901234',
      customerName: 'Sarah Davis',
      carrier: 'DHL',
      service: 'Express Worldwide',
      trackingNumber: 'DHL4567891234',
      weight: 2.5,
      dimensions: '40x30x15 cm',
      cost: 15.99,
      labelUrl: '/labels/shp-004.pdf',
      status: 'dispatched',
      shippedAt: '2024-01-14T16:45:00Z',
      deliveredAt: null
    }
  ]

  const carriers = ['all', 'Royal Mail', 'DHL', 'UPS', 'FedEx']
  const statuses = ['all', 'created', 'printed', 'dispatched', 'shipped', 'delivered']

  const filteredShipments = shipments.filter(shipment => {
    const matchesSearch = shipment.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.orderNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         shipment.trackingNumber?.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCarrier = selectedCarrier === 'all' || shipment.carrier === selectedCarrier
    const matchesStatus = selectedStatus === 'all' || shipment.status === selectedStatus
    
    return matchesSearch && matchesCarrier && matchesStatus
  })

  const totalShipments = shipments.length
  const pendingShipments = shipments.filter(s => s.status === 'created' || s.status === 'printed').length
  const inTransitShipments = shipments.filter(s => s.status === 'dispatched' || s.status === 'shipped').length
  const deliveredShipments = shipments.filter(s => s.status === 'delivered').length
  const totalShippingCost = shipments.reduce((sum, s) => sum + s.cost, 0)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'created':
        return <Package className="w-4 h-4 text-gray-500" />
      case 'printed':
        return <Printer className="w-4 h-4 text-blue-500" />
      case 'dispatched':
        return <Truck className="w-4 h-4 text-purple-500" />
      case 'shipped':
        return <Truck className="w-4 h-4 text-orange-500" />
      case 'delivered':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const formatDate = (dateString: string | null) => {
    if (!dateString) return '-'
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  return (
    <MainLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Shipping & Operations</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
              Manage shipping workflows, print labels, and track deliveries
            </p>
          </div>
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export Manifest
            </Button>
            <Button className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Create Shipment
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Shipments</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalShipments}</div>
              <p className="text-xs text-muted-foreground">
                All time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{pendingShipments}</div>
              <p className="text-xs text-muted-foreground">
                Need processing
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Transit</CardTitle>
              <Truck className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{inTransitShipments}</div>
              <p className="text-xs text-muted-foreground">
                On the way
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Shipping Cost</CardTitle>
              <Truck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£{totalShippingCost.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Total spent
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common shipping operations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Button variant="outline" className="h-20 flex-col">
                <Barcode className="h-6 w-6 mb-2" />
                <span>Scan Barcode</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Printer className="h-6 w-6 mb-2" />
                <span>Print Labels</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <QrCode className="h-6 w-6 mb-2" />
                <span>Bulk Print</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col">
                <Download className="h-6 w-6 mb-2" />
                <span>Manifest</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Shipments</CardTitle>
            <CardDescription>View and manage all shipments and tracking information</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search shipments by customer, order, or tracking..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCarrier} onValueChange={setSelectedCarrier}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Carrier" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg backdrop-blur-lg">
                  {carriers.map((carrier) => (
                    <SelectItem key={carrier} value={carrier} className="hover:bg-accent">
                      {carrier === 'all' ? 'All Carriers' : carrier}
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

            {/* Shipments Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Carrier & Service</TableHead>
                    <TableHead>Package</TableHead>
                    <TableHead>Tracking</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Dates</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredShipments.map((shipment) => (
                    <TableRow key={shipment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{shipment.orderNumber}</div>
                          <div className="text-sm text-gray-500">{shipment.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{shipment.customerName}</div>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">{shipment.carrier}</div>
                          <div className="text-sm text-gray-500">{shipment.service}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Weight className="w-3 h-3 mr-1 text-gray-400" />
                            {shipment.weight} kg
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <Box className="w-3 h-3 mr-1 text-gray-400" />
                            {shipment.dimensions}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {shipment.trackingNumber ? (
                          <div className="flex items-center space-x-1">
                            <span className="text-sm font-mono">{shipment.trackingNumber}</span>
                            <ExternalLink className="w-3 h-3 text-blue-500" />
                          </div>
                        ) : (
                          <span className="text-gray-400 text-sm">Not assigned</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(shipment.status)}
                          <Badge variant={
                            shipment.status === 'delivered' ? 'default' :
                            shipment.status === 'shipped' ? 'secondary' :
                            shipment.status === 'dispatched' ? 'secondary' :
                            shipment.status === 'printed' ? 'outline' : 'destructive'
                          }>
                            {shipment.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1 text-xs">
                          <div>
                            <span className="text-gray-500">Shipped: </span>
                            <span>{formatDate(shipment.shippedAt)}</span>
                          </div>
                          {shipment.deliveredAt && (
                            <div>
                              <span className="text-gray-500">Delivered: </span>
                              <span>{formatDate(shipment.deliveredAt)}</span>
                            </div>
                          )}
                        </div>
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
                              Edit Shipment
                            </DropdownMenuItem>
                            {shipment.labelUrl && (
                              <DropdownMenuItem>
                                <Printer className="mr-2 h-4 w-4" />
                                Print Label
                              </DropdownMenuItem>
                            )}
                            {shipment.status === 'created' && (
                              <DropdownMenuItem>
                                <Printer className="mr-2 h-4 w-4" />
                                Generate Label
                              </DropdownMenuItem>
                            )}
                            {shipment.trackingNumber && (
                              <DropdownMenuItem>
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Track Package
                              </DropdownMenuItem>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {filteredShipments.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No shipments found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}