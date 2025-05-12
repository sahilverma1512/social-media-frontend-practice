import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronRight, Plus, Bell } from "lucide-react"

export function RightSidebar() {
  return (
    <div className="w-72 p-4 hidden lg:block space-y-6 sticky top-0 h-screen overflow-y-auto">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Friend Suggestions</h3>
          <Button variant="ghost" size="sm" className="text-xs text-purple-600 hover:text-purple-700">
            See All
            <ChevronRight className="h-3 w-3 ml-1" />
          </Button>
        </div>

        <div className="space-y-3">
          <FriendSuggestion name="Julia Smith" username="@juliasmith" avatar="/placeholder.svg?height=40&width=40" />
          <FriendSuggestion
            name="Vermillion D. Gray"
            username="@vermilliongray"
            avatar="/placeholder.svg?height=40&width=40"
          />
          <FriendSuggestion name="Mel Senpai" username="@melsenpai" avatar="/placeholder.svg?height=40&width=40" />
          <FriendSuggestion name="Azaayaa U. Wu" username="@azaayaawu" avatar="/placeholder.svg?height=40&width=40" />
          <FriendSuggestion name="Oracle Bahama" username="@oraclebh" avatar="/placeholder.svg?height=40&width=40" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Profile Activity</h3>
          <Button variant="ghost" size="sm" className="text-xs text-purple-600 hover:text-purple-700">
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>

        <div className="flex -space-x-2 mb-3">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <Avatar key={i} className="border-2 border-white w-8 h-8">
              <AvatarImage src={`/placeholder.svg?height=32&width=32`} />
              <AvatarFallback>U{i}</AvatarFallback>
            </Avatar>
          ))}
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-lg">+1,158</span>
            <span className="text-gray-500">Followers</span>
          </div>

          <div className="flex items-center gap-1 text-green-500">
            <span>+22% in last month</span>
          </div>

          <p className="text-gray-500">You gained a substantial amount of followers this month!</p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold">Upcoming Events</h3>
          <Button variant="ghost" size="sm" className="text-xs text-purple-600 hover:text-purple-700">
            <ChevronRight className="h-3 w-3" />
          </Button>
        </div>

        <div className="bg-gray-50 rounded-lg p-3 flex items-center gap-3">
          <div className="bg-purple-100 text-purple-600 rounded-lg p-2">
            <Bell className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-medium">Thien's Birthday</h4>
            <p className="text-xs text-gray-500">Jun 25, 2025</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function FriendSuggestion({ name, username, avatar }: { name: string; username: string; avatar: string }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Avatar>
          <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
          <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-gray-500">{username}</p>
        </div>
      </div>
      <Button size="icon" variant="ghost" className="h-7 w-7 rounded-full">
        <Plus className="h-4 w-4" />
      </Button>
    </div>
  )
}
