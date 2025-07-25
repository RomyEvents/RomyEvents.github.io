import { Link } from '@tanstack/react-router'

export default function AppHeader() {
  return (
    <header className="p-2 flex gap-2 bg-white text-black justify-between">
      <nav className="flex flex-row">
        <div className="px-2 font-bold">
          <Link to="/">DashBoard</Link>
        </div>

        <div className="px-2 font-bold">
          <Link to="/demo/tanstack-query">TanStack Query app</Link>
        </div>
      </nav>
    </header>
  )
}
