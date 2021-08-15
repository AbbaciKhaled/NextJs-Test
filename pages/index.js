import Link from 'next/link'
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/product') //replace you don't want save the previous link in the history
  }
  return (
    <>
      <Link href='/'>
        <a>Home</a>
      </Link>
      <Link href='/about'>
        <a>About</a>
      </Link>
      <br />
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
      <Link href='/posts'>
        <a>Posts</a>
      </Link>
      <button onClick={handleClick}>
        Click me !
      </button>
    </>
  )
}

export default Home