import React,{useState,useCallback,useRef} from 'react';
import About from './components/about/About';
import Controls from './components/controls/Controls';
import Grid from './components/grid/Grid';
import Memorial from './components/about/Memorial';
import produce from 'immer';

import LifeContext from './contexts/LifeContext';
import './styles/global.scss';

function App() {
  

  const [generations, setGenerations] = useState(0)
  const [running,setRunning] = useState(false);
  

  const toggleRunning = () => {
    setRunning(!running)
    
    if(!running) {
      runningRef.current = true;
      runSimulation()
    }
  }
  let numRows = 25
  let numCols = 66

  const operations = [
    [0, 1],
    [0, -1],
    [1, -1],
    [-1, 1],
    [1, 1],
    [-1, -1],
    [1, 0],
    [-1, 0]
    
]

const [grid, setGrid] =useState(Array.from({length: numRows}).map(() => Array.from({length: numCols}).fill(0)))
    //creates an array based on number of rows, then at each index creates a ray with length of columns 


const clearGrid = () => {
  const rows = [];
  for (let i = 0; i< numRows; i++) {
    rows.push(Array.from(Array(numCols), ()=> 0))
  }
  setGenerations(generations => 0)
  return rows;
}


const setRandomGrid = () => {
  const rows = [];
  for(let i =0; i< numRows; i++) {
    rows.push(
        Array.from(Array(numCols), () => (Math.random() > 0.69 ? 1 : 0))
    )
}
  return rows;
}
const runningRef = useRef(running);
  runningRef.current = running


const runSimulation = useCallback(() => {
  if(!runningRef.current) {
      return
  }
  setGrid((g) => {
      return produce(g, gridCopy => {
          for (let i = 0; i < numRows; i++) {
              for(let k = 0; k < numCols; k++) {
                  let neighbors = 0;
                  operations.forEach(([x,y]) => {
                      const newI = (x + i +numRows) % numRows;
                      const newK = (y + k + numCols) % numCols;
                      if (newI >= 0 && newI < numRows && newK >= 0 && newK < numCols) {
                          neighbors += g[newI][newK]
                      }
                  })
                  
                  
                      if (neighbors < 2 || neighbors > 3) {
                          gridCopy[i][k] = 0;
                      }else if (g[i][k] === 0 && neighbors ===3) {
                          gridCopy[i][k] = 1;
                      }
                  
              }
          }
      })
      
  })
     
  setGenerations( generations => generations +=1)
  setTimeout(runSimulation,100)
  // eslint-disable-next-line
},[])

  return (
  <LifeContext.Provider value={{running, toggleRunning,grid,setGrid,operations,runSimulation,runningRef, generations,clearGrid, setGenerations,setRandomGrid}}>
      <div className="App">
      <About />
      <Controls />
      <Grid />
      <Memorial />
    </div>
  </LifeContext.Provider>
    
  );
}

export default App;
