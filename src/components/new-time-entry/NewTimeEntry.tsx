import React, { useContext, useRef, useState } from "react";

import * as Styled from "./NewTimeEntry.styled";
import * as Types from "../../types/TimeEntry.types";

import { addTimeEntry } from "../../services/post-time-entries";

import { Button } from "../button/Button";
import { StoreContext } from "../store-provider/StoreProvider";

interface NewTimeEntryProps {
  onClose: () => void;
}

export const NewTimeEntry = ({ onClose }: NewTimeEntryProps) => {
  const state = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = state.timeEntries;
  const [newTimeEntry, setNewTimeEntry] = useState<Types.TimeEntry>({} as Types.TimeEntry);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const startTimestamp = new Date(`${newTimeEntry.date} ${newTimeEntry.startTime}`).toISOString();
    const endTimestamp = new Date(`${newTimeEntry.date} ${newTimeEntry.endTime}`).toISOString();

    const newTimeEntryFormatted = {
      activity: newTimeEntry.activity,
      client: newTimeEntry.client,
      endTime: endTimestamp,
      startTime: startTimestamp,
    };

    const addedTimeEntry = await addTimeEntry(newTimeEntryFormatted);

    if (addedTimeEntry) {
      setTimeEntries([...timeEntries, addedTimeEntry]);
    }

    onClose();
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity() || false);
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  return (
    <Styled.NewTimeEntry onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="client">Client</label>
      <input
        minLength={2}
        name="client"
        onChange={handleChange}
        required
        type="text"
        value={newTimeEntry.client ?? ""}
      />
      <label htmlFor="activity">Activity</label>
      <input
        minLength={2}
        name="activity"
        onChange={handleChange}
        required
        type="text"
        value={newTimeEntry.activity ?? ""}
      />
      <Styled.DateTimeInputWrapper>
        <Styled.DateInput>
          <label htmlFor="date">Date</label>
          <input
            name="date"
            onChange={handleChange}
            required
            type="date"
            value={newTimeEntry.date ?? ""}
          />
        </Styled.DateInput>
        <Styled.TimeInputWrapper>
          <Styled.TimeInput>
            <label htmlFor="startTime">From</label>
            <input
              name="startTime"
              onChange={handleChange}
              required
              type="time"
              value={newTimeEntry.startTime ?? ""}
            />
          </Styled.TimeInput>
          <Styled.TimeInput>
            <label htmlFor="endTime">To</label>
            <input
              name="endTime"
              onChange={handleChange}
              required
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
        <Button label="Add time entry" onClick={handleSubmit} disabled={!isFormValid} />
      </Styled.Buttons>
    </Styled.NewTimeEntry>
  );
};
