// LoginDialog.tsx
import { useState } from 'react'
import {
  Dialog,
  DialogContent,
  Typography,
  TextField,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
  Button,
  Link,
  Box,
} from '@mui/material'
import {
  AccountCircle,
  Lock,
  Visibility,
  VisibilityOff,
} from '@mui/icons-material'

type LoginResult = { username: string; password: string } | null

let showLoginDialog: () => Promise<LoginResult>

export function LoginDialog() {
  const [isOpen, setIsOpen] = useState(false)
  const [resolveFn, setResolveFn] = useState<(value: LoginResult) => void>(
    () => () => {},
  )
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)

  showLoginDialog = () => {
    setUsername('')
    setPassword('')
    setRememberMe(false)
    setShowPassword(false)
    setIsOpen(true)
    return new Promise<LoginResult>((resolve) => {
      setResolveFn(() => resolve)
    })
  }

  const handleCancel = () => {
    setIsOpen(false)
    resolveFn(null)
  }

  const handleSubmit = () => {
    setIsOpen(false)
    resolveFn({ username, password })
  }

  if (!isOpen) return null

  return (
    <Dialog
      open={isOpen}
      onClose={handleCancel}
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
        Log in
      </Typography>

      <DialogContent sx={{ padding: 0 }}>
        <TextField
          fullWidth
          variant="filled"
          placeholder="Email/Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle sx={{ color: '#555' }} />
              </InputAdornment>
            ),
            disableUnderline: true,
            sx: {
              backgroundColor: '#f0f0f0',
              borderRadius: 1,
              fontStyle: 'italic',
              fontSize: 14,
              height: 40,
              paddingLeft: 1,
            },
          }}
        />

        <TextField
          fullWidth
          variant="filled"
          placeholder="Password"
          type={showPassword ? 'text' : 'password'}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Lock sx={{ color: '#555' }} />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  edge="end"
                  size="small"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
            disableUnderline: true,
            sx: {
              backgroundColor: '#f0f0f0',
              borderRadius: 1,
              fontStyle: 'italic',
              fontSize: 14,
              height: 40,
              paddingLeft: 1,
            },
          }}
        />

        <Box
          mt={1}
          mb={2}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          fontSize={12}
          color="text.secondary"
        >
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                size="small"
              />
            }
            label="Remember Me"
            sx={{ userSelect: 'none', marginRight: 0 }}
          />

          <Link href="#" underline="hover" fontSize={12}>
            Forgot Password?
          </Link>
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          sx={{
            backgroundColor: 'black',
            textTransform: 'none',
            fontWeight: 'bold',
            mb: 1,
            '&:hover': { backgroundColor: '#333' },
          }}
        >
          Log in
        </Button>

        <Typography align="center" fontSize={13} color="text.secondary">
          or{' '}
          <Link href="#" underline="hover" fontWeight="bold">
            Sign up
          </Link>
        </Typography>
      </DialogContent>
    </Dialog>
  )
}

export { showLoginDialog }
