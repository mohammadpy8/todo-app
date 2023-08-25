import React, { useEffect, useState } from 'react';

import TodoList from './components/TodoList';

import { Todo } from './types/Todo.type';

import './App.css'
import Counter from './components/Counter';
import Header from './components/Header';

import ThemsContextProvider from './context/ThemsContextProvider';

const App: React.FC<Todo[]> = (): React.ReactNode => {

  const [todosState, setTodosState] = useState([
  
    { id: crypto.randomUUID(), title: "learnTs", isComplte: false, color: "red" },
    { id: crypto.randomUUID(), title: "learnjs", isComplte: true, color: "black" },
    { id: crypto.randomUUID(), title: "learnreact", isComplte: false, color: "red" },
    { id: crypto.randomUUID(), title: "learnredux", isComplte: true, color: "blue" },

  ]);

  const [loading, setLoading] = useState<string>("");

  useEffect(() => {

    setLoading("react with ts");

  }, [loading]);

  const todos = [
  
    { id: crypto.randomUUID(), title: "learnTs", isComplte: false, color: "red" },
    { id: crypto.randomUUID(), title: "learnjs", isComplte: true, color: "black" },
    { id: crypto.randomUUID(), title: "learnreact", isComplte: false, color: "white" },
    { id: crypto.randomUUID(), title: "learnredux", isComplte: true, color: "blue" },
    
  ];

  return (
    <>
      <ThemsContextProvider>
        <Header />
      </ThemsContextProvider>
    </>
  )
};

export default App
