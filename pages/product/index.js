import { Component } from 'react'
import Footer from '../../components/Footer'
import styles from '../../styles/Product.module.scss'

function Product() {
    return (
        <>
            <h2 className={styles.red}>Product 1</h2>
            <h2>Product 2</h2>
            <h2>Product 3</h2>
        </>
    )
}

export default Product

Product.getLayout = function PageLayout(page) {
    return (
        <>
            {page}
            <Footer></Footer>
        </>
    )
}