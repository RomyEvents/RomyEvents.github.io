import AdminSidebar from '@/components/admin/adminSideBar'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AdminSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
