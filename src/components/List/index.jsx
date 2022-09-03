import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const List = ({ list, deleteFormList }) => {
  return (
    <>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre </th>
            <th scope="col">Apellido</th>
            <th scope="col">Opciones</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((item, index) => (
            <tr>
              <td scope="row"> {index + 1}</td>
              <td>{item?.name}</td>
              <td>{item?.lastName}</td>
              <td>
                <FontAwesomeIcon
                  icon={faTrash}
                  onClick={() => {
                    deleteFormList(index);
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default List;
