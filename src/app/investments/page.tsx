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
  TrendingUp,
  Package,
  Calendar,
  DollarSign,
  Target,
  CheckCircle,
  Clock,
  AlertTriangle,
  Sparkles
} from 'lucide-react'

export default function InvestmentsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedType, setSelectedType] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock data
  const investments = [
    {
      id: 'INV-001',
      type: 'TCG',
      name: 'Charizard Base Set 1st Edition',
      description: 'PSA 10 Gem Mint Condition',
      acquisitionDate: '2023-03-15T00:00:00Z',
      acquisitionCost: 15000.00,
      quantity: 1,
      currentValue: 25000.00,
      targetExitPrice: 30000.00,
      targetExitDate: '2025-12-31T23:59:59Z',
      status: 'active',
      roi: 66.67
    },
    {
      id: 'INV-002',
      type: 'TCG',
      name: 'Pokémon Booster Box - Base Set',
      description: 'Sealed booster box, unopened',
      acquisitionDate: '2023-06-20T00:00:00Z',
      acquisitionCost: 2500.00,
      quantity: 1,
      currentValue: 4200.00,
      targetExitPrice: 6000.00,
      targetExitDate: '2024-12-31T23:59:59Z',
      status: 'active',
      roi: 68.00
    },
    {
      id: 'INV-003',
      type: 'Physical',
      name: 'Rolex Submariner 116610LN',
      description: '2019 model, full set, excellent condition',
      acquisitionDate: '2022-11-10T00:00:00Z',
      acquisitionCost: 8500.00,
      quantity: 1,
      currentValue: 9800.00,
      targetExitPrice: 12000.00,
      targetExitDate: '2026-06-30T23:59:59Z',
      status: 'active',
      roi: 15.29
    },
    {
      id: 'INV-004',
      type: 'TCG',
      name: 'Magic: The Gathering - Black Lotus',
      description: 'Alpha edition, moderate play',
      acquisitionDate: '2023-01-08T00:00:00Z',
      acquisitionCost: 3500.00,
      quantity: 1,
      currentValue: 4200.00,
      targetExitPrice: 5000.00,
      targetExitDate: '2024-09-30T23:59:59Z',
      status: 'sold',
      roi: 20.00
    }
  ]

  const types = ['all', 'TCG', 'Physical', 'Digital']
  const statuses = ['all', 'active', 'sold', 'liquidated']

  const filteredInvestments = investments.filter(investment => {
    const matchesSearch = investment.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         investment.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'all' || investment.type === selectedType
    const matchesStatus = selectedStatus === 'all' || investment.status === selectedStatus
    
    return matchesSearch && matchesType && matchesStatus
  })

  const totalInvestment = investments.reduce((sum, inv) => sum + (inv.acquisitionCost * inv.quantity), 0)
  const totalCurrentValue = investments.reduce((sum, inv) => sum + ((inv.currentValue || 0) * inv.quantity), 0)
  const totalProfit = totalCurrentValue - totalInvestment
  const overallROI = totalInvestment > 0 ? (totalProfit / totalInvestment) * 100 : 0

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'TCG':
        return <Sparkles className="w-4 h-4 text-purple-500" />
      case 'Physical':
        return <Package className="w-4 h-4 text-blue-500" />
      case 'Digital':
        return <Target className="w-4 h-4 text-green-500" />
      default:
        return <Package className="w-4 h-4 text-gray-500" />
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <TrendingUp className="w-4 h-4 text-green-500" />
      case 'sold':
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      case 'liquidated':
        return <Clock className="w-4 h-4 text-orange-500" />
      default:
        return <Clock className="w-4 h-4 text-gray-500" />
    }
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    })
  }

  const isTargetApproaching = (targetDate: string) => {
    const target = new Date(targetDate)
    const now = new Date()
    const diffDays = (target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
    return diffDays <= 30 && diffDays > 0
  }

  return (
    <MainLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Investment Hub</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
              Track TCG cards, collectibles, and physical investments
            </p>
          </div>
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Investment
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Investment</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">£{totalInvestment.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                {investments.length} investments
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Value</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-green-600">£{totalCurrentValue.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Market value
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Profit</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className={`text-xl sm:text-2xl font-bold ${totalProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                £{totalProfit.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground">
                Overall ROI: {overallROI.toFixed(1)}%
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-blue-600">
                {investments.filter(i => i.status === 'active').length}
              </div>
              <p className="text-xs text-muted-foreground">
                Currently held
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Investment Portfolio</CardTitle>
            <CardDescription>View and manage your investment holdings</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search investments by name or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg backdrop-blur-lg">
                  {types.map((type) => (
                    <SelectItem key={type} value={type} className="hover:bg-accent">
                      {type === 'all' ? 'All Types' : type}
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

            {/* Investments Table - Mobile Card View */}
            <div className="block sm:hidden space-y-3">
              {filteredInvestments.map((investment) => (
                <Card key={investment.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{investment.name}</h3>
                      <p className="text-xs text-gray-500 mt-1">{investment.description}</p>
                      <div className="flex items-center space-x-1 mt-2">
                        {getTypeIcon(investment.type)}
                        <Badge variant="outline" className="text-xs">{investment.type}</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(investment.status)}
                      <Badge variant={
                        investment.status === 'active' ? 'default' :
                        investment.status === 'sold' ? 'secondary' : 'outline'
                      }>
                        {investment.status}
                      </Badge>
                      {investment.targetExitDate && isTargetApproaching(investment.targetExitDate) && (
                        <AlertTriangle className="w-4 h-4 text-orange-500" />
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-500">Acquisition:</span>
                      <p className="font-medium">£{(investment.acquisitionCost * investment.quantity).toLocaleString()}</p>
                      <p className="text-gray-500">{formatDate(investment.acquisitionDate)}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Current Value:</span>
                      <p className="font-medium">£{((investment.currentValue || 0) * investment.quantity).toLocaleString()}</p>
                      <p className="text-gray-500">{investment.quantity} {investment.quantity === 1 ? 'item' : 'items'}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">ROI:</span>
                      {investment.roi !== null ? (
                        <p className={`font-medium ${investment.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                          {investment.roi.toFixed(1)}%
                        </p>
                      ) : (
                        <p className="text-gray-400">-</p>
                      )}
                    </div>
                    <div>
                      <span className="text-gray-500">Target:</span>
                      <p className="font-medium">£{(investment.targetExitPrice * investment.quantity).toLocaleString()}</p>
                      <p className="text-gray-500">{formatDate(investment.targetExitDate)}</p>
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
                          Edit Investment
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <TrendingUp className="mr-2 h-4 w-4" />
                          Update Value
                        </DropdownMenuItem>
                        {investment.status === 'active' && (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Sold
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Card>
              ))}
            </div>

            {/* Investments Table - Desktop View */}
            <div className="hidden sm:block rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Investment</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Acquisition</TableHead>
                    <TableHead>Value</TableHead>
                    <TableHead>ROI</TableHead>
                    <TableHead>Target</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredInvestments.map((investment) => (
                    <TableRow key={investment.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{investment.name}</div>
                          <div className="text-sm text-gray-500">{investment.description}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(investment.type)}
                          <Badge variant="outline">{investment.type}</Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                            {formatDate(investment.acquisitionDate)}
                          </div>
                          <div className="text-sm font-medium">
                            £{(investment.acquisitionCost * investment.quantity).toLocaleString()}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">
                            £{((investment.currentValue || 0) * investment.quantity).toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            {investment.quantity} {investment.quantity === 1 ? 'item' : 'items'}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        {investment.roi !== null ? (
                          <div className={`font-medium ${investment.roi >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {investment.roi.toFixed(1)}%
                          </div>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="text-sm font-medium">
                            £{(investment.targetExitPrice * investment.quantity).toLocaleString()}
                          </div>
                          <div className="text-xs text-gray-500">
                            {formatDate(investment.targetExitDate)}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(investment.status)}
                          <Badge variant={
                            investment.status === 'active' ? 'default' :
                            investment.status === 'sold' ? 'secondary' : 'outline'
                          }>
                            {investment.status}
                          </Badge>
                          {investment.targetExitDate && isTargetApproaching(investment.targetExitDate) && (
                            <AlertTriangle className="w-4 h-4 text-orange-500" />
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
                              Edit Investment
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <TrendingUp className="mr-2 h-4 w-4" />
                              Update Value
                            </DropdownMenuItem>
                            {investment.status === 'active' && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as Sold
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

            {filteredInvestments.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No investments found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}