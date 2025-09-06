import React from "react";
import { TaskContext } from "./TaskContext";

export const TaskProvider = ({ children, refreshTasks }) => {
  return (
    <TaskContext.Provider value={{ refreshTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
