import React,{useEffect,useContext} from 'react';
import LifeContext from '../../contexts/LifeContext';

import produce from 'immer';


const Grid = () => {
    let numRows = 25
    let numCols = 66
    const {grid,setGrid,running} = useContext(LifeContext)

    

    const rows = []

    

    useEffect(() => {
        for(let i =0; i< numRows; i++) {
            rows.push(
                Array.from(Array(numCols), () => (Math.random() > 0.7 ? 1 : 0))
            )
        }
        setGrid(rows);
        // eslint-disable-next-line
    },[])

    const changeSquare = (i,k) => {
        if(!running) {
            const newGrid = produce(grid, gridCopy => {
                gridCopy[i][k] = grid[i][k] ? 0 : 1;
                
            })
            setGrid(newGrid)
            console.log(newGrid)
        }
    }
 

    
    return (
        <div className='grid-container'>
            
            {
                grid.map((rows,i) => rows.map((col,k) => 
                <div 
                onClick={() => changeSquare(i,k)}
                key={`${i}-${k}`}
                //this will give a unique key for items in nested maps
                //Its ok to use the index as they key because we don't intend to shift anything.
                className={grid[i][k] ? "cell alive" : "cell dead"}>
                    {/* if the cell value is 0 it will be black */}
                </div> ))
            }
            
        </div>
    );
}

export default Grid;
