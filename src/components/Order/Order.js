import '../Order/index.css'

const orders = [
    {
        "id" : 1,
        "customerName":"Charan Deep",
        "orderDate":"2024-02-10",
        "status":"Delivered"
    },
    {
        "id" : 2,
        "customerName":"Anusha",
        "orderDate": "2024-02-11",
        "status":"Ordered"
    },
]
const Orders = () =>{
    return(
        <div>
            <h1 className="h1">Orders</h1>
            {orders.map(order=>(
                <div className="card" key={order.id}>
                    <p>Order ID: {order.id}</p>
                    <p>Customer Name: {order.customerName}</p>
                    <p>Order Date: {order.orderDate}</p>
                    <p>Order Status: {order.status}</p>
                </div>
            ))}
        </div>
    )
}
export default Orders;