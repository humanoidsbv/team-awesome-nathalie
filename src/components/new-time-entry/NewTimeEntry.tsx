import React, { useContext, useRef, useState } from "react";
import { useMutation } from "@apollo/client";

import * as Styled from "./NewTimeEntry.styled";
import * as Types from "../../types/TimeEntry.types";
import { ADD_TIME_ENTRY } from "../../GraphQL/Mutations";

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

  const [addTimeEntry] = useMutation(ADD_TIME_ENTRY, {
    onCompleted: (data) => {
      setTimeEntries([...timeEntries, data.createTimeEntry]);
    },
  });

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    await addTimeEntry({
      variables: {
        activity: newTimeEntry.activity,
        client: newTimeEntry.client,
        endTime: new Date(`${newTimeEntry.date} ${newTimeEntry.endTime}`).toISOString(),
        startTime: new Date(`${newTimeEntry.date} ${newTimeEntry.startTime}`).toISOString(),
      },
    });

    onClose();
  };

  const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormValid(formRef.current?.checkValidity() || false);
    setNewTimeEntry({ ...newTimeEntry, [target.name]: target.value });
  };

  return (
    <Styled.NewTimeEntry onSubmit={handleSubmit} ref={formRef}>
      <label htmlFor="client">
        Client
        <input
          id="client"
          minLength={2}
          name="client"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.client ?? ""}
        />
      </label>
      <label htmlFor="activity">
        Activity
        <input
          id="activity"
          minLength={2}
          name="activity"
          onChange={handleChange}
          required
          type="text"
          value={newTimeEntry.activity ?? ""}
        />
      </label>
      <Styled.DateTimeInputWrapper>
        <Styled.DateInput>
          <label htmlFor="date">
            Date
            <input
              id="date"
              name="date"
              onChange={handleChange}
              required
              type="date"
              value={newTimeEntry.date ?? ""}
            />
          </label>
        </Styled.DateInput>
        <Styled.TimeInputWrapper>
          <Styled.TimeInput>
            <label htmlFor="startTime">
              From
              <input
                id="startTime"
                name="startTime"
                onChange={handleChange}
                required
                type="time"
                value={newTimeEntry.startTime ?? ""}
              />
            </label>
          </Styled.TimeInput>
          <Styled.TimeInput>
            <label htmlFor="endTime">
              To
              <input
                id="endTime"
                name="endTime"
                onChange={handleChange}
                required
                type="time"
                value={newTimeEntry.endTime ?? ""}
              />
            </label>
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
