import React,{useContext} from 'react';
import LifeContext from '../../contexts/LifeContext';

const Controls = () => {
    const {running,toggleRunning,setGrid,clearGrid,setRandomGrid} = useContext(LifeContext)
    
    return (
        <div className='control-box'>
            <button 
            onClick={toggleRunning}
            className="start">{running ? "Stop" : "Start"}</button>
            <button
            disabled={running ? true : false}
            onClick={() => setGrid(clearGrid())}
            className="clear">Clear</button>
            <button
            disabled={running ? true : false} 
            onClick={()=> setGrid(setRandomGrid())}
            className="random">Random</button>
           
        </div>
    );
}

export default Controls;
