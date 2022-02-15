import React from "react";
import * as Styled from "./PageContainer.styled";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return <Styled.PageContainer>{children}</Styled.PageContainer>;
};
