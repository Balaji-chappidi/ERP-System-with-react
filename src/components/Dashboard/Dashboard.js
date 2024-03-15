import * as React from "react";
import { Link } from "react-router-dom";
import '../Dashboard/style.css'



const Dashboard = () => (

     <nav className="nav-bar">
      <ul className="nav-menu">
       <li className="li">
         <Link className="nav-link" to="/product">Product Details</Link>
       </li>
       <li className="li">
         <Link className="nav-link" to="/">Order</Link>
       </li>
     </ul>
     </nav>

)
export default Dashboard;