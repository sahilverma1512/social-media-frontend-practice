"use client"

import { useState, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Heart, MessageCircle, Share2, Bookmark, Smile, Image } from "lucide-react"
import { Button } from "@/components/ui/button"
import api from "@/app/utils/axios"

export function Feed() {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        const res = await api.get("/post/getAllPosts/") // Adjust the API endpoint if needed
        // Log the full response for debugging
        console.log(res.data)

        if (res.data.success) {
          setPosts(res.data.data) // Set posts from the response
        } else {
          console.error("Failed to fetch posts")
        }
      } catch (error) {
        console.error("Error fetching posts:", error)
      }
    }

    getAllPosts()
  }, [])

  return (
    <div className="pb-10 p-8">
      <div className="px-4 py-3 overflow-x-auto flex gap-2 border-b">
        <StoryAvatar username="x_ae" active />
        <StoryAvatar username="Priyanka" />
        <StoryAvatar username="RaymonT" />
        <StoryAvatar username="JohnDoe" />
        <StoryAvatar username="jayjay2" />
        <StoryAvatar username="Elaine" />
        <StoryAvatar username="x_ae" />
        <StoryAvatar username="x_ae" />
      </div>
      {posts.length === 0 ? (
        <p className="text-2xl flex justify-center items-center">No post found</p>
      ) : (
        <div className="flex flex-col divide-y">
          {posts.map((post) => (
            <PostItem key={post._id} post={post} /> // Use the post's unique _id as the key
          ))}
        </div>
      )}
    </div>
  )
}

function StoryAvatar({ username, active = false }: { username: string; active?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-1 min-w-[60px]">
      <div className={`rounded-full p-[2px] ${active ? "bg-gradient-to-br from-purple-500 to-pink-500" : ""}`}>
        <Avatar className="w-14 h-14 border-2 border-white">
          <AvatarImage src="/placeholder.svg?height=56&width=56" alt={username} />
          <AvatarFallback>{username.substring(0, 2).toUpperCase()}</AvatarFallback>
        </Avatar>
      </div>
      <span className="text-xs truncate max-w-[60px]">{username}</span>
    </div>
  )
}

function PostItem({ post }: { post: any }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  return (
    <div className="py-4">
      {/* <div className="px-4 flex items-center gap-3 mb-3">
        <Avatar>
          <AvatarImage src={post.user.avatar || "/placeholder.svg"} alt={post.user.name} />
          <AvatarFallback>{post.user.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div>
          <div className="flex items-center gap-1">
            <h3 className="font-medium">{post.user.name}</h3>
            <span className="text-sm text-gray-500">{post.user.username}</span>
          </div>
          <p className="text-xs text-gray-500">{post.user.role}</p>
        </div>
      </div> */}

      <div className="px-4 mb-3">
        <h1 className="text-xl">{post.text}</h1> {/* Use 'text' field from API response */}
      </div>

      {post.imageUrl && (
        <div className="mb-3">
          <img src={post.imageUrl || "/placeholder.svg"} alt="Post" className="w-full" />
        </div>
      )}

      <div className="px-4 flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Heart className="w-4 h-4" />
          <span>{liked ? post.likes.length + 1 : post.likes.length} Likes</span> {/* Update likes count */}
        </div>
        <div className="flex items-center gap-4">
          <span>{post.comments} Comments</span>
          <span>{post.shares} Share</span>
          <span>{saved ? post.saved + 1 : post.saved} Saved</span>
        </div>
      </div>

      <div className="mt-3 px-4 flex items-center justify-between border-t border-b py-2">
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 ${liked ? "text-red-500" : ""}`}
          onClick={() => setLiked(!liked)}
        >
          <Heart className="w-4 h-4" fill={liked ? "currentColor" : "none"} />
          Like
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <MessageCircle className="w-4 h-4" />
          Comment
        </Button>
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <Share2 className="w-4 h-4" />
          Share
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className={`flex items-center gap-2 ${saved ? "text-purple-500" : ""}`}
          onClick={() => setSaved(!saved)}
        >
          <Bookmark className="w-4 h-4" fill={saved ? "currentColor" : "none"} />
          Save
        </Button>
      </div>

      <div className="px-4 mt-3 flex items-center gap-2">
        <Avatar className="w-8 h-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="User" />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <div className="flex-1 relative">
          <input
            type="text"
            placeholder="Write your comment..."
            className="w-full bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none pr-12"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2 text-gray-400">
            <button>
              <Smile className="w-4 h-4" />
            </button>
            <button>
              <Image className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
