import { useRouter } from 'next/router'

function Product({ product }) {
    const router = useRouter()

    if (router.isFallback) {
        return <h2>Loading ...</h2>
    }

    return <>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
    </>
}

export default Product



export async function getStaticPaths() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()

    const paths = data.map(product => {
        return {
            params: {
                productId: `${product.id}`
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    if (!data.id)
        return {
            notFound: true,
        }

    console.log(`Generating product : ${params.productId}`)

    return {
        props: {
            product: data
        }
    }
}