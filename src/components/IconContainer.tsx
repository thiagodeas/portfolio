import { ReactNode } from "react";

interface IconContainerProps {
  children: ReactNode;
}

export const IconContainer = ({children}: IconContainerProps) => {
  return (
    <div className="flex items-center justify-center flex-col text-center gap-2 shadow-md shadow-med-gray p-4 hover:shadow-lg hover:shadow-med-gray hover:scale-110 transition-all ease-in-out duration-500">
      {children}
    </div>
  )
}