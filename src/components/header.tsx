"use client"

import { Search, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CreatePostDialog } from "@/components/create-post-dialog"
import { useState } from "react"

export function Header() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <div className="sticky top-0 z-10 bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between">
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search for friends, groups, pages"
            className="w-full bg-gray-100 rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-purple-600 hover:bg-purple-700 text-white rounded-full flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add New Post
        </Button>

        <Avatar className="h-10 w-10">
          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
      </div>

      <CreatePostDialog open={isDialogOpen} onOpenChange={setIsDialogOpen} />
    </div>
  )
}
