function Post({ post }) {
    return <>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
    </>
}

export default Post



export async function getStaticPaths() {
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
            },
            {
                params: { postId: '4' }
            },
            {
                params: { postId: '5' }
            }
        ],
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const data = await response.json()
    return {
        props: {
            post: data
        }
    }
}