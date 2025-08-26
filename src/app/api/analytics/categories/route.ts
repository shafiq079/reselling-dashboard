import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get('period') || '6months'

  // Generate mock category data based on period
  const categories = [
    { name: 'Electronics', color: '#3b82f6' },
    { name: 'Clothing', color: '#10b981' },
    { name: 'Home & Garden', color: '#f59e0b' },
    { name: 'Sports', color: '#ef4444' },
    { name: 'Books', color: '#8b5cf6' },
    { name: 'Toys', color: '#ec4899' },
    { name: 'Beauty', color: '#14b8a6' },
    { name: 'Automotive', color: '#f97316' }
  ]

  const data = categories.map(category => ({
    name: category.name,
    value: Math.floor(Math.random() * 5000) + 1000,
    color: category.color
  }))

  return NextResponse.json({
    success: true,
    data: data
  })
}