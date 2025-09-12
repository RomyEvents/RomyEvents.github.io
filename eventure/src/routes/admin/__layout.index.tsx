import { createFileRoute, Navigate } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/__layout/')({
  component: () => <Navigate to="/admin/accounts" />,
})
