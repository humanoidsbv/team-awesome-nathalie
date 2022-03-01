import React, { createContext, useState } from "react";

import * as Types from "../time-entries/TimeEntries.types";

interface StoreContextProps {
  timeEntries: [
    timeEntries: Types.TimeEntry[],
    setTimeEntries: React.Dispatch<React.SetStateAction<Types.TimeEntry[]>>,
  ];
}
interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreContext = createContext<StoreContextProps>({} as StoreContextProps);

export function StoreProvider({ children }: StoreProviderProps) {
  const store = {
    timeEntries: useState<Types.TimeEntry[]>([]),
  };

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
}
