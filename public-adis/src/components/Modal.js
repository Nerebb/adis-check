import React, { useEffect, useRef } from "react";
import { LoadingCircle } from "./constants/LoadingCircle";

const Modal = ({
  modalId,
  title,
  children,
  onClick,
  isLoading = false,
  isErr = true,
}) => {
  const buttonRef = useRef();

  async function onSubmitModal(e) {
    e.preventDefault();
    if (onClick) await onClick();
  }

  useEffect(() => {
    if (!isErr) {
      buttonRef.current.click();
    }
  }, [isErr]);

  return (
    <div
      class="modal fade"
      id={modalId}
      tabindex="-1"
      role="dialog"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <form id="forgotpassForm">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{title}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">{children}</div>
            <div class="modal-footer">
              <button
                ref={buttonRef}
                id={modalId}
                data-dismiss="modal"
                className="custom-button"
              >
                Close
              </button>
              <button
                className="custom-button"
                onClick={onSubmitModal}
                disabled={isLoading}
              >
                {isLoading ? <LoadingCircle /> : "Confirm"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
