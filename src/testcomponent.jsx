import {useState} from 'react'


function Test() {
const[use,setUse]  =useState(200);

return(

<>
	<div className="test1">

			<h1> {use} </h1>

	</div>


</>


)


}



export default Test