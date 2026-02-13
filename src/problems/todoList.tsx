import { useState} from "react";

export default function App() {
   const [tasks, setTask] = useState([])
   const [value, setValue] = useState("")

   const handleSubmit = () => {
    if (value.trim() === "") return;
    
    setTask((prevtasks) => [...prevtasks, value])
    setValue("")
   }

   const handleDelete = (index) => {
    setTask((prevtasks) => prevtasks.filter((_, i) => i !== index))
   }

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input type="text" placeholder="Add your task" onChange={(e) => setValue(e.target.value)} />
        <div>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      </div>
      <ul>
        {tasks.map((value, index) => (
        <li key={index}>
          <span>{value}</span>
          <button onClick={() => handleDelete(index)}>Delete</button>
        </li>
    ))}
      </ul>
    </div>
  );
}
