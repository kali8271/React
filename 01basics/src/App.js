import { useState } from 'react'
import './App.css';

function App() {
  

    let [counter, setcounter] = useState(15)

    const addValue =() =>{
        setcounter(counter +1)
    }

    const subtractValue =() =>{
        if(counter > 0){
            setcounter(counter -1)
        }
    }
   
        

        return (
           <div>
             <p>This is a simple React Counter App</p>
             <h1>React Counter</h1>
                <h2>Counter: {counter}</h2>
                <button onClick={addValue}>Add</button>
                <button onClick={subtractValue}>Subtract</button>
           </div>
      
     
  );
}

export default App;
