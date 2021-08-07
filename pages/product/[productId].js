import { useRouter } from 'next/router'

function Details() {
    const router = useRouter()
    const productId = router.query.productId
    return <h2>Product Details {productId}</h2>
}

export default Details