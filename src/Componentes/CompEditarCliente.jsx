import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/programacion/clientes/";

const CompEditarClientes = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [documento, setDocumento] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editarClientes = async (e) => {
    e.preventDefault();
    await axios.put(`${URL}${id}`, {
      nombre: nombre,
      apellido: apellido,
      documento: documento,
      correo: correo,
      telefono: telefono,
      direccion: direccion,
    });
    navigate("/clientes");
  };

  useEffect(() => {
    getClientesId();
  }, []);

  const getClientesId = async () => {
    const resultado = await axios.put(`${URL}${id}`);
    setNombre(resultado.data.nombre);
    setApellido(resultado.data.apellido);
    setDocumento(resultado.data.documento);
    setCorreo(resultado.data.correo);
    setTelefono(resultado.data.telefono);
    setDireccion(resultado.data.direccion);
  };

  return (
    <div className="shadow-lg p-5 mb-5 bg-white rounded">
      <h2 className="p-4 g-col-6 text-capitalize">
        Agregar nuevo cliente a la Base de Datos
      </h2>
      <form onSubmit={editarClientes}>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el nombre del cliente"
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
            onChange={(e) => setCorreo(e.target.value)}
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
            Editar Cliente
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

export default CompEditarClientes;
