import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/programacion/proveedores/";

const CompMostrarProveedores = () => {
  const [proveedores, setProveedores] = useState([]);

  useEffect(() => {
    getproveedores();
  }, []);

  const getproveedores = async () => {
    const resultado = await axios.get(URL);
    setProveedores(resultado.data);
  };

  const eliminarProveedor = async (id) => {
    await axios.delete(`${URL}${id}`);
    getproveedores();
  };

  return (
    <div className="container shadow-lg p-3 mb-5 bg-white rounded table-responsive">
      <div className="row p-4 table-responsive">
        <div className="col table-responsive">
          <Link to="/proveedores/agregar" className="btn btn-success mb-4">
            {"Agregar Proveedor"}{" "}
            <i className="fa-solid fa-building-shield"></i>
          </Link>
          <table className="table table-striped-columns table-bordered border-dark p-3 mb-3 bg-white rounded table-responsive">
            <thead className="table-dark ">
              <tr></tr>
              <tr>
                <th>Proveedor</th>
                <th>Tipo de proveedor</th>
                <th>Ciudad</th>
                <th>País</th>
                <th>Entidad Destino</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {proveedores &&
                proveedores.length > 0 &&
                proveedores.map((proveedor, index) => (
                  <tr key={index}>
                    <td className="table-primary">{proveedor.proveedor}</td>
                    <td className="table-info">{proveedor.tipoProveedor}</td>
                    <td className="table-info">{proveedor.ciudad}</td>
                    <td className="table-info">{proveedor.pais}</td>
                    <td className="table-info">{proveedor.entidadDestino}</td>
                    <td className="table-primary d-flex gap-2 align-items-center justify-content-center">
                      <Link
                        to={`/proveedores/editar/${proveedor._id}`}
                        className="btn btn-primary"
                      >
                        {"Editar  "}
                        <i className="fa-solid fa-file-pen"></i>
                      </Link>
                      <button
                        onClick={() => eliminarProveedor(proveedor._id)}
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

export default CompMostrarProveedores;
