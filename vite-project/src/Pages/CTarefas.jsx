import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../css/ctarefas.css";
import "../css/navbar.css";

function Tarefas({ addTarefa }) { // Recebe a função addTarefa como prop
  const navigate = useNavigate();
  const [descricao, setDescricao] = useState("");
  const [setor, setSetor] = useState("");
  const [usuario, setUsuario] = useState("");
  const [prioridade, setPrioridade] = useState("");

  const submitCadastro = (e) => {
    e.preventDefault();
    const novaTarefa = {
      descricao,
      setor,
      usuario,
      prioridade,
      status: "aFazer", 
    };

    addTarefa(novaTarefa); 
    navigate("/GTarefas"); // Corrige a navegação para a página correta
  };

  return (
    <>
      <NavBar />
      <div className="formContainer">
        <div className="formBox">
          <h1>Cadastro de Tarefas</h1>
          <form onSubmit={submitCadastro}>
            <input
              type="text"
              placeholder="Digite a descrição"
              onChange={(e) => setDescricao(e.target.value)}
              value={descricao}
            />
            <input
              type="text"
              placeholder="Digite o setor"
              onChange={(e) => setSetor(e.target.value)}
              value={setor}
            />

            <div className="selectContainer">
              <label htmlFor="usuario">Usuário:</label>
              <select
                id="usuario"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
              >
                <option value="">Selecione o usuário</option>
                <option value="usuario1">Higor</option>
                <option value="usuario2">Davi</option>
                <option value="usuario3">Nicolas</option>
                <option value="usuario4">Carlos</option>
              </select>
            </div>

            <div className="selectContainer">
              <label htmlFor="prioridade">Prioridade:</label>
              <select
                id="prioridade"
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
              >
                <option value="">Selecione a prioridade</option>
                <option value="baixa">Baixa</option>
                <option value="media">Média</option>
                <option value="alta">Alta</option>
              </select>
            </div>

            <button
              className="submitButton"
              type="submit"
            >
              Cadastrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Tarefas;
