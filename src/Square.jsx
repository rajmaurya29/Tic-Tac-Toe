import React, { useState } from "react";
function Square(props){
    let a=props.value;
    let b="#D0F0C0";
    if(a!=null){
        b="black";
    }
    return(
        <button type="button" className='square' style={{color:b}} onClick={props.onSquareClick}>{props.value?props.value:"_"}</button>
 )
}
export default Square;