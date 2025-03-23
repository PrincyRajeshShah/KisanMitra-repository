"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Droplet } from "lucide-react"

export function WaterVolumeCalculator() {
  const [wellShape, setWellShape] = useState<"circular" | "rectangular">("circular")
  const [dimensions, setDimensions] = useState({
    diameter: 10, // in feet
    length: 10, // in feet
    width: 10, // in feet
    depth: 20, // in feet
    waterLevel: 15, // in feet
  })
  const [result, setResult] = useState<{
    volumeCubicFeet: number
    volumeLiters: number
    volumeGallons: number
  } | null>(null)

  const handleCalculate = () => {
    let volumeCubicFeet = 0

    if (wellShape === "circular") {
      // Volume of a cylinder = π * r² * h
      const radius = dimensions.diameter / 2
      volumeCubicFeet = Math.PI * radius * radius * dimensions.waterLevel
    } else {
      // Volume of a rectangular prism = l * w * h
      volumeCubicFeet = dimensions.length * dimensions.width * dimensions.waterLevel
    }

    // Convert to other units
    const volumeLiters = volumeCubicFeet * 28.3168 // 1 cubic foot = 28.3168 liters
    const volumeGallons = volumeCubicFeet * 7.48052 // 1 cubic foot = 7.48052 gallons

    setResult({
      volumeCubicFeet: Math.round(volumeCubicFeet * 100) / 100,
      volumeLiters: Math.round(volumeLiters * 100) / 100,
      volumeGallons: Math.round(volumeGallons * 100) / 100,
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setDimensions((prev) => ({
      ...prev,
      [name]: Number.parseFloat(value) || 0,
    }))
  }

  return (
    <Card>
      <CardHeader className="bg-blue-50 pb-2">
        <CardTitle className="text-lg">Water Volume Calculator</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-4">
          <div>
            <Label htmlFor="wellShape">Well Shape</Label>
            <Select value={wellShape} onValueChange={(value: "circular" | "rectangular") => setWellShape(value)}>
              <SelectTrigger id="wellShape" className="w-full">
                <SelectValue placeholder="Select well shape" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="circular">Circular</SelectItem>
                <SelectItem value="rectangular">Rectangular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {wellShape === "circular" ? (
            <div>
              <Label htmlFor="diameter">Diameter (feet)</Label>
              <Input
                id="diameter"
                name="diameter"
                type="number"
                value={dimensions.diameter}
                onChange={handleInputChange}
              />
            </div>
          ) : (
            <>
              <div>
                <Label htmlFor="length">Length (feet)</Label>
                <Input id="length" name="length" type="number" value={dimensions.length} onChange={handleInputChange} />
              </div>
              <div>
                <Label htmlFor="width">Width (feet)</Label>
                <Input id="width" name="width" type="number" value={dimensions.width} onChange={handleInputChange} />
              </div>
            </>
          )}

          <div>
            <Label htmlFor="depth">Total Depth (feet)</Label>
            <Input id="depth" name="depth" type="number" value={dimensions.depth} onChange={handleInputChange} />
          </div>

          <div>
            <Label htmlFor="waterLevel">Current Water Level (feet)</Label>
            <Input
              id="waterLevel"
              name="waterLevel"
              type="number"
              value={dimensions.waterLevel}
              onChange={handleInputChange}
            />
          </div>

          <Button onClick={handleCalculate} className="w-full bg-[#138808] hover:bg-[#0F6606]">
            Calculate Water Volume
          </Button>

          {result && (
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <div className="flex items-center gap-2 mb-2">
                <Droplet className="h-5 w-5 text-blue-500" />
                <h3 className="font-medium">Water Volume Results</h3>
              </div>
              <div className="space-y-2">
                <p className="text-sm">
                  <span className="font-medium">Cubic Feet:</span> {result.volumeCubicFeet} ft³
                </p>
                <p className="text-sm">
                  <span className="font-medium">Liters:</span> {result.volumeLiters} L
                </p>
                <p className="text-sm">
                  <span className="font-medium">Gallons:</span> {result.volumeGallons} gal
                </p>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

