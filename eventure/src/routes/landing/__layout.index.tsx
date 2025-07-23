import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landing/__layout/')({
  component: App,
})

function App() {
  return <div className="text-center">hello</div>
}
