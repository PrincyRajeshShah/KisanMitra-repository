"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Send, X, Maximize2, Minimize2, Globe, Tractor } from "lucide-react"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

type GovtOffice = {
  name: string
  phone: string
  address: string
}

type FarmingTechnology = {
  name: string
  description: string
  benefits: string
}

type MandiInfo = {
  name: string
  location: string
  timings: string
  crops: string[]
  mspPrices: Record<string, number>
  distance: string
}

export function FarmerSupportBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [language, setLanguage] = useState<"english" | "hindi">("english")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        language === "english"
          ? "Hello! I'm KhetPal, your farming assistant. How can I help you today?"
          : "नमस्ते! मैं खेतपाल हूँ, आपका कृषि सहायक। आज मैं आपकी कैसे मदद कर सकता हूँ?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Government offices contact information
  const govtOffices: GovtOffice[] = [
    {
      name: "Ministry of Agriculture & Farmers Welfare",
      phone: "1800-11-0000",
      address: "Krishi Bhawan, New Delhi-110001",
    },
    {
      name: "Kisan Call Center",
      phone: "1800-180-1551",
      address: "National toll-free number",
    },
    {
      name: "Agricultural Technology Management Agency (ATMA)",
      phone: "011-2338-2295",
      address: "State-level offices across India",
    },
    {
      name: "National Bank for Agriculture and Rural Development (NABARD)",
      phone: "022-2653-9895",
      address: "Plot No. C-24, G Block, Bandra Kurla Complex, Mumbai-400051",
    },
  ]

  // Modern farming technologies
  const farmingTechnologies: FarmingTechnology[] = [
    {
      name: "Precision Agriculture",
      description: "Uses GPS, sensors, drones, and software to optimize farming operations.",
      benefits: "Reduces waste, increases yields, and optimizes resource use.",
    },
    {
      name: "Vertical Farming",
      description: "Growing crops in vertically stacked layers, often in controlled environments.",
      benefits: "Uses 95% less water, requires less space, and can grow crops year-round.",
    },
    {
      name: "IoT Soil Sensors",
      description: "Wireless sensors that monitor soil moisture, temperature, and nutrient levels.",
      benefits: "Provides real-time data for optimal irrigation and fertilization decisions.",
    },
    {
      name: "Drip Irrigation",
      description: "System that delivers water directly to plant roots through a network of pipes and emitters.",
      benefits: "Saves up to 60% water compared to traditional irrigation methods.",
    },
  ]

  // Hindi translations for farming technologies
  const farmingTechnologiesHindi: FarmingTechnology[] = [
    {
      name: "सटीक कृषि (प्रिसिजन एग्रीकल्चर)",
      description: "खेती के कार्यों को अनुकूलित करने के लिए GPS, सेंसर, ड्रोन और सॉफ्टवेयर का उपयोग करता है।",
      benefits: "अपशिष्ट को कम करता है, उपज बढ़ाता है, और संसाधनों का अनुकूलन करता है।",
    },
    {
      name: "वर्टिकल फार्मिंग",
      description: "फसलों को ऊर्ध्वाधर स्तरों में उगाना, अक्सर नियंत्रित वातावरण में।",
      benefits: "95% कम पानी का उपयोग करता है, कम जगह की आवश्यकता होती है, और साल भर फसलें उगा सकता है।",
    },
    {
      name: "IoT मिट्टी सेंसर",
      description: "वायरलेस सेंसर जो मिट्टी की नमी, तापमान और पोषक तत्वों के स्तर की निगरानी करते हैं।",
      benefits: "इष्टतम सिंचाई और उर्वरक निर्णयों के लिए वास्तविक समय डेटा प्रदान करता है।",
    },
    {
      name: "ड्रिप सिंचाई",
      description: "पाइप और एमिटर के नेटवर्क के माध्यम से पौधों की जड़ों तक सीधे पानी पहुंचाने वाली प्रणाली।",
      benefits: "पारंपरिक सिंचाई विधियों की तुलना में 60% तक पानी बचाता है।",
    },
  ]

  // Mandi information
  const mandiInfo: MandiInfo[] = [
    {
      name: "Azadpur Mandi",
      location: "Delhi",
      timings: "5:00 AM - 10:00 PM",
      crops: ["Vegetables", "Fruits"],
      mspPrices: {
        Tomato: 25,
        Potato: 15,
        Onion: 20,
      },
      distance: "15 km",
    },
    {
      name: "Ghazipur Mandi",
      location: "Delhi",
      timings: "6:00 AM - 9:00 PM",
      crops: ["Vegetables", "Fruits", "Flowers"],
      mspPrices: {
        Tomato: 23,
        Potato: 14,
        Onion: 19,
      },
      distance: "22 km",
    },
    {
      name: "Devi Ahilya Bai Holkar Mandi",
      location: "Indore, Madhya Pradesh",
      timings: "7:00 AM - 8:00 PM",
      crops: ["Wheat", "Soybean", "Maize"],
      mspPrices: {
        Wheat: 2015,
        Soybean: 3950,
        Maize: 1962,
      },
      distance: "450 km",
    },
    {
      name: "Khanna Mandi",
      location: "Punjab",
      timings: "6:00 AM - 7:00 PM",
      crops: ["Wheat", "Rice", "Maize"],
      mspPrices: {
        Wheat: 2015,
        Rice: 2060,
        Maize: 1962,
      },
      distance: "5 km",
    },
    {
      name: "Unjha Mandi",
      location: "Gujarat",
      timings: "8:00 AM - 6:00 PM",
      crops: ["Cumin", "Fennel", "Spices"],
      mspPrices: {
        Cumin: 21500,
        Fennel: 12500,
      },
      distance: "780 km",
    },
  ]

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Reset welcome message when language changes
  useEffect(() => {
    setMessages([
      {
        id: "1",
        content:
          language === "english"
            ? "Hello! I'm KhetPal, your farming assistant. How can I help you today?"
            : "नमस्ते! मैं खेतपाल हूँ, आपका कृषि सहायक। आज मैं आपकी कैसे मदद कर सकता हूँ?",
        sender: "bot",
        timestamp: new Date(),
      },
    ])
  }, [language])

  // Mock responses based on keywords
  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    // Check if user wants to switch language
    if (lowerMessage.includes("hindi") || lowerMessage.includes("हिंदी")) {
      setTimeout(() => setLanguage("hindi"), 1000)
      return language === "english" ? "Switching to Hindi language..." : "हिंदी भाषा में बदल रहा है..."
    }

    if (lowerMessage.includes("english") || lowerMessage.includes("अंग्रेजी")) {
      setTimeout(() => setLanguage("english"), 1000)
      return language === "english" ? "Switching to English language..." : "अंग्रेजी भाषा में बदल रहा है..."
    }

    if (language === "english") {
      // English responses
      if (lowerMessage.includes("mandi") || lowerMessage.includes("market")) {
        let response = "Here are the nearest mandis and their details:\n\n"
        mandiInfo.forEach((mandi) => {
          response += `${mandi.name} (${mandi.distance} away)\nLocation: ${mandi.location}\nTimings: ${mandi.timings}\nCrops: ${mandi.crops.join(", ")}\n\nMSP Prices:\n`
          Object.entries(mandi.mspPrices).forEach(([crop, price]) => {
            response += `${crop}: ₹${price}/quintal\n`
          })
          response += "\n"
        })
        return response
      }

      if (lowerMessage.includes("price") || lowerMessage.includes("rate") || lowerMessage.includes("msp")) {
        return "Current MSP rates for major crops:\n- Wheat: ₹2,015 per quintal\n- Rice: ₹2,060 per quintal\n- Maize: ₹1,962 per quintal\n- Soybean: ₹3,950 per quintal\n\nWould you like information on specific mandis where you can sell your crops?"
      }

      if (lowerMessage.includes("subsidy") || lowerMessage.includes("scheme") || lowerMessage.includes("support")) {
        return "You may be eligible for these government schemes:\n1. PM-KISAN: ₹6,000 yearly support\n2. Soil Health Card Scheme\n3. Pradhan Mantri Fasal Bima Yojana\n\nWould you like me to check your eligibility?"
      }

      if (lowerMessage.includes("disease") || lowerMessage.includes("pest")) {
        return "For crop disease concerns, please use the Crop Health section to upload a photo of your plant. Our AI will analyze it and provide treatment recommendations. Would you like me to guide you to that section?"
      }

      if (lowerMessage.includes("water") || lowerMessage.includes("irrigation")) {
        return "Based on your soil moisture data (65%) and upcoming weather forecast, we recommend irrigating with 15mm of water in the next 2 days. You can also use our Water Volume Calculator to determine how much water you need based on your well dimensions."
      }

      if (lowerMessage.includes("weather") || lowerMessage.includes("rain") || lowerMessage.includes("forecast")) {
        return "Weather forecast for your region (Punjab):\n- Today: 32°C, Partly Cloudy\n- Tomorrow: 30°C, 75% chance of rain (35mm expected)\n- Next 5 days: Moderate rainfall expected\n\nWe'll send SMS alerts for significant weather changes."
      }

      if (
        lowerMessage.includes("contact") ||
        lowerMessage.includes("office") ||
        lowerMessage.includes("helpline") ||
        lowerMessage.includes("number") ||
        lowerMessage.includes("phone")
      ) {
        let response = "Here are government offices you can contact for assistance:\n\n"
        govtOffices.forEach((office) => {
          response += `${office.name}\nPhone: ${office.phone}\nAddress: ${office.address}\n\n`
        })
        return response
      }

      if (
        lowerMessage.includes("technology") ||
        lowerMessage.includes("modern") ||
        lowerMessage.includes("new") ||
        lowerMessage.includes("innovation")
      ) {
        let response = "Here are some modern farming technologies you might find useful:\n\n"
        farmingTechnologies.forEach((tech) => {
          response += `${tech.name}\n${tech.description}\nBenefits: ${tech.benefits}\n\n`
        })
        return response
      }

      return "Thank you for your message. I'm KhetPal, your farming assistant. I can help with mandi information, crop prices, weather forecasts, and farming advice. What would you like to know about?"
    } else {
      // Hindi responses
      if (
        lowerMessage.includes("mandi") ||
        lowerMessage.includes("market") ||
        lowerMessage.includes("मंडी") ||
        lowerMessage.includes("बाजार")
      ) {
        let response = "यहां निकटतम मंडियां और उनके विवरण हैं:\n\n"
        mandiInfo.forEach((mandi) => {
          response += `${mandi.name} (${mandi.distance} दूर)\nस्थान: ${mandi.location}\nसमय: ${mandi.timings}\nफसलें: ${mandi.crops.join(", ")}\n\nMSP मूल्य:\n`
          Object.entries(mandi.mspPrices).forEach(([crop, price]) => {
            response += `${crop}: ₹${price}/क्विंटल\n`
          })
          response += "\n"
        })
        return response
      }

      if (
        lowerMessage.includes("price") ||
        lowerMessage.includes("rate") ||
        lowerMessage.includes("msp") ||
        lowerMessage.includes("दाम") ||
        lowerMessage.includes("मूल्य") ||
        lowerMessage.includes("एमएसपी")
      ) {
        return "प्रमुख फसलों के वर्तमान MSP दर:\n- गेहूं: ₹2,015 प्रति क्विंटल\n- चावल: ₹2,060 प्रति क्विंटल\n- मक्का: ₹1,962 प्रति क्विंटल\n- सोयाबीन: ₹3,950 प्रति क्विंटल\n\nक्या आप विशिष्ट मंडियों के बारे में जानकारी चाहते हैं जहां आप अपनी फसलें बेच सकते हैं?"
      }

      if (
        lowerMessage.includes("subsidy") ||
        lowerMessage.includes("scheme") ||
        lowerMessage.includes("support") ||
        lowerMessage.includes("सब्सिडी") ||
        lowerMessage.includes("योजना") ||
        lowerMessage.includes("सहायता")
      ) {
        return "आप इन सरकारी योजनाओं के लिए पात्र हो सकते हैं:\n1. PM-KISAN: ₹6,000 वार्षिक सहायता\n2. मृदा स्वास्थ्य कार्ड योजना\n3. प्रधानमंत्री फसल बीमा योजना\n\nक्या आप चाहते हैं कि मैं आपकी पात्रता की जांच करूं?"
      }

      if (
        lowerMessage.includes("disease") ||
        lowerMessage.includes("pest") ||
        lowerMessage.includes("बीमारी") ||
        lowerMessage.includes("कीट")
      ) {
        return "फसल की बीमारी संबंधी चिंताओं के लिए, कृपया अपने पौधे की फोटो अपलोड करने के लिए फसल स्वास्थ्य अनुभाग का उपयोग करें। हमारा AI इसका विश्लेषण करेगा और उपचार की सिफारिशें प्रदान करेगा। क्या आप चाहते हैं कि मैं आपको उस अनुभाग में ले जाऊं?"
      }

      if (
        lowerMessage.includes("water") ||
        lowerMessage.includes("irrigation") ||
        lowerMessage.includes("पानी") ||
        lowerMessage.includes("सिंचाई")
      ) {
        return "आपके मिट्टी की नमी डेटा (65%) और आगामी मौसम पूर्वानुमान के आधार पर, हम अगले 2 दिनों में 15mm पानी से सिंचाई करने की सलाह देते हैं। आप अपने कुएं के आयामों के आधार पर आवश्यक पानी की मात्रा निर्धारित करने के लिए हमारे जल मात्रा कैलकुलेटर का भी उपयोग कर सकते हैं।"
      }

      if (
        lowerMessage.includes("weather") ||
        lowerMessage.includes("rain") ||
        lowerMessage.includes("forecast") ||
        lowerMessage.includes("मौसम") ||
        lowerMessage.includes("बारिश") ||
        lowerMessage.includes("पूर्वानुमान")
      ) {
        return "आपके क्षेत्र (पंजाब) के लिए मौसम पूर्वानुमान:\n- आज: 32°C, आंशिक रूप से बादल\n- कल: 30°C, 75% बारिश की संभावना (35mm अपेक्षित)\n- अगले 5 दिन: मध्यम बारिश की उम्मीद\n\nहम महत्वपूर्ण मौसम परिवर्तनों के लिए SMS अलर्ट भेजेंगे।"
      }

      if (
        lowerMessage.includes("contact") ||
        lowerMessage.includes("office") ||
        lowerMessage.includes("helpline") ||
        lowerMessage.includes("number") ||
        lowerMessage.includes("phone") ||
        lowerMessage.includes("संपर्क") ||
        lowerMessage.includes("कार्यालय") ||
        lowerMessage.includes("हेल्पलाइन") ||
        lowerMessage.includes("नंबर") ||
        lowerMessage.includes("फोन")
      ) {
        let response = "सहायता के लिए आप इन सरकारी कार्यालयों से संपर्क कर सकते हैं:\n\n"
        govtOffices.forEach((office) => {
          response += `${office.name}\nफोन: ${office.phone}\nपता: ${office.address}\n\n`
        })
        return response
      }

      if (
        lowerMessage.includes("technology") ||
        lowerMessage.includes("modern") ||
        lowerMessage.includes("new") ||
        lowerMessage.includes("innovation") ||
        lowerMessage.includes("तकनीक") ||
        lowerMessage.includes("आधुनिक") ||
        lowerMessage.includes("नया") ||
        lowerMessage.includes("नवाचार")
      ) {
        let response = "यहां कुछ आधुनिक कृषि तकनीकें हैं जो आपके लिए उपयोगी हो सकती हैं:\n\n"
        farmingTechnologiesHindi.forEach((tech) => {
          response += `${tech.name}\n${tech.description}\nलाभ: ${tech.benefits}\n\n`
        })
        return response
      }

      return "आपके संदेश के लिए धन्यवाद। मैं खेतपाल हूँ, आपका कृषि सहायक। मैं मंडी की जानकारी, फसल के मूल्य, मौसम पूर्वानुमान और कृषि सलाह के साथ मदद कर सकता हूँ। आप क्या जानना चाहते हैं?"
    }
  }

  const handleSend = () => {
    if (input.trim() === "") return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")

    // Simulate bot response after a short delay
    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: getBotResponse(input),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "english" ? "hindi" : "english"))
  }

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 rounded-full h-14 w-14 shadow-lg bg-[#138808] hover:bg-[#0F6606]"
      >
        <div className="flex flex-col items-center justify-center">
          <Tractor className="h-6 w-6" />
          <span className="text-xs mt-1">KhetPal</span>
        </div>
        <span className="sr-only">Open KhetPal chat</span>
      </Button>
    )
  }

  return (
    <div
      className={`fixed bottom-4 right-4 w-80 md:w-96 shadow-xl rounded-lg overflow-hidden transition-all duration-200 ${isMinimized ? "h-14" : "h-[500px]"}`}
    >
      <Card className="h-full flex flex-col">
        <CardHeader className="bg-[#138808] text-white py-3 px-4 flex flex-row items-center justify-between space-y-0">
          <CardTitle className="text-base font-medium flex items-center gap-2">
            <Tractor className="h-5 w-5" />
            {language === "english" ? "KhetPal Assistant" : "खेतपाल सहायक"}
          </CardTitle>
          <div className="flex items-center gap-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="h-7 w-7 text-white hover:bg-[#0F6606]"
            >
              <Globe className="h-4 w-4" />
              <span className="sr-only">Change Language</span>
            </Button>
            {isMinimized ? (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(false)}
                className="h-7 w-7 text-white hover:bg-[#0F6606]"
              >
                <Maximize2 className="h-4 w-4" />
                <span className="sr-only">Maximize</span>
              </Button>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMinimized(true)}
                className="h-7 w-7 text-white hover:bg-[#0F6606]"
              >
                <Minimize2 className="h-4 w-4" />
                <span className="sr-only">Minimize</span>
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-7 w-7 text-white hover:bg-[#0F6606]"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 overflow-y-auto p-3 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-lg px-3 py-2 ${
                      message.sender === "user" ? "bg-[#138808] text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    <p className="whitespace-pre-line text-sm">{message.content}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </CardContent>

            <div className="p-3 border-t">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={language === "english" ? "Type your message..." : "अपना संदेश लिखें..."}
                  className="flex-1"
                />
                <Button type="submit" size="icon" className="bg-[#138808] hover:bg-[#0F6606]">
                  <Send className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </form>
            </div>
          </>
        )}
      </Card>
    </div>
  )
}

