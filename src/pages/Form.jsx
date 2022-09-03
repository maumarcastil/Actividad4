import React, { useState } from "react";
import Swal from "sweetalert2";
import List from "../components/List";

const FormRegister = () => {
  const [list, setList] = useState([]);
  const [dataForm, setDataForm] = useState({
    name: "",
    lastName: "",
  });

  const add = () => {
    if (dataForm?.name.trim() === "" || dataForm?.lastName.trim() === "") {
      Swal.fire({
        title: "Error!",
        text: "Todos los campos son requeridos",
        icon: "error",
      });
      return;
    } else {
      setList([...list, dataForm]);
      setDataForm({
        name: "",
        lastName: "",
      });
    }
  };

  const deleteFormList = (index) => {
    setList(list?.filter((item, i) => i !== index));
  };

  const handlerChange = (e) => {
    setDataForm({ ...dataForm, [e.target.name]: e.target.value });
  };

  return (
    <>
      <br />
      <div className="row">
        <div className="d-flex justify-content-center">
          <div className="col-12 ">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Registro</h5>
                <input
                  type="text"
                  name="name"
                  className="form-control my-2"
                  placeholder="Ingrese el nombre"
                  value={dataForm.name}
                  onChange={handlerChange}
                />
                <input
                  type="text"
                  name="lastName"
                  className="form-control my-2"
                  placeholder="Ingrese el apellido"
                  value={dataForm.lastName}
                  onChange={handlerChange}
                />

                <div className="d-grid gap-2 my-2">
                  <button
                    type="submit"
                    id="sendRegister"
                    className="btn btn-primary btn-block"
                    onClick={add}
                  >
                    Registrar
                  </button>
                </div>
              </div>

              <List list={list} deleteFormList={deleteFormList} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormRegister;
