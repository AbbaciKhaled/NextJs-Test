import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Home.module.css'

function Home() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/product') //replace you don't want save the previous link in the history
  }
  return (
    <>
      <Link href='/'>
        <a className={styles.red}>Home</a>
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
      <div class="alert alert-primary" role="alert">
        <strong>Well done!</strong> You successfully read this
        important alert message.
      </div>
    </>
  )
}

export default Home