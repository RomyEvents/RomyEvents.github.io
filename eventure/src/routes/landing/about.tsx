import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landing/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/landing/about"!</div>
}
