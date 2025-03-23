"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IndianEmblem } from "@/components/indian-emblem"
import { RainfallChart } from "@/components/rainfall-chart"
import { CropAnimation } from "@/components/crop-animation"
import { Home, MessageSquare, Droplet, CloudRain, AlertTriangle, Upload, Tractor } from "lucide-react"
import { FarmerSupportBot } from "@/components/farmer-support-bot"
import { WaterVolumeCalculator } from "@/components/water-volume-calculator"

// Suppress hydration errors
const useSupressHydrationWarning = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted
}

export default function Dashboard() {
  const [showUpload, setShowUpload] = useState(false)
  const [farmerData, setFarmerData] = useState({
    name: "Rajesh Kumar",
    farmerId: "KM12345678",
    location: "Punjab, India",
    primaryCrop: "Wheat",
    lastSeasonYield: "4.5 tonnes/hectare",
  })
  const mounted = useSupressHydrationWarning()

  // Mock mandi data
  const mandiData = [
    {
      name: "Azadpur Mandi",
      location: "Delhi",
      date: "15-20 Mar 2025",
      crops: ["Vegetables", "Fruits"],
      distance: "250 km",
    },
    {
      name: "Khanna Mandi",
      location: "Punjab",
      date: "18-25 Mar 2025",
      crops: ["Wheat", "Rice"],
      distance: "5 km",
    },
    {
      name: "Devi Ahilya Bai Holkar Mandi",
      location: "Indore, MP",
      date: "20-27 Mar 2025",
      crops: ["Wheat", "Soybean"],
      distance: "450 km",
    },
  ]

  if (!mounted) {
    return null // Avoid rendering until client-side to prevent hydration errors
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-[#FF9933] py-2">
        <div className="container mx-auto flex justify-between items-center px-4 text-white">
          <p>Government of India | भारत सरकार</p>
          <div className="flex items-center gap-2">
            <span>Welcome, {farmerData.name}</span>
            <Button variant="ghost" size="sm" className="text-white">
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-4 mb-6">
          <IndianEmblem className="h-12 w-12" />
          <div>
            <h1 className="text-2xl font-bold text-[#138808]">KisanMitra Dashboard</h1>
            <p className="text-sm text-[#000080]">"अन्नदाता सुखी भवः" - May the food provider be happy</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader className="bg-[#138808] text-white">
                <CardTitle>Farmer Profile</CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Name</span>
                    <span className="font-medium">{farmerData.name}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Farmer ID</span>
                    <span className="font-medium">{farmerData.farmerId}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Location</span>
                    <span className="font-medium">{farmerData.location}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Primary Crop</span>
                    <span className="font-medium">{farmerData.primaryCrop}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Last Season Yield</span>
                    <span className="font-medium">{farmerData.lastSeasonYield}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2"
                    onClick={() => window.open("#khetpal-chat", "_self")}
                  >
                    <Tractor className="h-4 w-4" />
                    <span>KhetPal Chat</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-3">
            <Tabs defaultValue="dashboard">
              <TabsList className="grid grid-cols-5 mb-4">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="crop-health">Crop Health</TabsTrigger>
                <TabsTrigger value="water">Water Management</TabsTrigger>
                <TabsTrigger value="weather">Weather</TabsTrigger>
                <TabsTrigger value="mandis">Mandis</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card>
                    <CardHeader className="bg-blue-50 pb-2">
                      <CardTitle className="text-lg">Current Crop Status</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex justify-center">
                        <CropAnimation />
                      </div>
                      <div className="mt-4 text-center">
                        <p className="font-medium">{farmerData.primaryCrop} - Growth Stage: Flowering</p>
                        <p className="text-sm text-gray-500">Day 45 of 120</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="bg-blue-50 pb-2">
                      <CardTitle className="text-lg">Weather Forecast</CardTitle>
                    </CardHeader>
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <p className="text-2xl font-bold">32°C</p>
                          <p className="text-sm">Partly Cloudy</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm font-medium">{farmerData.location.split(",")[0]}, India</p>
                          <p className="text-xs text-gray-500">Updated: Today, 10:00 AM</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-5 gap-2 text-center text-xs">
                        {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                          <div key={day} className="p-1">
                            <p>{day}</p>
                            <CloudRain
                              className={`h-6 w-6 mx-auto my-1 ${i === 1 ? "text-blue-500" : "text-gray-400"}`}
                            />
                            <p>{30 + i}°C</p>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 p-2 bg-blue-50 rounded-md flex items-center gap-2">
                        <MessageSquare className="h-5 w-5 text-blue-500" />
                        <p className="text-sm">SMS Alert: High chance of rain tomorrow</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Upcoming Mandis Near You</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {mandiData.map((mandi, index) => (
                        <Card key={index} className="border border-gray-200">
                          <CardHeader className="p-3 pb-0">
                            <CardTitle className="text-base">{mandi.name}</CardTitle>
                            <CardDescription>
                              {mandi.location} ({mandi.distance})
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-3">
                            <p className="text-sm">
                              <span className="font-medium">Date:</span> {mandi.date}
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Crops:</span> {mandi.crops.join(", ")}
                            </p>
                            <Button variant="link" className="p-0 h-auto text-blue-600">
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="crop-health" className="space-y-4">
                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Crop Disease Detection</CardTitle>
                    <CardDescription>Upload a photo of your crop to detect diseases</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    {showUpload ? (
                      <div className="relative w-full aspect-video bg-gray-100 rounded-md overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-full h-full relative">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                              <input type="file" accept="image/*" className="hidden" id="leaf-image-upload" />
                              <label
                                htmlFor="leaf-image-upload"
                                className="bg-[#138808] hover:bg-[#0F6606] text-white px-4 py-2 rounded-md cursor-pointer mb-2"
                              >
                                Select Image
                              </label>
                              <p className="text-sm text-gray-500 text-center">
                                Select a clear image of the affected leaf or plant part
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center p-8 border-2 border-dashed border-gray-300 rounded-md">
                        <Upload className="h-12 w-12 text-gray-400 mb-4" />
                        <p className="text-gray-500 mb-4 text-center">
                          Upload a clear photo of your crop to detect diseases and get recommendations
                        </p>
                        <Button onClick={() => setShowUpload(true)} className="bg-[#138808] hover:bg-[#0F6606]">
                          Upload Image
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Recent Disease Reports</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-md">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Wheat Rust Detected</p>
                          <p className="text-sm text-gray-600">Detected on: 15 Mar 2025</p>
                          <p className="text-sm mt-1">
                            Apply recommended fungicide within 3 days. See detailed report for more information.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-green-50 rounded-md">
                        <div className="h-5 w-5 rounded-full bg-green-500 flex items-center justify-center text-white">
                          ✓
                        </div>
                        <div>
                          <p className="font-medium">Healthy Crop Confirmed</p>
                          <p className="text-sm text-gray-600">Checked on: 10 Mar 2025</p>
                          <p className="text-sm mt-1">
                            Your crop appears healthy. Continue with regular care and monitoring.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="water" className="space-y-4">
                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Water Requirement</CardTitle>
                    <CardDescription>Optimum water requirements for your crop</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-1">
                        <div className="relative h-64 w-full bg-gradient-to-b from-blue-100 to-blue-300 rounded-lg overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-32 h-32">
                              <div className="absolute inset-0 flex items-center justify-center">
                                <Droplet className="h-24 w-24 text-blue-500" />
                              </div>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <p className="text-2xl font-bold text-white">450</p>
                                  <p className="text-xs text-white">mm/season</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-0 right-0 text-center">
                            <p className="text-sm font-medium text-blue-800">Optimum Water Requirement</p>
                            <p className="text-xs text-blue-700">
                              For {farmerData.primaryCrop} in Current Growth Stage
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="flex-1">
                        <h3 className="font-medium mb-2">Current Status</h3>
                        <div className="space-y-3">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Current Soil Moisture</span>
                              <span className="font-medium">65%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "65%" }}></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Weekly Rainfall</span>
                              <span className="font-medium">25mm</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full" style={{ width: "25%" }}></div>
                            </div>
                          </div>

                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Irrigation Needed</span>
                              <span className="font-medium">15mm</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 h-2 rounded-full" style={{ width: "15%" }}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <WaterVolumeCalculator />

                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Effects of Over-Irrigation</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-red-50 rounded-md">
                        <h3 className="font-medium text-red-800 mb-2">Root Damage</h3>
                        <p className="text-sm">
                          Excess water can cause root rot and reduce oxygen availability to roots.
                        </p>
                      </div>

                      <div className="p-3 bg-red-50 rounded-md">
                        <h3 className="font-medium text-red-800 mb-2">Nutrient Leaching</h3>
                        <p className="text-sm">Over-irrigation washes away essential nutrients from the soil.</p>
                      </div>

                      <div className="p-3 bg-red-50 rounded-md">
                        <h3 className="font-medium text-red-800 mb-2">Disease Susceptibility</h3>
                        <p className="text-sm">Excess moisture creates favorable conditions for fungal diseases.</p>
                      </div>
                    </div>

                    <div className="mt-4 p-3 bg-blue-50 rounded-md">
                      <h3 className="font-medium text-blue-800 mb-2">Recommendation</h3>
                      <p className="text-sm">
                        Based on current soil moisture and weather forecast, irrigate with 15mm of water in the next 2
                        days.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="weather" className="space-y-4">
                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Rainfall Prediction</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <RainfallChart />

                    <div className="mt-6 p-3 bg-blue-50 rounded-md">
                      <div className="flex items-start gap-3">
                        <MessageSquare className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium">SMS Notification Preview</p>
                          <div className="mt-2 p-3 bg-white rounded-md border border-gray-200">
                            <p className="text-sm font-medium">KisanMitra Alert:</p>
                            <p className="text-sm">
                              Heavy rainfall (35mm) expected tomorrow in your area. Consider delaying irrigation. Reply
                              HELP for assistance.
                            </p>
                            <p className="text-xs text-gray-500 mt-1">Sent: 15 Mar 2025, 08:00 AM</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Weather Advisory</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3 p-3 bg-amber-50 rounded-md">
                        <AlertTriangle className="h-5 w-5 text-amber-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Heavy Rain Alert</p>
                          <p className="text-sm text-gray-600">16 Mar 2025</p>
                          <p className="text-sm mt-1">
                            Heavy rainfall expected. Consider harvesting mature crops if possible and ensure proper
                            drainage in fields.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-md">
                        <CloudRain className="h-5 w-5 text-blue-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Weekly Forecast</p>
                          <p className="text-sm text-gray-600">15-21 Mar 2025</p>
                          <p className="text-sm mt-1">
                            Moderate rainfall expected throughout the week. Total precipitation: 45-60mm.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="mandis" className="space-y-4">
                <Card>
                  <CardHeader className="bg-blue-50 pb-2">
                    <CardTitle className="text-lg">Upcoming Mandis Across India</CardTitle>
                    <CardDescription>
                      Find mandis and their schedules without needing to be in that state
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Azadpur Mandi",
                          location: "Delhi",
                          date: "15-20 Mar 2025",
                          crops: ["Vegetables", "Fruits"],
                          distance: "250 km",
                          msp: {
                            Tomato: "₹25/kg",
                            Potato: "₹15/kg",
                            Onion: "₹20/kg",
                          },
                        },
                        {
                          name: "Khanna Mandi",
                          location: "Punjab",
                          date: "18-25 Mar 2025",
                          crops: ["Wheat", "Rice"],
                          distance: "5 km",
                          msp: {
                            Wheat: "₹2,015/quintal",
                            Rice: "₹2,060/quintal",
                          },
                        },
                        {
                          name: "Devi Ahilya Bai Holkar Mandi",
                          location: "Indore, MP",
                          date: "20-27 Mar 2025",
                          crops: ["Wheat", "Soybean"],
                          distance: "450 km",
                          msp: {
                            Wheat: "₹2,015/quintal",
                            Soybean: "₹3,950/quintal",
                          },
                        },
                        {
                          name: "Unjha Mandi",
                          location: "Gujarat",
                          date: "22-28 Mar 2025",
                          crops: ["Cumin", "Fennel", "Spices"],
                          distance: "780 km",
                          msp: {
                            Cumin: "₹21,500/quintal",
                            Fennel: "₹12,500/quintal",
                          },
                        },
                        {
                          name: "Guntur Mirchi Yard",
                          location: "Andhra Pradesh",
                          date: "15-30 Mar 2025",
                          crops: ["Chillies", "Turmeric"],
                          distance: "1,200 km",
                          msp: {
                            Chillies: "₹8,500/quintal",
                            Turmeric: "₹7,200/quintal",
                          },
                        },
                        {
                          name: "Vashi APMC",
                          location: "Maharashtra",
                          date: "Ongoing",
                          crops: ["Vegetables", "Fruits", "Grains"],
                          distance: "1,500 km",
                          msp: {
                            Onion: "₹18/kg",
                            Rice: "₹2,060/quintal",
                          },
                        },
                      ].map((mandi, index) => (
                        <Card key={index} className="border border-gray-200">
                          <CardHeader className="p-3 pb-0">
                            <CardTitle className="text-base">{mandi.name}</CardTitle>
                            <CardDescription>
                              {mandi.location} ({mandi.distance})
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="p-3">
                            <p className="text-sm">
                              <span className="font-medium">Date:</span> {mandi.date}
                            </p>
                            <p className="text-sm">
                              <span className="font-medium">Crops:</span> {mandi.crops.join(", ")}
                            </p>
                            <div className="mt-2">
                              <p className="text-sm font-medium">MSP Prices:</p>
                              <ul className="text-xs space-y-1 mt-1">
                                {Object.entries(mandi.msp).map(([crop, price], i) => (
                                  <li key={i}>
                                    {crop}: {price}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <Button variant="link" className="p-0 h-auto text-blue-600 mt-2">
                              View Details
                            </Button>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>

      <footer className="bg-[#138808] py-3 mt-8">
        <div className="container mx-auto text-center text-white">
          <p>© 2025 Ministry of Agriculture & Farmers Welfare, Government of India</p>
          <p className="text-xs mt-1">This is a demo application and not an official government website</p>
        </div>
      </footer>
      <FarmerSupportBot />
    </div>
  )
}

