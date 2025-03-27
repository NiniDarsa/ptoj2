import Box from "./Box"
import styled from "styled-components"
type Prop={colored:number[]|undefined,array:string[],handleClick:(x:number,y:string)=>void,XO:string,winner:string|null|undefined}

const Board=({array,handleClick,XO,winner,colored}:Prop)=>{
//    CONST ARRAY=['x', 'o', 'o', null, 'x', null, null, null, 'x']
//    CONST COLORED=[0,4,8]
    return(
        <StyledGrid>

{
  colored && array.map((item, i) => {
    const isColored = colored.includes(i);  // Check if the index `i` is in `colored`
    
    return (
      <Box
        key={i}  // Ensure `key` is unique
        index={isColored}  // Pass true if the index is found in `colored`, else false
        value={item}
        onClick={() => handleClick(i, XO)}
        winner={winner}
      />
    );
  })
}
               
            {!colored&&array.map((item,i)=>{
                 return <Box key={i}  value={item} onClick={()=>handleClick(i,XO)} winner={winner} index={false}/>
             })}

        
            {/* <Box value={array[0]} onClick={()=>handleClick(0,XO)} winner={winner}/>
            <Box value={array[1]} onClick={()=>handleClick(1,XO)} winner={winner}/>
            <Box value={array[2]} onClick={()=>handleClick(2,XO)} winner={winner}/>
    

            <Box value={array[3]} onClick={()=>handleClick(3,XO)} winner={winner}/>
            <Box value={array[4]} onClick={()=>handleClick(4,XO)} winner={winner}/>
            <Box value={array[5]} onClick={()=>handleClick(5,XO)} winner={winner}/>
        

            <Box value={array[6]} onClick={()=>handleClick(6,XO)} winner={winner}/>
            <Box value={array[7]} onClick={()=>handleClick(7,XO)} winner={winner}/>
            <Box value={array[8]} onClick={()=>handleClick(8,XO)} winner={winner}/>
        */}
        </StyledGrid>
    )
}
export default Board

const StyledGrid=styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`


