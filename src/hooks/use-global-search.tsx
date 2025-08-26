'use client'

import { useState, useEffect, useCallback } from 'react'
import { GlobalSearch } from '@/components/search/global-search'

export function useGlobalSearch() {
  const [isOpen, setIsOpen] = useState(false)

  const openSearch = useCallback(() => {
    setIsOpen(true)
  }, [])

  const closeSearch = useCallback(() => {
    setIsOpen(false)
  }, [])

  const toggleSearch = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  // Keyboard shortcut (Cmd/Ctrl + K)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault()
        toggleSearch()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [toggleSearch])

  const GlobalSearchComponent = () => (
    <GlobalSearch isOpen={isOpen} onClose={closeSearch} />
  )

  return {
    openSearch,
    closeSearch,
    toggleSearch,
    GlobalSearchComponent
  }
}