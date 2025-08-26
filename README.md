# GENVORA - SaaS Dashboard for UK Reselling Business

A comprehensive SaaS dashboard application built with Next.js 15 and TypeScript to manage all aspects of a UK reselling business including inventory, orders, expenses, ticket resales, and long-term TCG investments.

## 🚀 Features Implemented

### ✅ Core Modules Completed

1. **Dashboard Layout & Navigation**
   - Professional sidebar navigation with all modules
   - Responsive header with search, notifications, and user menu
   - Mobile-friendly design with collapsible sidebar
   - Quick actions menu for common tasks

2. **Summary Dashboard**
   - KPI cards for key business metrics (orders, revenue, profit, inventory value)
   - Interactive charts for revenue trends and category performance
   - Real-time alerts system (low stock, overdue shipments, pending payouts)
   - Recent orders overview with status indicators

3. **Inventory Tracker**
   - Complete product management with SKU tracking
   - Stock level monitoring with reorder points
   - Bin location tracking for warehouse management
   - Cost vs market value tracking
   - Category and status filtering
   - CSV import/export functionality (UI ready)

4. **Orders Hub**
   - Multi-channel order management (eBay, Amazon, Vinted, Depop)
   - Order status tracking (pending, processing, shipped, delivered)
   - Profit calculation after platform fees and shipping
   - Customer information and order details
   - Tracking number integration

5. **Ticket Hub**
   - Event ticket inventory management
   - ROI tracking for ticket investments
   - Deadline management with approaching alerts
   - Payout status tracking
   - Event and venue information

6. **Investment Hub**
   - TCG (Trading Card Game) investment tracking
   - Physical asset management (watches, collectibles)
   - ROI calculation and performance tracking
   - Target exit price and date management
   - Investment status tracking

7. **Expenses Hub**
   - Business expense tracking with VAT handling
   - Receipt management system
   - Category-based expense organization
   - Approval workflow (pending, approved, paid)
   - VAT calculation and reporting

8. **Shipping & Operations**
   - Shipment creation and tracking
   - Multiple carrier support (Royal Mail, DHL, etc.)
   - Label printing workflow
   - Package weight and dimension tracking
   - Barcode scanning interface (UI ready)
   - Manifest generation

### 🛠 Technology Stack

- **Frontend**: Next.js 15 with App Router
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui with New York style
- **Icons**: Lucide React
- **Database**: SQLite with Prisma ORM
- **State Management**: Zustand
- **Real-time**: Socket.IO
- **Charts**: Recharts (ready for implementation)

### 📊 Database Schema

Comprehensive Prisma schema covering:
- Users and authentication
- Products and inventory management
- Orders and payments across multiple channels
- Event tickets and investments
- Business expenses with VAT
- Shipping and carrier management
- API integration configurations

## 🎯 Key Business Features

### Multi-Channel Integration Ready
- eBay, Amazon, Vinted, Depop order management
- Royal Mail shipping integration
- Xero accounting integration (structure ready)

### Financial Tracking
- Real-time profit calculation
- ROI tracking for investments and tickets
- VAT handling for UK compliance
- Revenue and expense reporting

### Operational Efficiency
- Barcode-driven workflows
- Bulk label printing
- Automated reorder points
- Shipping manifest generation

### Responsive Design
- Mobile-first approach
- Touch-friendly interfaces
- Adaptive layouts for all screen sizes

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- SQLite (included)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd genvora-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Configure your database URL and other environment variables.

4. **Set up the database**
   ```bash
   npm run db:push
   npm run db:generate
   ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Main dashboard
│   ├── inventory/         # Inventory management
│   ├── orders/           # Order management
│   ├── tickets/          # Ticket hub
│   ├── investments/      # Investment tracking
│   ├── expenses/         # Expense management
│   └── shipping/         # Shipping operations
├── components/
│   ├── layout/           # Layout components
│   └── ui/              # shadcn/ui components
├── lib/
│   ├── db.ts            # Database client
│   ├── utils.ts         # Utility functions
│   └── socket.ts        # WebSocket configuration
└── hooks/               # Custom React hooks
```

## 📱 Navigation

The application includes a comprehensive navigation system:

- **Dashboard** - Overview with KPIs and charts
- **Inventory** - Product and stock management
- **Orders** - Multi-channel order tracking
- **Tickets** - Event ticket investments
- **Investments** - TCG and physical assets
- **Expenses** - Business costs with VAT
- **Shipping** - Operations and logistics
- **Analytics** - Business intelligence (ready)
- **Settings** - Configuration (ready)

## 🔧 Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database
```

## 🚀 Deployment

### Production Deployment

1. **Build the application**
   ```bash
   npm run build
   ```

2. **Set up production database**
   - Configure your production database URL in `.env`
   - Run `npm run db:migrate`

3. **Deploy to your preferred platform**
   - **Vercel**: Connect your repository and deploy
   - **Docker**: Use the provided Dockerfile
   - **Traditional**: Deploy to any Node.js hosting

### Environment Variables

```env
# Database
DATABASE_URL="file:./dev.db"

# Next.js
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# API Keys (for integrations)
EBAY_API_KEY="your-ebay-key"
AMAZON_API_KEY="your-amazon-key"
ROYAL_MAIL_API_KEY="your-royal-mail-key"
XERO_API_KEY="your-xero-key"
```

### Docker Deployment

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Future Enhancements

### High Priority
- **API Integrations**: eBay, Amazon, Royal Mail, Xero
- **CSV Import/Export**: Complete implementation for all modules
- **Authentication**: User management and role-based access

### Medium Priority
- **Real-time Updates**: WebSocket integration for live data
- **Advanced Analytics**: Business intelligence and reporting
- **Mobile App**: React Native companion app

### Low Priority
- **Advanced Features**: Barcode scanning, label printing
- **Third-party Integrations**: Additional marketplaces and services
- **Performance Optimization**: Caching and optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Check the documentation
- Review the code comments for implementation details

---

**Built with ❤️ for GENVORA - UK Reselling Business Operations**