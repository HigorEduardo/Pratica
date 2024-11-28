import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Signup from './Pages/Cadastro';
import Tarefas from './Pages/CTarefas';
import Gerenciamento from './Pages/GTarefas';

function App() {
  const [tarefas, setTarefas] = useState([]); // Remover as tarefas pré-definidas

  const addTarefa = (novaTarefa) => {
    setTarefas((prevTarefas) => [
      ...prevTarefas,
      { id: prevTarefas.length + 1, ...novaTarefa },
    ]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route
          path="/CTarefas"
          element={<Tarefas addTarefa={addTarefa} />} 
        />
        <Route
          path="/GTarefas"
          element={<Gerenciamento tarefas={tarefas} setTarefas={setTarefas} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
