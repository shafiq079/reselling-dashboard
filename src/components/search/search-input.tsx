'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X, Clock, TrendingUp } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SearchSuggestion {
  id: string
  text: string
  type: 'order' | 'product' | 'customer' | 'category'
  category?: string
  count?: number
}

interface SearchInputProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
}

export function SearchInput({ 
  placeholder = "Search orders, products, customers...", 
  onSearch,
  className = "" 
}: SearchInputProps) {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([])
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [showSuggestions, setShowSuggestions] = useState(true)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  // Mock suggestions data
  const mockSuggestions: SearchSuggestion[] = [
    { id: '1', text: 'iPhone 13 Pro', type: 'product', category: 'Electronics', count: 12 },
    { id: '2', text: 'ORD-001234', type: 'order', category: 'eBay', count: 1 },
    { id: '3', text: 'John Smith', type: 'customer', category: 'VIP', count: 8 },
    { id: '4', text: 'Charizard Holographic', type: 'product', category: 'TCG Cards', count: 3 },
    { id: '5', text: 'Nike Air Max', type: 'product', category: 'Clothing', count: 18 },
    { id: '6', text: 'ORD-001235', type: 'order', category: 'Amazon', count: 1 },
    { id: '7', text: 'Emma Wilson', type: 'customer', category: 'Regular', count: 5 },
    { id: '8', text: 'Electronics', type: 'category', count: 156 }
  ]

  // Load search history from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('searchHistory')
    if (saved) {
      setSearchHistory(JSON.parse(saved))
    }
  }, [])

  // Save search history to localStorage
  const saveToHistory = (searchTerm: string) => {
    const updated = [searchTerm, ...searchHistory.filter(h => h !== searchTerm)].slice(0, 10)
    setSearchHistory(updated)
    localStorage.setItem('searchHistory', JSON.stringify(updated))
  }

  // Filter suggestions based on query
  useEffect(() => {
    if (query.length > 0) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 6)
      setSuggestions(filtered)
      setIsOpen(true)
    } else {
      setSuggestions([])
      setIsOpen(false)
    }
  }, [query])

  // Handle clicks outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (searchTerm: string = query) => {
    if (searchTerm.trim()) {
      saveToHistory(searchTerm.trim())
      onSearch?.(searchTerm.trim())
      setQuery('')
      setIsOpen(false)
    }
  }

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text)
    handleSearch(suggestion.text)
  }

  const handleHistoryClick = (historyItem: string) => {
    setQuery(historyItem)
    handleSearch(historyItem)
  }

  const clearHistory = () => {
    setSearchHistory([])
    localStorage.removeItem('searchHistory')
  }

  const clearQuery = () => {
    setQuery('')
    setIsOpen(false)
    inputRef.current?.focus()
  }

  const getTypeIcon = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'order': return '📦'
      case 'product': return '🛍️'
      case 'customer': return '👤'
      case 'category': return '📂'
      default: return '🔍'
    }
  }

  const getTypeColor = (type: SearchSuggestion['type']) => {
    switch (type) {
      case 'order': return 'bg-blue-100 text-blue-700'
      case 'product': return 'bg-green-100 text-green-700'
      case 'customer': return 'bg-purple-100 text-purple-700'
      case 'category': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => query.length === 0 && setIsOpen(true)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              e.preventDefault()
              handleSearch()
            }
            if (e.key === 'Escape') {
              setIsOpen(false)
            }
          }}
          className="pl-10 pr-10 bg-card border-border"
        />
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearQuery}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>

      {isOpen && showSuggestions && (
        <Card className="absolute top-full mt-1 w-full z-50 shadow-lg border-border/50 bg-card">
          <CardContent className="p-0">
            {/* Search History */}
            {query.length === 0 && searchHistory.length > 0 && (
              <div className="p-3 border-b">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Recent Searches</span>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearHistory}
                    className="h-6 text-xs"
                  >
                    Clear
                  </Button>
                </div>
                <div className="space-y-1">
                  {searchHistory.slice(0, 5).map((item, index) => (
                    <button
                      key={index}
                      onClick={() => handleHistoryClick(item)}
                      className="w-full text-left px-2 py-1.5 text-sm hover:bg-muted rounded transition-colors flex items-center space-x-2"
                    >
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <span>{item}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Suggestions */}
            {query.length > 0 && (
              <div className="p-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-2">
                  <TrendingUp className="w-4 h-4" />
                  <span>Suggestions</span>
                </div>
                <div className="space-y-1">
                  {suggestions.length > 0 ? (
                    suggestions.map((suggestion) => (
                      <button
                        key={suggestion.id}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="w-full text-left px-3 py-2 hover:bg-muted rounded transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <span className="text-lg">{getTypeIcon(suggestion.type)}</span>
                            <div>
                              <div className="font-medium text-sm">{suggestion.text}</div>
                              {suggestion.category && (
                                <div className="text-xs text-muted-foreground">{suggestion.category}</div>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Badge variant="outline" className={`text-xs ${getTypeColor(suggestion.type)}`}>
                              {suggestion.type}
                            </Badge>
                            {suggestion.count && (
                              <span className="text-xs text-muted-foreground">{suggestion.count}</span>
                            )}
                          </div>
                        </div>
                      </button>
                    ))
                  ) : (
                    <div className="text-center py-4 text-sm text-muted-foreground">
                      No suggestions found for "{query}"
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Quick Actions */}
            <div className="p-3 border-t bg-muted/20">
              <div className="text-xs text-muted-foreground mb-2">Quick Actions</div>
              <div className="grid grid-cols-2 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSearch('ORD-')}
                  className="text-xs justify-start"
                >
                  📦 Search Orders
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleSearch('')}
                  className="text-xs justify-start"
                >
                  👤 Search Customers
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}