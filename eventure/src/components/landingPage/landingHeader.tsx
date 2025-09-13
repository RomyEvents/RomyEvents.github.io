import { Link } from '@tanstack/react-router'
import Button from '@mui/material/Button'
import { showLoginDialog, LoginDialog } from '../login/loginDialog'

export default function LandingHeader() {
  const handleLogin = async () => {
    showLoginDialog()
  }

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
            <Link to="/landing">Home</Link>
          </div>
          <div className="font-bold">
            <Link to="/landing/about">About us</Link>
          </div>
          <div className="font-bold">
            <Link to="/landing/pricing">Pricing Plans</Link>
          </div>
          <div className="font-bold">
            <Link to="/demo/tanstack-query">FAQ</Link>
          </div>
          <Button onClick={handleLogin}>Signup</Button>
          <LoginDialog />
        </div>
      </nav>

      {/* Subtle admin/organiser links under header */}
      <div className="flex justify-end gap-2 mt-1 px-2">
        <Link to="/admin">
          <Button
            size="small"
            variant="text"
            sx={{ color: 'rgba(0,0,0,0.6)', textTransform: 'none' }}
          >
            Admin
          </Button>
        </Link>
        <Link to="/organiser">
          <Button
            size="small"
            variant="text"
            sx={{ color: 'rgba(0,0,0,0.6)', textTransform: 'none' }}
          >
            Organiser
          </Button>
        </Link>
      </div>
    </header>
  )
}
