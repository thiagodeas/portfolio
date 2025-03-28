import { ReactNode } from "react";

interface IconContainerProps {
  children: ReactNode;
}

export const IconContainer = ({children}: IconContainerProps) => {
  return (
    <div className="flex items-center justify-center flex-col text-center gap-2 p-4 hover:shadow-sm hover:scale-110 hover:shadow-sec-text transition-all ease-in-out duration-500">
      {children}
    </div>
  )
}