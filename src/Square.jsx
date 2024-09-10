import React, { useState } from "react";
function Square(props){
    let a=props.value;
    let clr=props.col;
    console.log(a+" "+clr);
    let b="#D0F0C0";
    let k="#D0F0C0";
    if(a!=null){
        if(props.value=="X")
        b="black";
        else{
        b="black";
        }
    }
    if(clr==null){
        console.log(4);
    }
    if(clr==1){
        k="black";
        b="white";
        console.log(1);
    }

    return(
        <button type="button" className='square' style={{color:b,backgroundColor:k}} onClick={props.onSquareClick}>{props.value?props.value:"_"}</button>
 )
}
export default Square;