// routes/index.tsx
import { createFileRoute, Navigate } from '@tanstack/react-router'
export const Route = createFileRoute('/')({
  component: App,
})
function App() {
  return <Navigate to="/landing" /> // redirect to the landing page
}
