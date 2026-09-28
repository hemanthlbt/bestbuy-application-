import {useState} from 'react'


function New() {
const [number,setNumber] = useState(0);

return(
<>


<div class="test">
<h1>  {number}  </h1>
</div>


</>
)

}





export default New