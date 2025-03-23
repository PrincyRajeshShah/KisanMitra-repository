import Link from "next/link"
import { Button } from "@/components/ui/button"
import { IndianEmblem } from "@/components/indian-emblem"

export default function Home() {
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

          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md border border-[#138808]">
            <h2 className="text-2xl font-bold text-[#000080] mb-6">Farmer's Portal Login</h2>

            <form className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-medium">
                  Username / उपयोगकर्ता नाम
                </label>
                <input
                  id="username"
                  type="text"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your username"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium">
                  Password / पासवर्ड
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full p-2 border rounded-md"
                  placeholder="Enter your password"
                />
              </div>

              <Link href="/dashboard" className="w-full">
                <Button className="w-full bg-[#138808] hover:bg-[#0F6606]">Login / लॉग इन करें</Button>
              </Link>

              <div className="text-sm text-center">
                <Link href="#" className="text-blue-600 hover:underline">
                  Forgot Password?
                </Link>
                <span className="mx-2">|</span>
                <Link href="/register" className="text-blue-600 hover:underline">
                  New Registration
                </Link>
              </div>
            </form>
          </div>

          <div className="mt-4 text-sm text-gray-600">
            <p>For technical support, contact: support@kisanmitra.gov.in</p>
          </div>
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

