import React from "react";
import { createPortal } from "react-dom";

import * as Styled from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isActive, onClose }: ModalProps) => {
  return isActive
    ? createPortal(
        <Styled.Modal onClick={onClose}>
          <div role="dialog" aria-labelledby="dialog" aria-modal="true">
            <button onClick={onClose}>X</button>
            {children}
          </div>
        </Styled.Modal>,
        document.body,
      )
    : null;
};
