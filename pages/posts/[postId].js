import { useRouter } from 'next/router'

function Post({ post }) {
    const router = useRouter()

    if (router.isFallback) {
        return <h2>Loading ...</h2>
    }

    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>
}

export default Post



export async function getStaticPaths() {
    const response = await fetch('http://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    const paths = data.map(post => {
        return {
            params: {
                postId: `${post.id}`
            }
        }
    })

    return {
        paths: [
            {
                params: { postId: '1' }
            },
            {
                params: { postId: '2' }
            },
            {
                params: { postId: '3' }
            }
        ],
        //paths,
        fallback: true
        /*
            * fallback :
                ** false: return 404 error / when you have a few number of pages and new pages are not added often
                ** true: return fullback version / page dynamicly generated
        */
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()

    if (!data.id)
        return {
            notFound: true,
        }

    console.log(`Generating post : ${params.postId}`)

    return {
        props: {
            post: data
        }
    }
}