import { connect } from "react-redux"
import { fetchProducts } from "./redux/Products/ProductActions"
import { useEffect } from "react"

 const Products=(props)=>{
    console.log("gin",props)
    useEffect(()=>{
        props.fetchProducts()    
    },[])
    return(
        <div>
            {props.productsData.loading && <p>Loading...</p>}
            {props.productsData.error && <p>{props.productsData.error}</p>}
            <ul className="text-black text-center">
                {props.productsData && props.productsData.products && props.productsData.products.map((product, index) => (
                    <li key={index}>{product.title}</li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {productsData:state.products}
}

const mapDispatchToProps=(dispatch)=>{
    return {fetchProducts :()=>{dispatch(fetchProducts())}}
}

export default connect(mapStateToProps,mapDispatchToProps)(Products)