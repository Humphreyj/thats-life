import React,{useContext} from 'react';
import LifeContext from '../../contexts/LifeContext';

const Controls = () => {
    const {running,toggleRunning,generations,setGrid,clearGrid,setRandomGrid, makeSpaceShip,makePulsar} = useContext(LifeContext)
    
    return (
        <div className='control-box'>
            <div className="buttons">
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
            <div className="buttons">
            <button
                disabled={running ? true : false} 
                onClick={()=> setGrid(makeSpaceShip)}
                className="random">Crawler</button>

            <button
                disabled={running ? true : false} 
                onClick={()=> setGrid(makePulsar)}
                className="random">Pulsar</button>
            </div>
            <p className='gen'>Generations: {generations}</p>
           
        </div>
    );
}

export default Controls;
