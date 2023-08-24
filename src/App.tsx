import React from 'react';

import TodoList from './components/TodoList';

import { Todo } from './components/TodoList';

import './App.css'

const App: React.FC<Todo[]> = (): React.ReactNode => {

  const todos = [
  
    { id: crypto.randomUUID(), title: "learnTs", isComplte: false, color:"red" },
    { id: crypto.randomUUID(), title: "learnjs", isComplte: true, color:"black"},
    { id: crypto.randomUUID(), title: "learnreact", isComplte: false, color:"white"},
    { id: crypto.randomUUID(), title: "learnredux", isComplte: true, color:"blue"},
    
  ]

  return (
    <>
      <TodoList todos={todos}/>
      <h1>mohammad</h1>
    </>
  )
};

export default App
