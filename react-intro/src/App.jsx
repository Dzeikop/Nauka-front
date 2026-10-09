import { useState, useEffect } from 'react'
import './App.css'


// function App() {
//   const [count, setCount] = useState(0);
  
//   return (
//     <> 
//       <h1>{count}</h1>

//       <button onClick={() => setCount(count+1)}>+1</button>
//       <button onClick={() => {
//         if(count>0) {
//           setCount(count - 1);
//         }
//       }}>
//         -1
//       </button>
//       <button onClick={() => setCount(0)}>Reset</button>
     
//     </>
//   )
// }

// export default App

function App() {

  const [text, setText] = useState(""); // Zmienna dla inputa

  const [tasks, setTasks] = useState(() => {  // Nasza tablica + jeżeli mamy zapisane localStorage to odczytamy je
    const saved = localStorage.getItem("tasks");
    if(saved !== null) {
      return JSON.parse(saved);
    }
    return [];
  });

    useEffect(() => {
      localStorage.setItem("tasks", JSON.stringify(tasks));  // Zapis naszej apki w localStorage
    }, [tasks]);  // Tutaj wpisujemy, kiedy mamy zapisać (w tym przypadku, kiedy zmieni [tasks])


  return (
    <>
    <div className="app"> 
      <input value={text} onChange={(e) => setText(e.target.value)}></input> 
      <button onClick={() => { 
        if(text === "") {
          return; 
        }
        setTasks([...tasks, {text: text, done: false }]); 
        setText("")
      } }>Dodaj</button>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className={task.done ? "done" : ""}>{task.text}</span>
            <button onClick={() => 
              setTasks(
                tasks.map((t, i) => {
                  if (i===index) {
                    return { ...t, done:!t.done };
                  }
                  return t;
                })
              )
             }>
              Zrobione
             </button>
            
            <button onClick={() => setTasks(tasks.filter((t, i) => i !== index))}>
            Usuń
            </button>
           </li>
        ))}
      </ul>
    
    </div>
    </>
  )
}

export default App
