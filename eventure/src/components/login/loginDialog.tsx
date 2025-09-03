// LoginDialog.tsx
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  Typography,
  Button,
  Box,
  CircularProgress,
} from '@mui/material'
// import { supabase } from '@/supabaseClient'
import { supabase } from '@/supabaseClient'
let showLoginDialog: () => void

export function LoginDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  // const navigate = useNavigate()
  // src/supabaseClient.js

  showLoginDialog = () => {
    setIsOpen(true)
  }
  // const openPopup = (url: string, name: string, width = 600, height = 700) => {
  //   const left = window.screenX + (window.outerWidth - width) / 2
  //   const top = window.screenY + (window.outerHeight - height) / 2
  //   return window.open(
  //     url,
  //     name,
  //     `width=${width},height=${height},left=${left},top=${top},resizable,scrollbars=yes,status=1`,
  //   )
  // }
  const handleGoogleSignIn = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',

      options: {
        redirectTo: import.meta.env.VITE_REDIRECT,
      },
    })
    // if (data.url) openPopup(data.url!, 'login', 600, 600)

    if (error) {
      console.error('Google Sign-in error:', error.message)
      setLoading(false)
    }
  }
  if (!isOpen) return null

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      PaperProps={{
        sx: {
          padding: 4,
          width: 360,
          boxShadow: '0px 10px 30px rgba(0,0,0,0.2)',
          borderRadius: 2,
        },
      }}
      disableEscapeKeyDown
    >
      <Typography variant="h5" fontWeight="bold" mb={3} align="center">
        Sign in
      </Typography>

      <DialogContent sx={{ padding: 0 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={handleGoogleSignIn}
          disabled={loading}
          sx={{
            backgroundColor: '#4285F4',
            textTransform: 'none',
            fontWeight: 'bold',
            mb: 1,
            '&:hover': { backgroundColor: '#357ae8' },
          }}
        >
          {loading ? (
            <CircularProgress size={20} sx={{ color: 'white' }} />
          ) : (
            'Sign in with Google'
          )}
        </Button>

        <Box mt={1} textAlign="center">
          <Typography variant="body2" color="textSecondary">
            By signing in, you agree to our{' '}
            <a href="/terms" target="_blank" rel="noopener noreferrer">
              Terms of Service
            </a>
          </Typography>
        </Box>
      </DialogContent>
    </Dialog>
  )
}

export { showLoginDialog }
