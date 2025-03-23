"use client"

import { useEffect, useState } from "react"

export function CropAnimation() {
  const [growth, setGrowth] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setGrowth((prev) => {
        if (prev >= 100) {
          return 0
        }
        return prev + 1
      })
    }, 100)

    return () => clearInterval(interval)
  }, [])

  // Calculate the height of the plant based on growth
  const plantHeight = 20 + (growth / 100) * 80

  return (
    <div className="relative w-40 h-40">
      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-amber-800 rounded-md"></div>

      {/* Plant stem */}
      <div
        className="absolute bottom-10 left-1/2 w-1 bg-green-600 transform -translate-x-1/2 transition-all duration-100"
        style={{ height: `${plantHeight}px` }}
      ></div>

      {/* Leaves - only show when growth is past certain points */}
      {growth > 20 && (
        <div className="absolute bottom-20 left-1/2 w-6 h-3 bg-green-500 rounded-full transform -translate-x-full rotate-12"></div>
      )}

      {growth > 30 && (
        <div className="absolute bottom-25 left-1/2 w-6 h-3 bg-green-500 rounded-full transform translate-x-0 -rotate-12"></div>
      )}

      {growth > 40 && (
        <div className="absolute bottom-30 left-1/2 w-8 h-3 bg-green-500 rounded-full transform -translate-x-full rotate-12"></div>
      )}

      {growth > 50 && (
        <div className="absolute bottom-35 left-1/2 w-8 h-3 bg-green-500 rounded-full transform translate-x-0 -rotate-12"></div>
      )}

      {/* Wheat head - only show when growth is past 60% */}
      {growth > 60 && (
        <div
          className="absolute left-1/2 w-3 bg-amber-300 transform -translate-x-1/2 transition-all duration-100"
          style={{
            bottom: `${plantHeight + 5}px`,
            height: `${Math.min((growth - 60) * 0.5, 15)}px`,
            borderRadius: "2px",
          }}
        ></div>
      )}

      {/* Water drops animation */}
      {growth > 80 && (
        <>
          <div className="absolute bottom-10 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"></div>
          <div
            className="absolute bottom-15 left-3/4 w-1 h-1 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.3s" }}
          ></div>
          <div
            className="absolute bottom-20 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-bounce"
            style={{ animationDelay: "0.6s" }}
          ></div>
        </>
      )}
    </div>
  )
}

