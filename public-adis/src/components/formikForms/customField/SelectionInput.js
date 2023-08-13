import React from "react";

export const SelectionInput = ({ label, options, formikForm }) => {
  return (
    <div class="form-group">
      <label htmlFor={`selection-${label}`} class="font-weight-bold">
        {label}
      </label>
      <select
        id={`selection-${label}`}
        name={label}
        class="form-control"
        onChange={formikForm.handleChange}
      >
        <option value="" selected="selected" disabled>
          Select ...
        </option>
        {Array.isArray(options) &&
          options.map((i) => (
            <option className="cap-first-letter" value={i}>
              {i}
            </option>
          ))}
      </select>
    </div>
  );
};
