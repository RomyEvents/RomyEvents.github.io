import { Link } from '@tanstack/react-router'
import Button from '@mui/material/Button'

export default function AdminSidebar() {
  return (
    <aside className="w-48 bg-[#C49964] text-black h-screen p-4 flex flex-col gap-4">
      {/* Logo at the top */}
      <div className="px-2 mb-4">
        <Link to="/">
          <img src="/eventure_logo.png" alt="Logo" className="h-8 w-auto" />
        </Link>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-col gap-2">
        <Button
          component={Link}
          to="/admin/accounts"
          variant="contained"
          color="secondary"
          className="bg-black text-white hover:bg-gray-800"
        >
          Accounts
        </Button>
        <Button
          component={Link}
          to="/admin/applications"
          variant="contained"
          color="secondary"
          className="bg-black text-white hover:bg-gray-800"
        >
          Applications
        </Button>
        <Button
          component={Link}
          to="/demo/tanstack-query"
          variant="contained"
          color="secondary"
          className="bg-black text-white hover:bg-gray-800"
        >
          Categories
        </Button>
        <Button
          component={Link}
          to="/demo/tanstack-query"
          variant="contained"
          color="secondary"
          className="bg-black text-white hover:bg-gray-800"
        >
          Listing Reports
        </Button>
        <Button
          component={Link}
          to="/demo/tanstack-query"
          variant="contained"
          color="secondary"
          className="bg-black text-white hover:bg-gray-800"
        >
          Landing Page
        </Button>
      </div>

      {/* Login button at the bottom */}
      <div className="mt-auto">
        <Button
          onClick={() => alert('Show login dialog')}
          variant="contained"
          className="bg-white text-black hover:bg-gray-200 w-full"
        >
          Login
        </Button>
      </div>
    </aside>
  )
}
