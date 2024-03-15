import {Component} from 'react'
import ProductDetails from './ProductDetails'
import '../Product/style1.css'

const products = [
    {
        "productId" : 1,
        "productName":"Mobile",
        "category":"Electronics",
        "price":19000,
        "stockAvailable":56,
    },
    {
        "productId" : 2,
        "productName":"T-Shirt",
        "category":"Fashion",
        "price":1200,
        "stockAvailable":550,
    },
]
class Product extends Component{
    state={
        updatedProductList:products,
        productName:"",
        productId:"",
        price:"",
        category:"",
        stockAvailable:"",
        updateProductName:"",
        updateProductId:"",
        updatePrice:"",
        updateCategory:"",
        updateStockAvailable:"",
    }

    onChangeProductName=(event)=>{
        //const {productName} = this.state
        this.setState({productName:event.target.value});
        //console.log(productName);
    }

    onChangeProductId=(event)=>{
        this.setState({productId:event.target.value});
    }

    onChangePrice=(event)=>{
        this.setState({price:event.target.value});
    }

    onChangeCategory=(event)=>{
        this.setState({category:event.target.value});
    }

    onChangeStock = (event) =>{
        this.setState({stockAvailable:event.target.value})
    }

    

    addProduct=(event)=>{
        event.preventDefault();
        const {updatedProductList,price,productId,productName,category,stockAvailable} = this.state;
        console.log(price);
        console.log(productName);
        console.log(price);
        console.log(category);
        console.log(productId);
        console.log(stockAvailable);
        //console.log(updatedProductList);
        const newProduct = {
            "productId" : productId,
            "productName":productName,
            "category":category,
            "price":price,
            "stockAvailable":stockAvailable,
        }
        this.setState(prevState=>({
            updatedProductList:[...prevState.updatedProductList,newProduct],
            productName:"",
            productId:"",
            price:"",
            category:"",
            stockAvailable:"",

        }));
        console.log(updatedProductList);
    }

    

    

    deleteProduct = productId => {
        const {updatedProductList} = this.state
        const filteredProdData = updatedProductList.filter(
          each => each.productId !== productId
        )
        this.setState({
          updatedProductList: filteredProdData
        })
      }

    render(){
        const {updatedProductList,price,productId,productName,category,stockAvailable} = this.state
        return(
            <div>
                <h1 className='heading'>Product List</h1>
                {updatedProductList.map(eachProduct=>(
                    <ProductDetails product = {eachProduct} deleteProduct={this.deleteProduct} key={eachProduct.productId}/>
                ))}
                <div className='form-control'>
                    <form>
                        <div>
                            <label>Product ID</label>
                            <input className='input' type='number' placeholder='Enter Product ID' value={productId} onChange={this.onChangeProductId}/>
                        </div>
                        <div>
                            <label>Product Name</label>
                            <input className='input' type='text' placeholder='Enter Product Name' value={productName} onChange={this.onChangeProductName}/>
                        </div>
                        <div>
                            <label>Category</label>
                            <input className='input' type='text' placeholder='Enter Category' value={category} onChange={this.onChangeCategory}/>
                        </div>
                        <div>
                            <label>Product Price</label>
                            <input className='input' type='number' placeholder='Enter Product Price' value={price} onChange={this.onChangePrice}/>
                        </div>
                        <div>
                            <label>Stock</label>
                            <input className='input' type='number' placeholder='Enter Stock Available' value={stockAvailable} onChange={this.onChangeStock}/>
                        </div>
                        <button className='add-button' onClick={this.addProduct}>Add Product</button>
                    </form>
                </div>
                
            </div>
        )
    }
}
export default Product;