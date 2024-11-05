import React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";

interface CustomPopoverProps {
  children: React.ReactNode;
  popoverContents: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  showArrow?: boolean;
}

const CustomPopover = ({ children, popoverContents }: CustomPopoverProps) => {
  return (
    <Popover>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>{popoverContents}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
