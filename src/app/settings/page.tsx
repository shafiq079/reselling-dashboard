'use client'

import { MainLayout } from '@/components/layout/main-layout'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Settings, 
  User, 
  Bell, 
  Shield, 
  Database, 
  Palette, 
  Globe,
  CreditCard,
  Package,
  Truck,
  BarChart3,
  Save,
  RefreshCw
} from 'lucide-react'

export default function Settings() {
  return (
    <MainLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Settings
            </h1>
            <p className="text-muted-foreground mt-2">
              Configure your business dashboard preferences and integrations
            </p>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button className="button-modern bg-primary text-primary-foreground hover:bg-primary/90">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>

        {/* Settings Tabs */}
        <Tabs defaultValue="general" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="integrations">Integrations</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Business Information */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="w-5 h-5 mr-2" />
                    Business Information
                  </CardTitle>
                  <CardDescription>Basic details about your business</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="business-name">Business Name</Label>
                      <Input id="business-name" defaultValue="GENVORA" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-email">Business Email</Label>
                      <Input id="business-email" defaultValue="john@genvora.co.uk" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-phone">Business Phone</Label>
                      <Input id="business-phone" defaultValue="+44 123 456 7890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="business-address">Business Address</Label>
                      <Input id="business-address" defaultValue="123 Business St, London, UK" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="currency">Default Currency</Label>
                      <Select defaultValue="GBP">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="GBP">British Pound (£)</SelectItem>
                          <SelectItem value="USD">US Dollar ($)</SelectItem>
                          <SelectItem value="EUR">Euro (€)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Dashboard Preferences */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Palette className="w-5 h-5 mr-2" />
                    Dashboard Preferences
                  </CardTitle>
                  <CardDescription>Customize your dashboard appearance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Dark Mode</Label>
                        <p className="text-sm text-muted-foreground">Enable dark theme</p>
                      </div>
                      <Switch defaultChecked={false} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Compact View</Label>
                        <p className="text-sm text-muted-foreground">Show more data in less space</p>
                      </div>
                      <Switch defaultChecked={false} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="space-y-1">
                        <Label>Real-time Updates</Label>
                        <p className="text-sm text-muted-foreground">Live data refresh</p>
                      </div>
                      <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="items-per-page">Items Per Page</Label>
                      <Select defaultValue="25">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="10">10 items</SelectItem>
                          <SelectItem value="25">25 items</SelectItem>
                          <SelectItem value="50">50 items</SelectItem>
                          <SelectItem value="100">100 items</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date-format">Date Format</Label>
                      <Select defaultValue="DD/MM/YYYY">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                          <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                          <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Financial Settings */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="w-5 h-5 mr-2" />
                    Financial Settings
                  </CardTitle>
                  <CardDescription>Configure financial preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="vat-rate">VAT Rate (%)</Label>
                    <Input id="vat-rate" type="number" defaultValue="20" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Include VAT in Prices</Label>
                      <p className="text-sm text-muted-foreground">Show prices with VAT included</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="space-y-1">
                      <Label>Auto-calculate Fees</Label>
                      <p className="text-sm text-muted-foreground">Calculate platform fees automatically</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="profit-formula">Profit Calculation</Label>
                    <Select defaultValue="revenue-fees-cost">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="revenue-fees-cost">Revenue - Fees - Cost</SelectItem>
                        <SelectItem value="revenue-cost">Revenue - Cost Only</SelectItem>
                        <SelectItem value="revenue-fees">Revenue - Fees Only</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* Shipping Settings */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Shipping Settings
                  </CardTitle>
                  <CardDescription>Configure shipping preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="default-carrier">Default Carrier</Label>
                    <Select defaultValue="royal-mail">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="royal-mail">Royal Mail</SelectItem>
                        <SelectItem value="dhl">DHL</SelectItem>
                        <SelectItem value="fedex">FedEx</SelectItem>
                        <SelectItem value="ups">UPS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-select Shipping</Label>
                      <p className="text-sm text-muted-foreground">Automatically choose best shipping</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Tracking Updates</Label>
                      <p className="text-sm text-muted-foreground">Auto-update tracking status</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div>
                    <Label htmlFor="package-defaults">Package Defaults</Label>
                    <Select defaultValue="small-parcel">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="letter">Letter</SelectItem>
                        <SelectItem value="large-letter">Large Letter</SelectItem>
                        <SelectItem value="small-parcel">Small Parcel</SelectItem>
                        <SelectItem value="medium-parcel">Medium Parcel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Profile Overview */}
              <div className="lg:col-span-1">
                <Card className="card-modern">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <User className="w-5 h-5 mr-2" />
                      Profile Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                        JD
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold text-lg">John Doe</h3>
                        <p className="text-muted-foreground">john@genvora.co.uk</p>
                        <Badge variant="secondary" className="mt-2">Administrator</Badge>
                      </div>
                    </div>
                    <div className="space-y-3 pt-4 border-t">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Member Since</span>
                        <span>Jan 2023</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Last Login</span>
                        <span>2 hours ago</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Account Status</span>
                        <Badge variant="default" className="text-xs">Active</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Details */}
              <div className="lg:col-span-2">
                <Card className="card-modern">
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Update your personal information and preferences</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Personal Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first-name">First Name</Label>
                          <Input id="first-name" defaultValue="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last-name">Last Name</Label>
                          <Input id="last-name" defaultValue="Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input id="email" type="email" defaultValue="john@genvora.co.uk" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input id="phone" defaultValue="+44 123 456 7890" />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Address Information</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2 md:col-span-2">
                          <Label htmlFor="address">Street Address</Label>
                          <Input id="address" defaultValue="123 Business Street" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="city">City</Label>
                          <Input id="city" defaultValue="London" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="postal-code">Postal Code</Label>
                          <Input id="postal-code" defaultValue="EC1A 1BB" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <Select defaultValue="GB">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="GB">United Kingdom</SelectItem>
                              <SelectItem value="US">United States</SelectItem>
                              <SelectItem value="CA">Canada</SelectItem>
                              <SelectItem value="AU">Australia</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Preferences */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Preferences</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="timezone">Timezone</Label>
                          <Select defaultValue="Europe/London">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Europe/London">GMT (London)</SelectItem>
                              <SelectItem value="America/New_York">EST (New York)</SelectItem>
                              <SelectItem value="America/Los_Angeles">PST (Los Angeles)</SelectItem>
                              <SelectItem value="Asia/Tokyo">JST (Tokyo)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="language">Language</Label>
                          <Select defaultValue="en">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="en">English</SelectItem>
                              <SelectItem value="es">Spanish</SelectItem>
                              <SelectItem value="fr">French</SelectItem>
                              <SelectItem value="de">German</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Search Preferences */}
                    <div className="space-y-4">
                      <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider">Search Preferences</h4>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Enable Search Suggestions</Label>
                            <p className="text-sm text-muted-foreground">Show suggestions while typing</p>
                          </div>
                          <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                        </div>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <Label>Search History</Label>
                            <p className="text-sm text-muted-foreground">Save search queries for quick access</p>
                          </div>
                          <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="search-results">Default Search Results</Label>
                          <Select defaultValue="25">
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10">10 results</SelectItem>
                              <SelectItem value="25">25 results</SelectItem>
                              <SelectItem value="50">50 results</SelectItem>
                              <SelectItem value="100">100 results</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end space-x-3 pt-4 border-t">
                      <Button variant="outline">Cancel</Button>
                      <Button>Update Profile</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="integrations" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Marketplace Integrations */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Globe className="w-5 h-5 mr-2" />
                    Marketplace Integrations
                  </CardTitle>
                  <CardDescription>Connect to your sales channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <span className="text-blue-600 font-semibold text-sm">eB</span>
                        </div>
                        <div>
                          <h4 className="font-medium">eBay</h4>
                          <p className="text-sm text-muted-foreground">Orders, listings, payouts</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Connected</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Sync:</span>
                        <span>2 hours ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-green-600">Active</span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Sync Now
                      </Button>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <span className="text-orange-600 font-semibold text-sm">Am</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Amazon</h4>
                          <p className="text-sm text-muted-foreground">Orders, fees, inventory</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Connected</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Sync:</span>
                        <span>1 hour ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-green-600">Active</span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Sync Now
                      </Button>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center">
                          <span className="text-pink-600 font-semibold text-sm">Vi</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Vinted</h4>
                          <p className="text-sm text-muted-foreground">CSV import only</p>
                        </div>
                      </div>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Connect Vinted
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Service Integrations */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Truck className="w-5 h-5 mr-2" />
                    Service Integrations
                  </CardTitle>
                  <CardDescription>Shipping and accounting services</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                          <span className="text-red-600 font-semibold text-sm">RM</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Royal Mail</h4>
                          <p className="text-sm text-muted-foreground">Tracking, labels, manifests</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Connected</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Sync:</span>
                        <span>30 minutes ago</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Status:</span>
                        <span className="text-green-600">Active</span>
                      </div>
                    </div>
                    <div className="mt-3 flex space-x-2">
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Sync Now
                      </Button>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                          <span className="text-green-600 font-semibold text-sm">Xe</span>
                        </div>
                        <div>
                          <h4 className="font-medium">Xero</h4>
                          <p className="text-sm text-muted-foreground">Accounting, expenses</p>
                        </div>
                      </div>
                      <Badge variant="outline">Not Connected</Badge>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Connect Xero
                    </Button>
                  </div>

                  <div className="p-4 rounded-lg border border-border/50">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Database className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <h4 className="font-medium">Database</h4>
                          <p className="text-sm text-muted-foreground">SQLite - Local</p>
                        </div>
                      </div>
                      <Badge variant="secondary">Active</Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Size:</span>
                        <span>2.4 MB</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Last Backup:</span>
                        <span>1 hour ago</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Backup Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Email Notifications */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="w-5 h-5 mr-2" />
                    Email Notifications
                  </CardTitle>
                  <CardDescription>Configure email alert preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>New Orders</Label>
                      <p className="text-sm text-muted-foreground">Get notified of new orders</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Low Stock Alerts</Label>
                      <p className="text-sm text-muted-foreground">When inventory runs low</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Shipping Delays</Label>
                      <p className="text-sm text-muted-foreground">When shipments are delayed</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Pending Payouts</Label>
                      <p className="text-sm text-muted-foreground">When payouts are pending</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Weekly Reports</Label>
                      <p className="text-sm text-muted-foreground">Weekly business summary</p>
                    </div>
                    <Switch defaultChecked={false} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div>
                    <Label htmlFor="email-frequency">Email Frequency</Label>
                    <Select defaultValue="immediate">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Immediate</SelectItem>
                        <SelectItem value="hourly">Hourly Digest</SelectItem>
                        <SelectItem value="daily">Daily Digest</SelectItem>
                        <SelectItem value="weekly">Weekly Digest</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              {/* In-App Notifications */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2" />
                    In-App Notifications
                  </CardTitle>
                  <CardDescription>Dashboard notification preferences</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Revenue Milestones</Label>
                      <p className="text-sm text-muted-foreground">When revenue targets are hit</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Profit Alerts</Label>
                      <p className="text-sm text-muted-foreground">Significant profit changes</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Best Selling Products</Label>
                      <p className="text-sm text-muted-foreground">New top performers</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>System Updates</Label>
                      <p className="text-sm text-muted-foreground">Platform updates and news</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Integration Status</Label>
                      <p className="text-sm text-muted-foreground">When integrations fail</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div>
                    <Label htmlFor="notification-sound">Notification Sound</Label>
                    <Select defaultValue="chime">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="chime">Chime</SelectItem>
                        <SelectItem value="bell">Bell</SelectItem>
                        <SelectItem value="alert">Alert</SelectItem>
                        <SelectItem value="silent">Silent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Account Security */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Account Security
                  </CardTitle>
                  <CardDescription>Protect your account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="current-password">Current Password</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="new-password">New Password</Label>
                    <Input id="new-password" type="password" />
                  </div>
                  <div>
                    <Label htmlFor="confirm-password">Confirm Password</Label>
                    <Input id="confirm-password" type="password" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">Add extra security layer</p>
                    </div>
                    <Switch defaultChecked={false} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Login Notifications</Label>
                      <p className="text-sm text-muted-foreground">Alert on new logins</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <Button className="w-full">
                    Update Password
                  </Button>
                </CardContent>
              </Card>

              {/* Data & Privacy */}
              <Card className="card-modern">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="w-5 h-5 mr-2" />
                    Data & Privacy
                  </CardTitle>
                  <CardDescription>Manage your data and privacy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Data Collection</Label>
                      <p className="text-sm text-muted-foreground">Help improve the product</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Analytics Tracking</Label>
                      <p className="text-sm text-muted-foreground">Usage analytics and insights</p>
                    </div>
                    <Switch defaultChecked={true} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Marketing Communications</Label>
                      <p className="text-sm text-muted-foreground">Product updates and news</p>
                    </div>
                    <Switch defaultChecked={false} className="data-[state=checked]:bg-primary data-[state=unchecked]:bg-input" />
                  </div>
                  <div className="space-y-2">
                    <Label>Data Export</Label>
                    <p className="text-sm text-muted-foreground">Download all your data</p>
                    <Button variant="outline" size="sm" className="w-full">
                      Export Data
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label>Data Retention</Label>
                    <p className="text-sm text-muted-foreground">Keep data for specified period</p>
                    <Select defaultValue="2years">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1year">1 Year</SelectItem>
                        <SelectItem value="2years">2 Years</SelectItem>
                        <SelectItem value="5years">5 Years</SelectItem>
                        <SelectItem value="forever">Forever</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  )
}