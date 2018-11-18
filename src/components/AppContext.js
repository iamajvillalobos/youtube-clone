import React from "react";

const AppContext = React.createContext({
  onVideoSelect() {}
});

export const Provider = AppContext.Provider;
export const Consumer = AppContext.Consumer;
