import React from "react";
import { createPortal } from "react-dom";

import * as Styled from "./Modal.styled";

import Close from "../../../public/icons/close.svg";

interface ModalProps {
  children: React.ReactNode;
  isActive: boolean;
  onClose: () => void;
  title: string;
}

export const Modal = ({ children, isActive, onClose, title }: ModalProps) => {
  return (
    isActive &&
    createPortal(
      <Styled.ModalContainer>
        <Styled.ModalContent role="dialog" aria-labelledby="dialog" aria-modal="true">
          <Styled.Title>
            <h1>{title}</h1>
            <Close onClick={onClose} />
          </Styled.Title>
          {children}
        </Styled.ModalContent>
      </Styled.ModalContainer>,
      document.body,
    )
  );
};
