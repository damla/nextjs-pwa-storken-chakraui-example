import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
  const { status, loading } = useSession()
  const router = useRouter()

  if (loading)
    return (
      <div className='flex min-h-screen items-center justify-center'>
        loading...
      </div>
    )

  if (status === 'authenticated' && !loading) {
    router.push('/dashboard')
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}
