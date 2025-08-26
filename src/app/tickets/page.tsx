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
  Ticket,
  Calendar,
  MapPin,
  DollarSign,
  TrendingUp,
  Clock,
  CheckCircle,
  XCircle,
  AlertTriangle
} from 'lucide-react'

export default function TicketsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedStatus, setSelectedStatus] = useState('all')
  const [selectedPayoutStatus, setSelectedPayoutStatus] = useState('all')

  // Mock data
  const tickets = [
    {
      id: 'TCK-001',
      event: 'Taylor Swift | The Eras Tour',
      venue: 'Wembley Stadium',
      eventDate: '2024-06-21T19:00:00Z',
      seats: 'Block A, Row 12, Seats 15-16',
      section: 'A',
      row: '12',
      cost: 450.00,
      listPrice: 650.00,
      salePrice: null,
      status: 'available',
      payoutStatus: 'pending',
      deadline: '2024-06-20T23:59:59Z',
      roi: null
    },
    {
      id: 'TCK-002',
      event: 'Coldplay | Music of the Spheres',
      venue: 'Manchester Arena',
      eventDate: '2024-08-15T18:30:00Z',
      seats: 'Block B, Row 8, Seat 22',
      section: 'B',
      row: '8',
      cost: 180.00,
      listPrice: 280.00,
      salePrice: 265.00,
      status: 'sold',
      payoutStatus: 'paid',
      deadline: '2024-08-14T23:59:59Z',
      roi: 47.22
    },
    {
      id: 'TCK-003',
      event: 'Ed Sheeran | Mathematics Tour',
      venue: 'O2 Arena London',
      eventDate: '2024-07-10T19:30:00Z',
      seats: 'Block C, Row 15, Seats 5-6',
      section: 'C',
      row: '15',
      cost: 320.00,
      listPrice: 450.00,
      salePrice: null,
      status: 'listed',
      payoutStatus: 'pending',
      deadline: '2024-07-09T23:59:59Z',
      roi: null
    },
    {
      id: 'TCK-004',
      event: 'Bruce Springsteen & The E Street Band',
      venue: 'Hyde Park London',
      eventDate: '2024-07-25T18:00:00Z',
      seats: 'Standing, GA Area',
      section: 'GA',
      row: null,
      cost: 150.00,
      listPrice: 220.00,
      salePrice: null,
      status: 'available',
      payoutStatus: 'pending',
      deadline: '2024-07-24T23:59:59Z',
      roi: null
    }
  ]

  const statuses = ['all', 'available', 'listed', 'sold', 'expired']
  const payoutStatuses = ['all', 'pending', 'paid', 'cancelled']

  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.event.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.venue.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.seats.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = selectedStatus === 'all' || ticket.status === selectedStatus
    const matchesPayoutStatus = selectedPayoutStatus === 'all' || ticket.payoutStatus === selectedPayoutStatus
    
    return matchesSearch && matchesStatus && matchesPayoutStatus
  })

  const totalCost = tickets.reduce((sum, ticket) => sum + ticket.cost, 0)
  const totalRevenue = tickets.reduce((sum, ticket) => sum + (ticket.salePrice || 0), 0)
  const totalProfit = totalRevenue - totalCost
  const averageROI = tickets.filter(t => t.roi !== null).reduce((sum, ticket) => sum + (ticket.roi || 0), 0) / tickets.filter(t => t.roi !== null).length || 0
  const availableTickets = tickets.filter(t => t.status === 'available').length
  const listedTickets = tickets.filter(t => t.status === 'listed').length

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'available':
        return <Ticket className="w-4 h-4 text-blue-500" />
      case 'listed':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'sold':
        return <CheckCircle className="w-4 h-4 text-green-500" />
      case 'expired':
        return <XCircle className="w-4 h-4 text-red-500" />
      default:
        return <Ticket className="w-4 h-4 text-gray-500" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const isDeadlineApproaching = (deadline: string) => {
    const deadlineDate = new Date(deadline)
    const now = new Date()
    const diffHours = (deadlineDate.getTime() - now.getTime()) / (1000 * 60 * 60)
    return diffHours <= 48 && diffHours > 0
  }

  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Ticket Hub</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Manage event ticket inventory and track ROI performance
            </p>
          </div>
          <div className="mt-4 sm:mt-0 flex space-x-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Tickets
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">£{totalCost.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {tickets.length} tickets acquired
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">£{totalRevenue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                From {tickets.filter(t => t.status === 'sold').length} sales
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Net Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-2xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                £{totalProfit.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Avg ROI: {averageROI.toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available</CardTitle>
              <Ticket className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{availableTickets + listedTickets}</div>
              <p className="text-xs text-muted-foreground">
                {availableTickets} available, {listedTickets} listed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Ticket Inventory</CardTitle>
            <CardDescription>View and manage your event ticket portfolio</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search tickets by event, venue, or seats..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
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
              <Select value={selectedPayoutStatus} onValueChange={setSelectedPayoutStatus}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Payout" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg backdrop-blur-lg">
                  {payoutStatuses.map((status) => (
                    <SelectItem key={status} value={status} className="hover:bg-accent">
                      {status === 'all' ? 'All Payouts' : status.charAt(0).toUpperCase() + status.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Tickets Table */}
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event</TableHead>
                    <TableHead>Date & Venue</TableHead>
                    <TableHead>Seats</TableHead>
                    <TableHead>Cost / Price</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Payout</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredTickets.map((ticket) => (
                    <TableRow key={ticket.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{ticket.event}</div>
                          <div className="text-sm text-gray-500">{ticket.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                            {formatDate(ticket.eventDate)}
                          </div>
                          <div className="flex items-center text-sm text-gray-500">
                            <MapPin className="w-3 h-3 mr-1 text-gray-400" />
                            {ticket.venue}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div className="font-medium">{ticket.seats}</div>
                          {ticket.section && (
                            <div className="text-gray-500">Section {ticket.section}{ticket.row && `, Row ${ticket.row}`}</div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm">
                            <span className="text-gray-500">Cost: </span>
                            <span className="font-medium">£{ticket.cost.toFixed(2)}</span>
                          </div>
                          <div className="text-sm">
                            <span className="text-gray-500">List: </span>
                            <span className="font-medium">£{ticket.listPrice.toFixed(2)}</span>
                          </div>
                          {ticket.salePrice && (
                            <div className="text-sm text-green-600">
                              <span className="text-gray-500">Sold: </span>
                              <span className="font-medium">£{ticket.salePrice.toFixed(2)}</span>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(ticket.status)}
                          <Badge variant={
                            ticket.status === 'sold' ? 'default' :
                            ticket.status === 'listed' ? 'secondary' :
                            ticket.status === 'available' ? 'outline' : 'destructive'
                          }>
                            {ticket.status}
                          </Badge>
                          {isDeadlineApproaching(ticket.deadline) && (
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
                          )}
                        </div>
                      </TableCell>
                      <TableCell>
                        {ticket.roi !== null ? (
                          <div className={`font-medium ${ticket.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {ticket.roi.toFixed(1)}%
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <Badge variant={
                          ticket.payoutStatus === 'paid' ? 'default' :
                          ticket.payoutStatus === 'pending' ? 'secondary' : 'destructive'
                        }>
                          {ticket.payoutStatus}
                        </Badge>
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
                              Edit Ticket
                            </DropdownMenuItem>
                            {ticket.status === 'available' && (
                              <DropdownMenuItem>
                                <Clock className="mr-2 h-4 w-4" />
                                List for Sale
                              </DropdownMenuItem>
                            )}
                            {ticket.status === 'listed' && (
                              <DropdownMenuItem>
                                <XCircle className="mr-2 h-4 w-4" />
                                Unlist
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

            {filteredTickets.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No tickets found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}