import React from "react";

export const RadioGroup = ({ label, options, formikForm }) => {
  return (
    <div class="form-group">
      <label class="font-weight-bold cap-first-letter">{label}</label>
      <div class="form-group marginforradio">
        {Array.isArray(options) &&
          options.map((i) => (
            <>
              <label htmlFor={`${label}-${i}`}>{i}</label>
              <input
                type="radio"
                id={`${label}-${i}`}
                name={label}
                value={i}
                onChange={formikForm.handleChange}
              />
            </>
          ))}
      </div>
    </div>
  );
};
