import { Link } from '@tanstack/react-router'
export default function OrganiserHeader() {
  //const navigate = useNavigate()

  return (
    <header className="p-2 bg-[#C49964] text-black">
      <nav className="flex items-center justify-between">
        {/* Left: Logo */}
        <div className="px-2">
          <Link to="/">
            <img src="/eventure_logo.png" alt="Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Right: Links + Button */}
        <div className="flex items-center gap-4">
          <div className="font-bold">
            <Link to="/organiser">DashBoard</Link>
          </div>
          <div className="font-bold">
            <Link to="/organiser/createEvents">Create Events</Link>
          </div>
          <div className="font-bold">
            <Link to="/demo/tanstack-query">Help</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}
