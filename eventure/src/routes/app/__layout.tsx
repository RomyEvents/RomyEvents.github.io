import { createFileRoute, Outlet } from '@tanstack/react-router'
import AppHeader from '@/components/appHeader'
export const Route = createFileRoute('/app/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <AppHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
