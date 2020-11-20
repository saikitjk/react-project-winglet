import React from "react";
import "./style.css";

const Dropdown = (props) => {
  const dropdownChanged = (e) => {
    props.changed(e.target.value);
  };

  return (
    <div className="col form-group row px-0">
      <label className="form-label col-sm-4">{props.label}</label>
      <select
        value={props.selectedValue}
        onChange={dropdownChanged}
        className="form-control form-control-sm col-sm-8"
      >
        <option key={0}>Select...</option>
        {props.options.map((item, idx) => (
          <option key={idx + 1} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
