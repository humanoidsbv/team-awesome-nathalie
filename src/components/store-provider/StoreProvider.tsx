import React, { createContext, useState } from "react";

import * as Types from "../time-entries/TimeEntries.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntry[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntry[]>>,
  ];
  children?: React.ReactNode;
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export function StoreProvider({ children }: StoreContextProps) {
  const store = {
    timeEntries: useState([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
