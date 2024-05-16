import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:5000/programacion/proveedores/";

const CompCrearProveedores = () => {
  const [proveedor, setProveedor] = useState("");
  const [tipoProveedor, setTipoProveedor] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [entidadDestino, setEntidadDestino] = useState("");
  const navigate = useNavigate();

  const almacenarProveedores = async (e) => {
    e.preventDefault();
    await axios.post(URL, {
      proveedor: proveedor,
      tipoProveedor: tipoProveedor,
      ciudad: ciudad,
      pais: pais,
      entidadDestino: entidadDestino,
    });
    navigate("/proveedores/");
  };

  return (
    <div className="shadow-lg p-3 mb-5 bg-white rounded p-5">
      <h2 className="p-4 g-col-6 text-capitalize">Agregar nuevo Usuario</h2>
      <form onSubmit={almacenarProveedores}>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el nombre del proveedor"
            type="text"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Proveedor</label>
        </div>

        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese un correo electrónico"
            type="tect"
            value={tipoProveedor}
            onChange={(e) => setTipoProveedor(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Tipo de proovedor</label>
        </div>

        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la fecha de registro"
            type="text"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Ciudad</label>
        </div>

        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la fecha de registro"
            type="text"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            className="form-control"
          />
          <label className="form-label">País</label>
        </div>

        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la fecha de registro"
            type="text"
            value={entidadDestino}
            onChange={(e) => setEntidadDestino(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Entidad Destino</label>
        </div>

        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
          <button
            type="submit"
            className="btn btn-primary gap-2 col-5 d-md-block btn-lg"
          >
            Crear usuario
          </button>
          <a
            href="/usuarios"
            className="btn btn-success gap-2 col-5 d-md-block btn-lg"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default CompCrearProveedores;
