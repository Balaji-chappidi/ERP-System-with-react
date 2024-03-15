import '../Product/style.css'

const ProductDetails = (promps) =>{
    const {product,deleteProduct} =  promps;
    const {category,price,productName,stockAvailable,productId} = product;
    const onDelete = () => {
        deleteProduct(productId)
      }
    return(
        <div className='card-con'>
            <div className='card'>
            <p>Product ID: {productId}</p>
            <p>Price: {price}</p>
            <p>Product Name: {productName}</p>
            <p>Category: {category}</p>
            <p>Stock Available: {stockAvailable}</p>
            <div>
                <button className="delete-button" onClick={onDelete}>Delete</button>
            </div>
        </div>
        </div>
        
    )
}
export default ProductDetails