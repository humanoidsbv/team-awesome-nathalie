import React, { useState } from "react";

import { Button } from "../button/Button";
import { Modal } from "../modal/Modal";

import * as Styled from "./Subheader.styled";

import Close from "../../../public/icons/close.svg";

export const Subheader = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  return (
    <Styled.Container>
      <Styled.TimesheetText>
        Timesheets<Styled.EntryText>12 Entries</Styled.EntryText>
      </Styled.TimesheetText>
      <Styled.Button>
        <Button
          icon
          label="New time entry"
          onClick={() => setIsModalActive(true)}
          style="primary"
        />
      </Styled.Button>
      <Modal isActive={isModalActive} onClose={() => setIsModalActive(false)}>
        <h1>New time entry</h1> <Close />
        <p>Client</p>
        <p>Activity</p>
        <p>Date</p>
        <p>From</p>
        <p>To</p>
        <p>Total</p>
        <Button label="Cancel" />
        <Button label="Add time entry" />
      </Modal>
    </Styled.Container>
  );
};
