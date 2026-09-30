import {useState} from 'react'



function Big() {
	const[add,setAdd] = useState(0);
		return(
<>

	<div className="group">
		<div className="plus">
			<button onClick={()=>setAdd(add+1)}> + </button>
		</div>

			<div className="display">
					<h1>   {add}  </h1>
  			</div>

			<div className="minus">
				<button onClick={()=>setAdd(add-1)}> - </button>
			</div>


	</div>


</>

		)
}



export default Big


