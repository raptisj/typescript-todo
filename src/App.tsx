import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Rows from './components/Rows';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string[]>(['tuples', 'interfaces', 'strictly typed']);

  const addTodo = (val: string) => {
    console.log(val)
    if(!todo.includes(val)) {
      setTodo([...todo, val])
    }
  }

  const deleteTodo = (id: number) => {
    const newTodo = todo.filter((c: string, i: any) => i !== id)
    setTodo(newTodo);
  }

  return (
    <div className="wrapper"> 
      <h1>TypeScript Todo</h1>
      <p>Add your favorite TypeScript feature below.</p>
      <Form addTodo={addTodo} />

      <div className="divider" />

      {todo.length === 0 && <h2>Why you don't like TypeScript???</h2>}

      <div className="rows">
        {todo.map((c: string, i: any) => (
          <Rows key={i} content={c} deleteTodo={deleteTodo} index={i} />
        ))}
      </div>
    </div>
  );
}

export default App;
