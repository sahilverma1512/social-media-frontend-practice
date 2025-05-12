import { Sidebar } from "@/components/sidebar"
import { Header } from "@/components/header"
import { Feed } from "@/components/feed"
import { RightSidebar } from "@/components/right-sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 border-x border-gray-200">
        <Header />
        <Feed />
      </main>
      <RightSidebar />
    </div>
  )
}
