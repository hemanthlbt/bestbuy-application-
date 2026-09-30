import {useState} from 'react'
import "./style.css"
import "./style1.css"
import "./footer.css"
import New from './new.jsx'
import Test from './testcomponent.jsx'
import Big from './compo.jsx'

function App() {
  const[count,setCount] =useState(0);
  const [number,setNumber] =useState(0);
return (
  <>



  <div className="navbar"> 
    <h2> BESTBUY </h2>

<input  type="text"  placeholder="Search best products here..." />
{/*<button  search />*/}
<button> search </button>


        <nav>

        <ul>  

<li>  Home  </li>
<li>  Cart  </li>
<li>  Account  </li>
<li>  Signin/SignUp  </li>


         </ul>
</nav>



  </div>


  <div className="navbar2">
    <nav>
        <ul>

<li>Top deals   </li>
<li>Deal of the day   </li>
<li>Gift Ideas   </li>
<li>Credit cards   </li>
<li>Gift cards   </li>
<li>Comsumer Electronics  </li>
<li>Clothing </li>
<li>Trade In   </li>
<li>Best day Business  </li>
<li>Best buy Members </li>
        </ul>
    </nav>
  </div>



<div className="page1">

<div className="container1">
<h2>  No cost EMI. Plus Instant cashBack   </h2>
</div>



<div className="container2">
<h1>  con2   </h1>
</div>


<div className="container3">
<h1>  con3   </h1>
</div>

</div>


  <New/>
  <Test/>
  <Big/>







<footer className="footer"> 

<h2>  Best Buy </h2>


<div className="footer-sections">
     <div>
      <h3>Shop</h3>
      <p>Products</p>
      <p>Deals</p>
      <p>Gift Cards</p>
    </div>

    <div>
      <h3>Customer Service</h3>
      <p>Help</p>
      <p>Returns</p>
      <p>Shipping</p>
    </div>

    <div>
      <h3>About Us</h3>
      <p>About</p>
      <p>Contact</p>
      <p>Careers</p>
    </div>

</div>


<div className="footer-bottom">

<p> @ 2026 Bestbuy </p>

</div>


</footer>







  </>
)


}




export default App