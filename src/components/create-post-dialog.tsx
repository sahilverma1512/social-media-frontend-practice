"use client"

import type React from "react"
import { useState, useRef } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ImageIcon, Video, MapPin, X, Smile } from "lucide-react"
import api from "@/app/utils/axios"

interface CreatePostDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function CreatePostDialog({ open, onOpenChange }: CreatePostDialogProps) {
  const [postText, setPostText] = useState("")
  const [destination, setDestination] = useState("")

  // We will remove the states for handling images and videos since we're only sending text
  const handleSubmit = async () => {
    try {
      const postData = {
        text: postText, // Only sending text to the backend
      };

      const response = await api.post('/post/create', postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert('Post created successfully!');
      setPostText(''); // Clear the text field after successful post creation
      onOpenChange(false); // Close the dialog
    } catch (error: any) {
      console.error('Error creating post:', error);
      alert(`Failed to create post. Please try again. Error: ${error.message}`);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-center text-xl font-bold">Create New Post</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <textarea
            className="w-full min-h-[100px] p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-purple-500 resize-none"
            placeholder="What's on your mind?"
            value={postText}
            onChange={(e) => setPostText(e.target.value)}
          />

          {/* Remove the media preview section, as it's no longer needed */}
          
          <div className="flex items-center justify-between border-t border-b py-3">
            <p className="text-sm font-medium">Add to your post</p>
            <div className="flex gap-2">
              <button className="p-2 rounded-full hover:bg-gray-100 text-green-500">
                <ImageIcon className="h-5 w-5" />
              </button>

              <button className="p-2 rounded-full hover:bg-gray-100 text-blue-500">
                <Video className="h-5 w-5" />
              </button>

              <button className="p-2 rounded-full hover:bg-gray-100 text-orange-500">
                <Smile className="h-5 w-5" />
              </button>

              <button className="p-2 rounded-full hover:bg-gray-100 text-red-500">
                <MapPin className="h-5 w-5" />
              </button>
            </div>
          </div>

          <Button
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            disabled={!postText} // Disable button if no text is entered
          >
            Post
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
