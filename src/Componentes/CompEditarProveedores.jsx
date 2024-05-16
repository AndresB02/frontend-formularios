import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/programacion/proveedores/";

const CompEditarProveedor = () => {
  const [proveedor, setProveedor] = useState("");
  const [tipoProveedor, setTipoProveedor] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [pais, setPais] = useState("");
  const [entidadDestino, setEntidadDestino] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editarProveedor = async (e) => {
    e.preventDefault();
    await axios.put(`${URL}${id}`, {
      proveedor: proveedor,
      tipoProveedor: tipoProveedor,
      ciudad: ciudad,
      pais: pais,
      entidadDestino: entidadDestino,
    });
    navigate("/proveedores");
  };

  useEffect(() => {
    getProveedoresId();
  }, []);

  const getProveedoresId = async () => {
    const resultado = await axios.put(`${URL}${id}`);
    setProveedor(resultado.data.proveedor);
    setTipoProveedor(resultado.data.tipoProveedor);
    setCiudad(resultado.data.ciudad);
    setPais(resultado.data.pais);
    setEntidadDestino(resultado.data.entidadDestino);
  };

  return (
    <div className="shadow-lg p-5 mb-5 bg-white rounded">
      <h2 className="p-4 g-col-6 text-capitalize">Agregar nuevo Proveedor</h2>
      <form onSubmit={editarProveedor}>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el nombre del proveedor"
            type="texto"
            value={proveedor}
            onChange={(e) => setProveedor(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Proveedor</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese el tipo del lenguaje de programación"
            type="texto"
            value={tipoProveedor}
            onChange={(e) => setTipoProveedor(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Tipo de proveedor</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la ciudad del proveedor"
            type="texto"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Ciudad</label>
        </div>
        <div className="form-floating mb-3 ">
          <input
            placeholder="Ingrese el país del proveedors"
            type="texto"
            value={pais}
            onChange={(e) => setPais(e.target.value)}
            className="form-control"
          />
          <label className="form-label">País</label>
        </div>
        <div className="form-floating mb-3">
          <input
            placeholder="Ingrese la entidad destino"
            type="text"
            value={entidadDestino}
            onChange={(e) => setEntidadDestino(e.target.value)}
            className="form-control"
          />
          <label className="form-label">Entidad destino</label>
        </div>

        <div className="d-flex flex-row bd-highlight mb-3 justify-content-between">
          <button
            type="submit"
            className="btn btn-primary gap-2 col-5 d-md-block btn-lg"
          >
            Editar proveedor
          </button>
          <a
            href="/proveedores"
            className="btn btn-success gap-2 col-5 d-md-block btn-lg"
          >
            Cancelar
          </a>
        </div>
      </form>
    </div>
  );
};

export default CompEditarProveedor;
