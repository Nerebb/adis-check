import { useReducer, useRef } from "react";
import { checkPassword } from "../../validation/auth.validation";
import axiosApi from "../../app/axiosApi";
import Modal from "../Modal";

export const ConfirmPassword = ({ buttonLabel, onClick }) => {
  const initState = {
    password: "",
    message: "",
    isLoading: false,
    isErr: true,
  };
  const [state, setState] = useReducer((prev, next) => {
    if (next.password) {
      try {
        checkPassword.validateSync(next.password);
        next.message = "";
      } catch (error) {
        next.isLoading = false;
        next.message =
          error.message ?? "Something went wrong - please try again";
      }
    }
    return { ...prev, ...next };
  }, initState);
  async function submitPassword() {
    //Debounce
    setState({ isLoading: true });
    await new Promise((_) => setTimeout(_, 1500));
    try {
      const validatedPassword = checkPassword.validateSync(state.password);
      await axiosApi.checkPassword(validatedPassword);
      setState({ ...initState, message: "", isErr: false });
      if (onClick) await onClick();
    } catch (error) {
      setState({
        isLoading: false,
        message: error.message ?? "Something went wrong - please try again",
      });
    }
  }
  return (
    <>
      <button
        type="submit"
        className="custom-button"
        data-toggle="modal"
        data-target="#ConfirmPassword"
        onClick={(e) => e.preventDefault()}
      >
        {buttonLabel}
      </button>
      <Modal
        modalId={"ConfirmPassword"}
        title="Confirm your password"
        isLoading={state.isLoading}
        onClick={submitPassword}
        isErr={state.isErr}
      >
        <input
          id="password"
          type="password"
          class="form-control"
          placeholder="Your password"
          value={state.password}
          onChange={(e) => setState({ password: e.target.value })}
        />
        {state.message && (
          <div className="text-danger cap-first-letter">{state.message}</div>
        )}
      </Modal>
    </>
  );
};
