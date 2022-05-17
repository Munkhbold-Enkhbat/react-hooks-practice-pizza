import React from "react";

function Pizza({ id, topping, size, vegetarian, handleEdit }) {


  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? 'Yes' : 'No'}</td>
      <td>
        <button type="button" className="btn btn-primary" onClick={() => handleEdit(id)}>
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
