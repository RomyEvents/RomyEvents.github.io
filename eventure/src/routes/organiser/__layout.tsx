import OrganiserHeader from '@/components/organiserPage/organiserHeader'
import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/organiser/__layout')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <OrganiserHeader />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
