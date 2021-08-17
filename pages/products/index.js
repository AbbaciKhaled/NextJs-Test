import Link from 'next/link'

function Products({ products }) {
    return <>
        <h1>Posts List !</h1>
        {
            products.map(product => {
                return (
                    <div key={product.id}>
                        <h2>{product.title} {product.price}</h2>
                        <hr />
                    </div>
                )
            })
        }
    </>
}

export default Products

export async function getStaticProps() {
    const response = await fetch('http://localhost:4000/products')
    const data = await response.json()
    return {
        props: {
            products: data
        }
    }
}