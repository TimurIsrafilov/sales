"use client";

import { ReactNode, FC } from "react";
import { Provider } from "react-redux";
import { store } from "@/services/store";

interface TypeProvidersProps {
  children: ReactNode;
}

export const Providers: FC<TypeProvidersProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
