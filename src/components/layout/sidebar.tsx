'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  LayoutDashboard, 
  Package, 
  ShoppingCart, 
  Ticket, 
  TrendingUp, 
  Receipt, 
  Truck, 
  Settings,
  Menu,
  X,
  BarChart3,
  Boxes,
  CreditCard,
  Ship,
  Calculator
} from 'lucide-react'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Inventory', href: '/inventory', icon: Package },
  { name: 'Orders', href: '/orders', icon: ShoppingCart },
  { name: 'Tickets', href: '/tickets', icon: Ticket },
  { name: 'Investments', href: '/investments', icon: TrendingUp },
  { name: 'Expenses', href: '/expenses', icon: Receipt },
  { name: 'Shipping', href: '/shipping', icon: Truck },
  { name: 'Analytics', href: '/analytics', icon: BarChart3 },
  { name: 'Settings', href: '/settings', icon: Settings },
]

const quickActions = [
  { name: 'Add Product', href: '/inventory/new', icon: Boxes },
  { name: 'New Order', href: '/orders/new', icon: ShoppingCart },
  { name: 'Add Expense', href: '/expenses/new', icon: CreditCard },
  { name: 'Create Shipment', href: '/shipping/new', icon: Ship },
]

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname()

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 w-64 sm:w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-xl transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:w-64 lg:flex-shrink-0 lg:shadow-none lg:border-0 lg:z-auto lg:bg-transparent lg:dark:bg-transparent",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Calculator className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">GENVORA</span>
                <p className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">Business Hub</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="lg:hidden hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-3 sm:px-4 py-4 sm:py-6 space-y-2 overflow-y-auto">
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "flex items-center px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium rounded-xl transition-all duration-300 group text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md",
                      isActive && "bg-purple-100 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 shadow-lg border border-purple-200/50 dark:border-purple-800/50"
                    )}
                    onClick={() => onClose()}
                  >
                    <item.icon className={cn(
                      "w-4 h-4 sm:w-5 sm:h-5 mr-3 transition-all duration-300",
                      isActive 
                        ? "text-purple-600 dark:text-purple-400 scale-110" 
                        : "text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400"
                    )} />
                    <span className={cn(
                      "transition-all duration-300",
                      isActive ? "font-semibold" : "group-hover:font-medium"
                    )}>
                      {item.name}
                    </span>
                    {item.name === 'Orders' && (
                      <Badge variant="secondary" className="ml-auto bg-purple-500 text-white border-0 shadow-sm text-xs">
                        12
                      </Badge>
                    )}
                  </Link>
                )
              })}
            </div>

            <div className="pt-4 sm:pt-6 mt-4 sm:mt-6 border-t border-gray-200 dark:border-gray-800">
              <h3 className="px-3 sm:px-4 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2 sm:mb-3">
                Quick Actions
              </h3>
              <div className="space-y-1">
                {quickActions.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center px-3 sm:px-4 py-2 sm:py-3 text-sm font-medium text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md transition-all duration-300 group"
                    onClick={() => onClose()}
                  >
                    <item.icon className="w-4 h-4 mr-3 text-gray-500 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-all duration-300" />
                    <span className="group-hover:font-medium transition-all duration-300">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="p-3 sm:p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="text-center">
              <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">© 2024 GENVORA</div>
              <div className="text-xs text-gray-400 dark:text-gray-500 hidden sm:block">Premium Business Dashboard</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}