import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const period = searchParams.get('period') || '6months'

  // Generate mock data based on period
  const generateRevenueData = (period: string) => {
    const data = []
    let months = 6
    let format = 'MMM'

    switch (period) {
      case 'month':
        months = 1
        format = 'dd'
        for (let i = 0; i < 30; i++) {
          data.push({
            date: new Date(Date.now() - (29 - i) * 24 * 60 * 60 * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short' }),
            revenue: Math.floor(Math.random() * 1000) + 200,
            profit: Math.floor(Math.random() * 300) + 50
          })
        }
        break
      case '3months':
        months = 3
        for (let i = 0; i < months; i++) {
          const date = new Date(Date.now() - (months - 1 - i) * 30 * 24 * 60 * 60 * 1000)
          data.push({
            date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            revenue: Math.floor(Math.random() * 5000) + 3000,
            profit: Math.floor(Math.random() * 1500) + 800
          })
        }
        break
      case '6months':
        months = 6
        for (let i = 0; i < months; i++) {
          const date = new Date(Date.now() - (months - 1 - i) * 30 * 24 * 60 * 60 * 1000)
          data.push({
            date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            revenue: Math.floor(Math.random() * 8000) + 5000,
            profit: Math.floor(Math.random() * 2500) + 1200
          })
        }
        break
      case 'year':
        months = 12
        for (let i = 0; i < months; i++) {
          const date = new Date(Date.now() - (months - 1 - i) * 30 * 24 * 60 * 60 * 1000)
          data.push({
            date: date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
            revenue: Math.floor(Math.random() * 12000) + 8000,
            profit: Math.floor(Math.random() * 4000) + 2000
          })
        }
        break
    }

    return data
  }

  const data = generateRevenueData(period)

  return NextResponse.json({
    success: true,
    data: data
  })
}