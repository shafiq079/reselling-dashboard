'use client'

import { useState } from 'react'
import { Search, Command } from 'lucide-react'
import { SearchInput } from './search-input'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

interface GlobalSearchProps {
  isOpen: boolean
  onClose: () => void
}

export function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
  const [query, setQuery] = useState('')

  const handleSearch = (searchTerm: string) => {
    console.log('Searching for:', searchTerm)
    // Implement global search logic here
    onClose()
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl p-0" onKeyDown={handleKeyDown}>
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg">Global Search</DialogTitle>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Command className="w-4 h-4" />
              <span>Press ESC to close</span>
            </div>
          </div>
        </DialogHeader>
        
        <div className="p-6 pt-0">
          <SearchInput
            placeholder="Search anything across your business..."
            onSearch={handleSearch}
            className="mb-4"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg border border-border/50 bg-card">
              <h3 className="font-medium mb-2 flex items-center">
                📦 Orders
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Search orders by ID, customer, or status
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSearch('ORD-')}
                className="w-full justify-start"
              >
                <Search className="w-4 h-4 mr-2" />
                Browse Orders
              </Button>
            </div>
            
            <div className="p-4 rounded-lg border border-border/50 bg-card">
              <h3 className="font-medium mb-2 flex items-center">
                🛍️ Products
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Find products by name, SKU, or category
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSearch('')}
                className="w-full justify-start"
              >
                <Search className="w-4 h-4 mr-2" />
                Browse Products
              </Button>
            </div>
            
            <div className="p-4 rounded-lg border border-border/50 bg-card">
              <h3 className="font-medium mb-2 flex items-center">
                👤 Customers
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Search customers by name or email
              </p>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={() => handleSearch('')}
                className="w-full justify-start"
              >
                <Search className="w-4 h-4 mr-2" />
                Browse Customers
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}