import { Link } from '@tanstack/react-router'
import Button from '@mui/material/Button'
import { showLoginDialog, LoginDialog } from './login/loginDialog'
export default function LandingHeader() {
  //const navigate = useNavigate()
  const handleLogin = async () => {
    showLoginDialog()
    // optional: analytics or checks
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
            <Link to="/">Home</Link>
          </div>
          <div className="font-bold">
            <Link to="/demo/tanstack-query">About us</Link>
          </div>
          <div className="font-bold">
            <Link to="/demo/tanstack-query">Contact</Link>
          </div>
          <Button onClick={handleLogin}>Login</Button>
          <LoginDialog />
        </div>
      </nav>
    </header>
  )
}
