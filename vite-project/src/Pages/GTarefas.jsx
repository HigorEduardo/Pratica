import React, { useState } from "react";
import NavBar from "../components/NavBar";
import "../css/gtarefas.css";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom";

function Gerenciamento({ tarefas, setTarefas }) { 
  const navigate = useNavigate();
  
  const [tarefaEditada, setTarefaEditada] = useState(null); 
  const [novaDescricao, setNovaDescricao] = useState("");
  const [novoSetor, setNovoSetor] = useState("");
  const [novoUsuario, setNovoUsuario] = useState("");
  const [novaPrioridade, setNovaPrioridade] = useState("");

  const moveTarefa = (id, novoStatus) => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, status: novoStatus } : tarefa
      )
    );
  };

  const editarTarefa = (id) => {
    const tarefa = tarefas.find((tarefa) => tarefa.id === id);
    setTarefaEditada(tarefa);
    setNovaDescricao(tarefa.descricao);
    setNovoSetor(tarefa.setor);
    setNovoUsuario(tarefa.usuario);
    setNovaPrioridade(tarefa.prioridade);
  };

  const salvarEdicao = () => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === tarefaEditada.id
          ? {
              ...tarefa,
              descricao: novaDescricao,
              setor: novoSetor,
              usuario: novoUsuario,
              prioridade: novaPrioridade,
            }
          : tarefa
      )
    );
    setTarefaEditada(null);
    setNovaDescricao("");
    setNovoSetor("");
    setNovoUsuario("");
    setNovaPrioridade("");
  };

  const cancelarEdicao = () => {
    setTarefaEditada(null);
    setNovaDescricao("");
    setNovoSetor("");
    setNovoUsuario("");
    setNovaPrioridade("");
  };

  const excluirTarefa = (id) => {
    setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
  };

  return (
    <>
      <NavBar />
      <div className="gerenciamentoContainer">
        <div className="coluna">
          <h2>A Fazer</h2>
          <div className="tarefaList">
            {tarefas
              .filter((tarefa) => tarefa.status === "aFazer")
              .map((tarefa) => (
                <div className="tarefaItem" key={tarefa.id}>
                  <p><strong>Descrição:</strong> {tarefa.descricao}</p>
                  <p><strong>Setor:</strong> {tarefa.setor}</p>
                  <p><strong>Usuário:</strong> {tarefa.usuario}</p>
                  <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>

                  <div className="tarefaButtons">
                    <button onClick={() => editarTarefa(tarefa.id)} className="editarBtn">Editar</button>
                    <button onClick={() => excluirTarefa(tarefa.id)} className="excluirBtn">Excluir</button>
                  </div>

                  <button onClick={() => moveTarefa(tarefa.id, "fazendo")}>
                    Iniciar
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="coluna">
          <h2>Fazendo</h2>
          <div className="tarefaList">
            {tarefas
              .filter((tarefa) => tarefa.status === "fazendo")
              .map((tarefa) => (
                <div className="tarefaItem" key={tarefa.id}>
                  <p><strong>Descrição:</strong> {tarefa.descricao}</p>
                  <p><strong>Setor:</strong> {tarefa.setor}</p>
                  <p><strong>Usuário:</strong> {tarefa.usuario}</p>
                  <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>

                  <div className="tarefaButtons">
                    <button onClick={() => editarTarefa(tarefa.id)} className="editarBtn">Editar</button>
                    <button onClick={() => excluirTarefa(tarefa.id)} className="excluirBtn">Excluir</button>
                  </div>

                  <button onClick={() => moveTarefa(tarefa.id, "pronto")}>
                    Concluir
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="coluna">
          <h2>Pronto</h2>
          <div className="tarefaList">
            {tarefas
              .filter((tarefa) => tarefa.status === "pronto")
              .map((tarefa) => (
                <div className="tarefaItem" key={tarefa.id}>
                  <p><strong>Descrição:</strong> {tarefa.descricao}</p>
                  <p><strong>Setor:</strong> {tarefa.setor}</p>
                  <p><strong>Usuário:</strong> {tarefa.usuario}</p>
                  <p><strong>Prioridade:</strong> {tarefa.prioridade}</p>

                  <div className="tarefaButtons">
                    <button onClick={() => editarTarefa(tarefa.id)} className="editarBtn">Editar</button>
                    <button onClick={() => excluirTarefa(tarefa.id)} className="excluirBtn">Excluir</button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {tarefaEditada && (
        <div className="editarFormulario">
          <h3>Editar Tarefa</h3>
          <div>
            <label>Descrição:</label>
            <input
              type="text"
              value={novaDescricao}
              onChange={(e) => setNovaDescricao(e.target.value)}
            />
          </div>
          <div>
            <label>Setor:</label>
            <input
              type="text"
              value={novoSetor}
              onChange={(e) => setNovoSetor(e.target.value)}
            />
          </div>
          <div>
            <label>Usuário:</label>
            <input
              type="text"
              value={novoUsuario}
              onChange={(e) => setNovoUsuario(e.target.value)}
            />
          </div>
          <div>
            <label>Prioridade:</label>
            <input
              type="text"
              value={novaPrioridade}
              onChange={(e) => setNovaPrioridade(e.target.value)}
            />
          </div>
          <div>
            <button onClick={salvarEdicao}>Salvar</button>
            <button onClick={cancelarEdicao}>Cancelar</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Gerenciamento;