import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/programacion/lenguajes/";

const CompMostrarProgramas = () => {
  const [lenguajes, setLenguajes] = useState([]);

  useEffect(() => {
    getprogramas();
  }, []);

  const getprogramas = async () => {
    const resultado = await axios.get(URL);
    setLenguajes(resultado.data);
  };

  const eliminarPrograma = async (id) => {
    await axios.delete(`${URL}${id}`);
    getprogramas();
  };

  return (
    <div className="container shadow-lg p-3 mb-5 bg-white rounded table-responsive">
      <div className="row p-4 table-responsive">
        <div className="col table-responsive">
          <Link to="/programas/agregar" className="btn btn-success mb-4">
            {"Agregar Curso"} <i className="fa-solid fa-cart-plus "></i>
          </Link>
          <table className="table table-striped-columns table-bordered border-dark p-3 mb-3 bg-white rounded table-responsive">
            <thead className="table-dark ">
              <tr></tr>
              <tr>
                <th>Nombre del Lenguaje</th>
                <th>Tipo de lenguaje</th>
                <th>Duración del curso</th>
                <th>Entidad</th>
                <th>Valor</th>
                <th>Estado del curso</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {lenguajes &&
                lenguajes.length > 0 &&
                lenguajes.map((lenguaje, index) => (
                  <tr key={index}>
                    <td className="table-primary">{lenguaje.nombre}</td>
                    <td className="table-info">{lenguaje.tipo}</td>
                    <td className="table-primary">{lenguaje.duracion}</td>
                    <td className="table-info">{lenguaje.entidad}</td>
                    <td className="table-primary">{lenguaje.valor}</td>
                    <td className="table-info">{lenguaje.estado}</td>
                    <td className="table-primary d-flex gap-2">
                      <Link
                        to={`/programas/editar/${lenguaje._id}`}
                        className="btn btn-primary"
                      >
                        {"Editar  "}
                        <i className="fa-solid fa-file-pen"></i>
                      </Link>
                      <button
                        onClick={() => eliminarPrograma(lenguaje._id)}
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

export default CompMostrarProgramas;
