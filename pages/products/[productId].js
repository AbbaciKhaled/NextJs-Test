
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

    return {
        paths: [{ params: { productId: '1' } }],
        revalidate: 10
    }
}

export async function getStaticProps(context) {
    const { params } = context
    const response = await fetch(`http://localhost:4000/products/${params.productId}`)
    const data = await response.json()

    return {
        props: {
            product: data
        }
    }
    /*
        ISR :
            * update static pages after build application 
            * specify the number of seconds after what the page can refresh data
            * use revalidate
    */
}