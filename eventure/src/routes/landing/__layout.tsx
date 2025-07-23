import { createFileRoute, Outlet } from '@tanstack/react-router'
import LandingHeader from '@/components/landingHeader'
export const Route = createFileRoute('/landing/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="bg-[url('/landing_background.png')] bg-cover bg-center min-h-screen">
      <LandingHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
