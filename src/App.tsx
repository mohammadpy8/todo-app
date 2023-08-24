import React from 'react';

import TodoList from './components/TodoList';

import { Todo } from './components/TodoList';

import './App.css'

const App: React.FC<Todo[]> = (): React.ReactNode => {

  const todos = [
  
    { id: crypto.randomUUID(), title: "learnTs", isComplte: false },
    { id: crypto.randomUUID(), title: "learnjs", isComplte: true},
    { id: crypto.randomUUID(), title: "learnreact", isComplte: false},
    { id: crypto.randomUUID(), title: "learnredux", isComplte: true},
    
  ]

  return (
    <>
      <TodoList todos={todos}/>
      <h1>mohammad</h1>
    </>
  )
};

export default App
