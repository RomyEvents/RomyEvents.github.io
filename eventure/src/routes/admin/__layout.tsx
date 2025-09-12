import AdminSidebar from '@/components/admin/adminSideBar'
import { Outlet, createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <AdminSidebar />

      {/* Main content */}
      <main className="flex-1 p-4 overflow-auto bg-gray-50">
        <Outlet />
      </main>
    </div>
  )
}
