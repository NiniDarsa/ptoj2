import { useMemo, useState } from "react"

const History=({history,prevClick}:
    { prevClick:(move:number)=>void,
    history:{move:number,positions:null[]|string[],location:{row:number,col:number}}[]})=>{

      //REVERSE
      const [reverse,setReverse]=useState(false)

      const arr=useMemo(()=>{
        if(reverse){
          return [...history].reverse()
        }else{
          return [...history]
        }
      },[reverse,history])
     

    return(
    <>
    <button style={{background:"red",height:"4rem"}}onClick={()=>{setReverse(!reverse)}}>{reverse?"initial":"reverse"}</button>
    <ul>
      {arr.map((item)=>{
        return <Item key={item.move} item={item} onClick={prevClick} length={arr.length}/>
      })}
    </ul>
    </>
    )
}
export default History

const Item=({item,onClick,length}:{length:number,onClick:(move:number)=>void,item:{move:number,positions:null[]  |string[],location:{row:number,col:number}}})=>{
  
  return(
    <li  style={{listStyle:"none"}}>
      {item.move===length-1?<p>current position {item.move}</p>:
        <button onClick={()=>onClick(item.move)}>{item.move===0?"INITIAL":`Step N ${item.move}-location row:${item.location.row} col:${item.location.col}`}</button>}
    </li>
  )
}