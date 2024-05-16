import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:5000/programacion/clientes/";

const CompCrearProgramas = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorrreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();

  const almacenarClientes = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      nombre: nombre,
      apellido: apellido,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    navigate("/clientes");
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded p-5">
      <h2 className="p-4 g-col-6 text-capitalize">
        Agregar nuevo cliente a la Base de Datos
      </h2>
      <form onSubmit={almacenarClientes}>
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
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Apellido</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la duración del curso"
            type="texto"
            value={documento}
            onChange={(e) => setDocumento(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Documento</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            placeholder="Ingrese el nombre de la entidad"
            type="texto"
            value={correo}
            onChange={(e) => setCorrreo(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Correo</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el valor del curso"
            type="number"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Teléfono</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el estado del curso"
            type="texto"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Dirección</label>
        </div>
        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
          <button
            type="submit"
            className="btn btn-primary gap-2 col-5 d-md-block btn-lg"
          >
            Crear cliente
          </button>
          <a
            href="/clientes"
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
