import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:5000/programacion/lenguajes/";

const CompCrearProgramas = () => {
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [duracion, setDuracion] = useState("");
  const [entidad, setEntidad] = useState("");
  const [valor, setValor] = useState("");
  const [estado, setEstado] = useState("");
  const navigate = useNavigate();

  const almacenarLenguajes = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      nombre: nombre,
      tipo: tipo,
      duracion: duracion,
      valor: valor,
      estado: estado,
    });
    navigate("/programas");
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded p-5">
      <h2 className="p-4 g-col-6 text-capitalize">
        Agregar nuevo curso de lenguajes de programación
      </h2>
      <form onSubmit={almacenarLenguajes}>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el nombre del lenguaje de programación"
            type="texto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Nombre</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el tipo del lenguaje de programación"
            type="texto"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Tipo</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la duración del curso"
            type="texto"
            value={duracion}
            onChange={(e) => setDuracion(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Duracion</label>
        </div>

        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el valor del curso"
            type="number"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Valor</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el estado del curso"
            type="texto"
            value={estado}
            onChange={(e) => setEstado(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Estado</label>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
          <button
            type="submit"
            className="btn btn-primary gap-2 col-5 d-md-block btn-lg"
          >
            Crear curso
          </button>
          <a
            href="/programas"
            className="btn btn-success gap-2 col-5 d-md-block btn-lg"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default CompCrearProgramas;
