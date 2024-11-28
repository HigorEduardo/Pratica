import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import "../css/cadastro.css";
import "../css/navbar.css";


function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const submitCadastro = () => {
      localStorage.setItem("email", email);
      localStorage.setItem("senha", senha);
      navigate('/CTarefas')
  };


  return (
    <>
    <NavBar/>
      <div className="signBox">
      <div className="caixa">
        <h1>Cadastre-se</h1>
        <form>
          
           <input
            type="text"
            placeholder="Digite seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => setSenha(e.target.value)}
            value={senha}
          />
        </form>
        <button
          className="signinEntrar"
          type="submit"
          onClick={() =>
            submitCadastro()
          }
        >
          Entrar
        </button>
      </div>
    </div>
    </>   

  );
}

export default Signup;