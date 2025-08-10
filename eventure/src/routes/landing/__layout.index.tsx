import { supabase } from '@/supabaseClient'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { ThemeSupa } from '@supabase/auth-ui-shared'

export const Route = createFileRoute('/landing/__layout/')({
  component: App,
})

function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
    })

    return () => subscription.unsubscribe()
  }, [])
  return <div className="text-center">hello world!</div>
}
