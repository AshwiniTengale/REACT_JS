import React from "react";

const primary ={
   color:'orange',
   fontSize:'100px'
}

function Inline(){
    return(
<div>
<h1 className='error'>Error</h1>

<h1 style={primary}>INLINE</h1>
</div>
    )
}

export default Inline
