import React from "react";

export const CusPhoneInput = (formikForm) => {
  return (
    <div class="form-group">
      <label htmlFor="phone" class="font-weight-bold">
        Phone #
      </label>
      <input
        type="number"
        inputMode="numeric"
        id="phone"
        class="form-control hideNumSpin"
        placeholder="(000)-(0000000)"
        value={formikForm.values.phone}
        onKeyDown={(evt) =>
          ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()
        }
        onChange={formikForm.handleChange}
      />
    </div>
  );
};
