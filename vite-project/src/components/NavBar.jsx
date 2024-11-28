import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBC({ User, Email }) {
    const navigate = useNavigate();

    return (
        <div id="Nav2">
            
            <div id="Box2">
                <p>Gerenciamento de Tarefas</p>
                <ul>
                    <li onClick={() => navigate("/")}>Cadastro de Usuários</li>
                    <li onClick={() => navigate("/CTarefas")}>Cadastro de Tarefas</li>
                    <li onClick={() => navigate("/GTarefas")}>Gerenciar Tarefas</li>
                </ul>
            </div>

        </div>
    );
}