import React, { useState } from "react";
import './Run.css';

function Run() {

  const [nome, setNome] = useState("")
  const [telefone, setTelefone] = useState("")

  return (
    <div className="Run">
      <form>
        <div>
          <p>
            Nome:
          </p>
          <input
            value={nome}
            onChange={e => setNome(e.target.value)}
            placeholder=""
          />
        </div>
        <div>
          <p>
            Telefone:
          </p>
          <input
            value={telefone}
            onChange={e => setTelefone(e.target.value)}
            placeholder=""
          />
        </div>
      </form>
      <div className="Retorno_Central">
        <div className="Retorno">
          <p>{nome}</p>
          <p>{telefone}</p>
        </div>
      </div>
    </div>
  );
}

export default Run;
