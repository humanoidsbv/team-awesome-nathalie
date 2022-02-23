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
  const [isValid, setIsValid] = useState(true);

  const handleBlur = (event) => {
    setIsValid(event.target.checkValidity());
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const startTimestamp = new Date(newTimeEntry.date + " " + newTimeEntry.startTime).toISOString();
    const endTimestamp = new Date(newTimeEntry.date + " " + newTimeEntry.endTime).toISOString();
    const newTimeEntries = {
      client: newTimeEntry.client,
      endTime: endTimestamp,
      startTime: startTimestamp,
    };
    onCreate(newTimeEntries);
    onClose();
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity());
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  return (
    <Styled.Form onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="client">Client</label>
      <input
        minLength={2}
        name="client"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="text"
        value={newTimeEntry.client ?? ""}
      />
      {!isValid && <span>This field is required! (min. 2 characters)</span>}
      <label htmlFor="activity">Activity</label>
      <input
        minLength={2}
        name="activity"
        onBlur={handleBlur}
        onChange={handleChange}
        required
        type="text"
        value={newTimeEntry.activity ?? ""}
      />
      {!isValid && <span>This field is required! (min. 2 characters)</span>}

      <Styled.DateTimeInputWrapper>
        <Styled.DateInput>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            onBlur={handleBlur}
            onChange={handleChange}
            required
            type="date"
            value={newTimeEntry.date ?? ""}
          />
          {!isValid && <span>This field is required!</span>}
        </Styled.DateInput>
        <Styled.TimeInputWrapper>
          <Styled.TimeInput>
            <label htmlFor="startTime">From</label>
            <input
              name="startTime"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.startTime ?? ""}
            />
            {!isValid && <span>This field is required!</span>}
          </Styled.TimeInput>
          <Styled.TimeInput>
            <label htmlFor="endTime">To</label>
            <input
              name="endTime"
              onBlur={handleBlur}
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.endTime ?? ""}
            />
            {!isValid && <span>This field is required!</span>}
          </Styled.TimeInput>
          <Styled.TotalTime>
            Total
            <p>08:00</p>
          </Styled.TotalTime>
        </Styled.TimeInputWrapper>
      </Styled.DateTimeInputWrapper>
      <Styled.Buttons>
        <Button label="Cancel" onClick={onClose} kind="secondary" />
        <Button label="Add time entry" onClick={handleSubmit} disabled={!IsFormValid} />
      </Styled.Buttons>
    </Styled.Form>
  );
};
