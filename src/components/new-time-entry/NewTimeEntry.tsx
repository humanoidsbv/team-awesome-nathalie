import React, { useContext, useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TIME_ENTRY } from "../../GraphQL/Mutations";

import * as Styled from "./NewTimeEntry.styled";
import * as Types from "../../types/TimeEntry.types";

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

  const [addTimeEntry, { data }] = useMutation(ADD_TIME_ENTRY);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.preventDefault();

    if (!isFormValid) {
      return;
    }

    const startTimestamp = new Date(`${newTimeEntry.date} ${newTimeEntry.startTime}`).toISOString();
    const endTimestamp = new Date(`${newTimeEntry.date} ${newTimeEntry.endTime}`).toISOString();

    addTimeEntry({
      variables: {
        activity: newTimeEntry.activity,
        client: newTimeEntry.client,
        endTime: endTimestamp,
        startTime: startTimestamp,
      },
    });

    onClose();
  };

  useEffect(() => {
    if (data) {
      setTimeEntries([...timeEntries, data.createTimeEntry]);
    }
  }, [data]);

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
