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
  Receipt,
  Calendar,
  DollarSign,
  Percent,
  FileText,
  CheckCircle,
  Clock,
  AlertTriangle,
  Image
} from 'lucide-react'

export default function ExpensesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedStatus, setSelectedStatus] = useState('all')

  // Mock data
  const expenses = [
    {
      id: 'EXP-001',
      description: 'Royal Mail Shipping Supplies',
      amount: 125.00,
      category: 'Shipping',
      vatRate: 0.20,
      vatAmount: 25.00,
      totalAmount: 150.00,
      date: '2024-01-15T00:00:00Z',
      receiptUrl: '/receipts/exp-001.pdf',
      status: 'approved'
    },
    {
      id: 'EXP-002',
      description: 'Office Rent - January',
      amount: 800.00,
      category: 'Office',
      vatRate: 0.20,
      vatAmount: 160.00,
      totalAmount: 960.00,
      date: '2024-01-01T00:00:00Z',
      receiptUrl: '/receipts/exp-002.pdf',
      status: 'paid'
    },
    {
      id: 'EXP-003',
      description: 'Marketing - Facebook Ads',
      amount: 200.00,
      category: 'Marketing',
      vatRate: 0.20,
      vatAmount: 40.00,
      totalAmount: 240.00,
      date: '2024-01-10T00:00:00Z',
      receiptUrl: '/receipts/exp-003.pdf',
      status: 'pending'
    },
    {
      id: 'EXP-004',
      description: 'Inventory Purchase - iPhone Cases',
      amount: 1500.00,
      category: 'Inventory',
      vatRate: 0.20,
      vatAmount: 300.00,
      totalAmount: 1800.00,
      date: '2024-01-12T00:00:00Z',
      receiptUrl: '/receipts/exp-004.pdf',
      status: 'approved'
    }
  ]

  const categories = ['all', 'Office', 'Shipping', 'Marketing', 'Inventory', 'Travel', 'Utilities', 'Other']
  const statuses = ['all', 'pending', 'approved', 'paid']

  const filteredExpenses = expenses.filter(expense => {
    const matchesSearch = expense.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || expense.category === selectedCategory
    const matchesStatus = selectedStatus === 'all' || expense.status === selectedStatus
    
    return matchesSearch && matchesCategory && matchesStatus
  })

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.totalAmount, 0)
  const totalVAT = expenses.reduce((sum, expense) => sum + expense.vatAmount, 0)
  const pendingExpenses = expenses.filter(e => e.status === 'pending').reduce((sum, e) => sum + e.totalAmount, 0)
  const thisMonthExpenses = expenses.filter(e => {
    const expenseDate = new Date(e.date)
    const now = new Date()
    return expenseDate.getMonth() === now.getMonth() && expenseDate.getFullYear() === now.getFullYear()
  }).reduce((sum, e) => sum + e.totalAmount, 0)

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-blue-500" />
      case 'paid':
        return <CheckCircle className="w-4 h-4 text-green-500" />
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

  return (
    <MainLayout>
      <div className="space-y-4 sm:space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Expenses</h1>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mt-1 sm:mt-2">
              Track business expenses with VAT handling and receipt management
            </p>
          </div>
          <div className="mt-3 sm:mt-0 flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Button variant="outline" size="sm" className="w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Export CSV
            </Button>
            <Button className="w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              Add Expense
            </Button>
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">£{totalExpenses.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                All time
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total VAT</CardTitle>
              <Percent className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-purple-600">£{totalVAT.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Reclaimable
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold">£{thisMonthExpenses.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Current month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-orange-500" />
            </CardHeader>
            <CardContent>
              <div className="text-xl sm:text-2xl font-bold text-orange-600">£{pendingExpenses.toLocaleString()}</div>
              <p className="text-xs text-muted-foreground">
                Awaiting approval
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card>
          <CardHeader>
            <CardTitle>Expense Management</CardTitle>
            <CardDescription>Track and manage business expenses with VAT calculations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search expenses by description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-full sm:w-[180px] bg-background border-border">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent className="bg-background border-border shadow-lg backdrop-blur-lg">
                  {categories.map((category) => (
                    <SelectItem key={category} value={category} className="hover:bg-accent">
                      {category === 'all' ? 'All Categories' : category}
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

            {/* Expenses Table - Mobile Card View */}
            <div className="block sm:hidden space-y-3">
              {filteredExpenses.map((expense) => (
                <Card key={expense.id} className="p-4">
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-sm truncate">{expense.description}</h3>
                      <p className="text-xs text-gray-500">{expense.id}</p>
                      <div className="flex items-center text-xs text-gray-500 mt-1">
                        <Calendar className="w-3 h-3 mr-1" />
                        {formatDate(expense.date)}
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      {getStatusIcon(expense.status)}
                      <Badge variant={
                        expense.status === 'paid' ? 'default' :
                        expense.status === 'approved' ? 'secondary' : 'outline'
                      }>
                        {expense.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-gray-500">Category:</span>
                      <p><Badge variant="outline" className="text-xs">{expense.category}</Badge></p>
                    </div>
                    <div>
                      <span className="text-gray-500">Net Amount:</span>
                      <p className="font-medium">£{expense.amount.toFixed(2)}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">VAT:</span>
                      <p className="font-medium">£{expense.vatAmount.toFixed(2)}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Total:</span>
                      <p className="font-medium">£{expense.totalAmount.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-3">
                    <div>
                      {expense.receiptUrl ? (
                        <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                          <FileText className="h-3 w-3" />
                        </Button>
                      ) : (
                        <span className="text-gray-400 text-xs">No receipt</span>
                      )}
                    </div>
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
                          Edit Expense
                        </DropdownMenuItem>
                        {expense.receiptUrl && (
                          <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            View Receipt
                          </DropdownMenuItem>
                        )}
                        {expense.status === 'pending' && (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Approve
                          </DropdownMenuItem>
                        )}
                        {expense.status === 'approved' && (
                          <DropdownMenuItem>
                            <CheckCircle className="mr-2 h-4 w-4" />
                            Mark as Paid
                          </DropdownMenuItem>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </Card>
              ))}
            </div>

            {/* Expenses Table - Desktop View */}
            <div className="hidden sm:block rounded-md border overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>VAT</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Receipt</TableHead>
                    <TableHead className="w-[100px]">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredExpenses.map((expense) => (
                    <TableRow key={expense.id}>
                      <TableCell>
                        <div>
                          <div className="font-medium">{expense.description}</div>
                          <div className="text-sm text-gray-500">{expense.id}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center text-sm">
                          <Calendar className="w-3 h-3 mr-1 text-gray-400" />
                          {formatDate(expense.date)}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{expense.category}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <span className="text-gray-500">Net: </span>
                          <span className="font-medium">£{expense.amount.toFixed(2)}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <span className="text-gray-500">{(expense.vatRate * 100).toFixed(0)}%: </span>
                          <span className="font-medium">£{expense.vatAmount.toFixed(2)}</span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">£{expense.totalAmount.toFixed(2)}</TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(expense.status)}
                          <Badge variant={
                            expense.status === 'paid' ? 'default' :
                            expense.status === 'approved' ? 'secondary' : 'outline'
                          }>
                            {expense.status}
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell>
                        {expense.receiptUrl ? (
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <FileText className="h-4 w-4" />
                          </Button>
                        ) : (
                          <span className="text-gray-400 text-sm">None</span>
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
                              Edit Expense
                            </DropdownMenuItem>
                            {expense.receiptUrl && (
                              <DropdownMenuItem>
                                <FileText className="mr-2 h-4 w-4" />
                                View Receipt
                              </DropdownMenuItem>
                            )}
                            {expense.status === 'pending' && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Approve
                              </DropdownMenuItem>
                            )}
                            {expense.status === 'approved' && (
                              <DropdownMenuItem>
                                <CheckCircle className="mr-2 h-4 w-4" />
                                Mark as Paid
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

            {filteredExpenses.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                No expenses found matching your search criteria.
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}