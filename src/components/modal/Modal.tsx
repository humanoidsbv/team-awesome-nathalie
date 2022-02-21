import React from "react";
import { createPortal } from "react-dom";

import { Button } from "../button/Button";

import * as Styled from "./Modal.styled";

interface ModalProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isActive, onClose }: ModalProps) => {
  return isActive
    ? createPortal(
        <Styled.Modal>
          <Styled.Children>
            <div role="dialog" aria-labelledby="dialog" aria-modal="true">
              {children}
            </div>
            <Styled.Buttons>
              <Button label="Cancel" onClick={onClose} />
              <Button label="Add time entry" />
            </Styled.Buttons>
          </Styled.Children>
        </Styled.Modal>,
        document.body,
      )
    : null;
};
