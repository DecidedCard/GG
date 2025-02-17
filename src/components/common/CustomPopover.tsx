import React from "react";

interface CustomPopoverProps {
  children: React.ReactNode;
  popoverContents: React.ReactNode;
}

const CustomPopover = ({ children, popoverContents }: CustomPopoverProps) => {
  return (
    <div>
      <div>{children}</div>
      <div>{popoverContents}</div>
    </div>
  );
};

export default CustomPopover;
