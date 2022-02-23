import React, { useRef, useState } from "react";

import * as Styled from "./Form.styled";

import { Button } from "../button/Button";

interface FormProps {
  onClose: () => void;
  onCreate: ({}) => void;
}

export const Form = ({ onClose, onCreate }: FormProps) => {
  const [newTimeEntry, setNewTimeEntry] = useState<TimeEntry>({});
  const [IsFormValid, setIsFormValid] = useState(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const startTimestamp = new Date(newTimeEntry.date + " " + newTimeEntry.startTime).toISOString();
    const endTimestamp = new Date(newTimeEntry.date + " " + newTimeEntry.endTime).toISOString();
    const newTimeEntries = {
      client: newTimeEntry.client,
      startTime: startTimestamp,
      endTime: endTimestamp,
    };
    onCreate(newTimeEntries);
    // setNewTimeEntry({});
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
    setIsFormValid(formRef.current?.checkValidity());
  };

  return (
    <Styled.Form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="client">Client</label>
      <input
        minLength={2}
        name="client"
        onChange={handleChange}
        value={newTimeEntry.client ?? ""}
        type="text"
      />
      <label htmlFor="activity">Activity</label>
      <input
        minLength={2}
        name="activity"
        onChange={handleChange}
        value={newTimeEntry.activity ?? ""}
        type="text"
      />
      <Styled.DateTimeInputWrapper>
        <Styled.DateInput>
          <label htmlFor="date">Date</label>
          <input name="date" onChange={handleChange} type="date" value={newTimeEntry.date ?? ""} />
        </Styled.DateInput>
        <Styled.TimeInputWrapper>
          <Styled.TimeInput>
            <label htmlFor="startTime">From</label>
            <input
              name="startTime"
              onChange={handleChange}
              type="time"
              value={newTimeEntry.startTime ?? ""}
            />
          </Styled.TimeInput>
          <Styled.TimeInput>
            <label htmlFor="endTime">To</label>
            <input
              name="endTime"
              onChange={handleChange}
              type="time"
              value={newTimeEntry.endTime ?? ""}
            />
          </Styled.TimeInput>
          <Styled.TotalTime>
            Total
            <p>08:00</p>
          </Styled.TotalTime>
        </Styled.TimeInputWrapper>
      </Styled.DateTimeInputWrapper>
      <Styled.Buttons>
        <Button label="Cancel" onClick={onClose} kind="secondary" />
        <Button label="Add time entry" onClick={handleSubmit} />
      </Styled.Buttons>
    </Styled.Form>
  );
};
