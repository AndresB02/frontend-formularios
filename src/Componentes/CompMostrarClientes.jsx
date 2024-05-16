import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/programacion/clientes";

const CompMostrarClientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    getclientes();
  }, []);

  const getclientes = async () => {
    const resultado = await axios.get(URL);
    setClientes(resultado.data);
  };

  const eliminarCliente = async (id) => {
    await axios.delete(`${URL}/${id}`);
    getclientes();
  };

  return (
    <div className="container shadow-lg p-3 mb-5 bg-white rounded table-responsive">
      <div className="row p-4 table-responsive">
        <div className="col table-responsive">
          <Link to="/clientes/agregar" className="btn btn-success mb-4">
            {"Agregar Cliente"} <i className="fa-solid fa-cart-plus "></i>
          </Link>
          <table className="table table-striped-columns table-bordered border-dark p-3 mb-3 bg-white rounded table-responsive">
            <thead className="table-dark ">
              <tr></tr>
              <tr>
                <th>Nombres</th>
                <th>Apellidos</th>
                <th>Documento</th>
                <th>Correo</th>
                <th>Teléfono</th>
                <th>Dirección</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {clientes &&
                clientes.length > 0 &&
                clientes.map((cliente, index) => (
                  <tr key={index}>
                    <td className="table-primary">{cliente.nombre}</td>
                    <td className="table-info">{cliente.apellido}</td>
                    <td className="table-primary">{cliente.documento}</td>
                    <td className="table-info">{cliente.correo}</td>
                    <td className="table-primary">{cliente.telefono}</td>
                    <td className="table-info">{cliente.direccion}</td>
                    <td className="table-primary d-flex gap-2">
                      <Link
                        to={`/clientes/editar/${cliente._id}`}
                        className="btn btn-primary"
                      >
                        {"Editar  "}
                        <i className="fa-solid fa-file-pen"></i>
                      </Link>
                      <button
                        onClick={() => eliminarCliente(cliente._id)}
                        className="btn btn-danger"
                      >
                        {"Eliminar  "}
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CompMostrarClientes;
