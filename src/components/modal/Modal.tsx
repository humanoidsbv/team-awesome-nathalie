import { ReactNode } from "react";
import { createPortal } from "react-dom";

import * as Styled from "./Modal.styled";

import CloseIcon from "../../../public/icons/close.svg";

interface ModalProps {
  children: ReactNode;
  isActive: boolean;
  onClose: () => void;
  title: string;
}

export const Modal = ({ children, isActive, onClose, title }: ModalProps) => {
  if (!isActive) {
    return null;
  }

  return createPortal(
    <Styled.ModalContainer onClick={onClose}>
      <Styled.ModalContent
        aria-labelledby="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <Styled.TitleBar>
          <h1>{title}</h1>
          <CloseIcon data-cy="closeButton" onClick={onClose} />
        </Styled.TitleBar>
        {children}
      </Styled.ModalContent>
    </Styled.ModalContainer>,
    document.body,
  );
};
