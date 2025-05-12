import type React from "react"
import Link from "next/link"
import { Home, Users, Tv, Zap, CreditCard, Settings, HelpCircle, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Sidebar() {
  return (
    <div className="w-64 bg-purple-700 text-white p-4 flex flex-col h-screen sticky top-0">
      <div className="flex items-center gap-2 mb-6">
        <div className="bg-white text-purple-700 w-8 h-8 rounded-full flex items-center justify-center font-bold">
          S
        </div>
        <h1 className="text-xl font-bold">slothful</h1>
      </div>

      <div className="relative mb-6">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-white/60" />
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-purple-800/50 rounded-full py-2 pl-10 pr-4 text-sm text-white placeholder:text-white/60 focus:outline-none"
        />
      </div>

      <nav className="flex-1 space-y-1">
        <NavItem icon={<Home className="h-5 w-5" />} label="Feed" active count={10} />
        <NavItem icon={<Tv className="h-5 w-5" />} label="Stories" />
        <NavItem icon={<Users className="h-5 w-5" />} label="Friends" count={2} />
        <NavItem icon={<Zap className="h-5 w-5" />} label="APIs" />
        <NavItem icon={<CreditCard className="h-5 w-5" />} label="Subscription" />
        <NavItem icon={<Settings className="h-5 w-5" />} label="Settings" />
        <NavItem icon={<HelpCircle className="h-5 w-5" />} label="Help & Support" />
      </nav>

      <div className="mt-auto pt-4 border-t border-purple-600">
        <Button
          variant="outline"
          className="w-full bg-purple-800/30 text-white border-purple-600 hover:bg-purple-800/50 hover:text-white"
        >
          Go Pro
          <span className="ml-auto">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </Button>

        <div className="flex items-center gap-3 mt-4">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
            <AvatarFallback>AW</AvatarFallback>
          </Avatar>
          <div className="text-sm">
            <p className="font-medium">satyam</p>
            <p className="text-white/70 text-xs">Basic Member</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function NavItem({
  icon,
  label,
  active = false,
  count,
}: {
  icon: React.ReactNode
  label: string
  active?: boolean
  count?: number
}) {
  return (
    <Link
      href="#"
      className={`flex items-center gap-3 px-3 py-2 rounded-lg ${active ? "bg-purple-800/30" : "hover:bg-purple-800/20"}`}
    >
      {icon}
      <span>{label}</span>
      {count && (
        <span className="ml-auto bg-white text-purple-700 text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </Link>
  )
}
