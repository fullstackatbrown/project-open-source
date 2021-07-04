import React from "react";

function Collaborator(props) {
    console.log(props)
    return(
        <img src={props.image_path} alt="Card image cap" class="rounded-circle card-img-top" style={{height:"35px", width:"35px", marginRight:"10px"}}></img>
    );
}

export default Collaborator;