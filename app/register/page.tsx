"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { IndianEmblem } from "@/components/indian-emblem"

export default function Register() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    password: "",
    country: "India",
    state: "",
    district: "",
    village: "",
    cropType: "",
    season: "",
    lastYieldAmount: "",
    year: new Date().getFullYear().toString(),
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (step < 3) {
      setStep(step + 1)
    } else {
      // In a real app, this would call an API to register the user
      console.log("Form submitted:", formData)
      // Redirect to login
      window.location.href = "/"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      <header className="bg-[#FF9933] py-2">
        <div className="container mx-auto text-center text-white text-sm">
          <p>Government of India | भारत सरकार</p>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div className="flex items-center gap-4">
            <IndianEmblem className="h-16 w-16" />
            <h1 className="text-3xl font-bold text-[#138808]">KisanMitra</h1>
          </div>

          <p className="text-xl font-semibold text-[#000080] max-w-2xl">
            "अन्नदाता सुखी भवः" - May the food provider be happy
          </p>

          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>Farmer Registration</CardTitle>
              <CardDescription>
                {step === 1 && "Step 1: Personal Information"}
                {step === 2 && "Step 2: Location Details"}
                {step === 3 && "Step 3: Farming Information"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name / पूरा नाम</Label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number / फोन नंबर</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="password">Password / पासवर्ड</Label>
                      <Input
                        id="password"
                        name="password"
                        type="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="country">Country / देश</Label>
                      <Select value={formData.country} onValueChange={(value) => handleSelectChange("country", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="India">India</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state">State / राज्य</Label>
                      <Select value={formData.state} onValueChange={(value) => handleSelectChange("state", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Punjab">Punjab</SelectItem>
                          <SelectItem value="Haryana">Haryana</SelectItem>
                          <SelectItem value="Uttar Pradesh">Uttar Pradesh</SelectItem>
                          <SelectItem value="Madhya Pradesh">Madhya Pradesh</SelectItem>
                          <SelectItem value="Gujarat">Gujarat</SelectItem>
                          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District / जिला</Label>
                      <Input id="district" name="district" value={formData.district} onChange={handleChange} required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="village">Village / गांव</Label>
                      <Input id="village" name="village" value={formData.village} onChange={handleChange} required />
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="cropType">Primary Crop / मुख्य फसल</Label>
                      <Select
                        value={formData.cropType}
                        onValueChange={(value) => handleSelectChange("cropType", value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select crop" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Wheat">Wheat / गेहूं</SelectItem>
                          <SelectItem value="Rice">Rice / चावल</SelectItem>
                          <SelectItem value="Maize">Maize / मक्का</SelectItem>
                          <SelectItem value="Cotton">Cotton / कपास</SelectItem>
                          <SelectItem value="Sugarcane">Sugarcane / गन्ना</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="season">Growing Season / उगाने का मौसम</Label>
                      <Select value={formData.season} onValueChange={(value) => handleSelectChange("season", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select season" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Kharif">Kharif (Monsoon) / खरीफ</SelectItem>
                          <SelectItem value="Rabi">Rabi (Winter) / रबी</SelectItem>
                          <SelectItem value="Zaid">Zaid (Summer) / ज़ायद</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastYieldAmount">Last Season Yield (Quintals/Hectare) / पिछली फसल उपज</Label>
                      <Input
                        id="lastYieldAmount"
                        name="lastYieldAmount"
                        type="number"
                        value={formData.lastYieldAmount}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="year">Year / वर्ष</Label>
                      <Input id="year" name="year" value={formData.year} onChange={handleChange} required />
                    </div>
                  </>
                )}

                <div className="flex justify-between pt-4">
                  {step > 1 ? (
                    <Button type="button" variant="outline" onClick={() => setStep(step - 1)}>
                      Back
                    </Button>
                  ) : (
                    <Link href="/">
                      <Button variant="outline">Cancel</Button>
                    </Link>
                  )}

                  <Button type="submit" className="bg-[#138808] hover:bg-[#0F6606]">
                    {step < 3 ? "Next" : "Register"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <footer className="bg-[#138808] py-4 mt-8">
        <div className="container mx-auto text-center text-white">
          <p>© 2025 Ministry of Agriculture & Farmers Welfare, Government of India</p>
          <p className="text-xs mt-1">This is a demo application and not an official government website</p>
        </div>
      </footer>
    </div>
  )
}

