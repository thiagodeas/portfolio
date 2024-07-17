import { ReactNode } from "react";

interface IconContainerProps {
  children: ReactNode;
}

export const IconContainer = ({children}: IconContainerProps) => {
  return (
    <div className="flex items-center justify-center flex-col text-center gap-2">
      {children}
    </div>
  )
}