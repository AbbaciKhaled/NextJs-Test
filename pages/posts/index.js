import Link from 'next/link'

function Posts({ posts }) {
    return <>
        <h1>Posts List !</h1>
        {
            posts.map(post => {
                return (
                    <div key={post.id}>
                        <Link href={`posts/${post.id}`} passHref>
                            <a> {post.title} </a>
                        </Link>
                        <hr />
                    </div>
                )
            })
        }
    </>
}

export default Posts

export async function getStaticProps() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    return {
        props: {
            posts: data.slice(0, 5)
        }
    }
}