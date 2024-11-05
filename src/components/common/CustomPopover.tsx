import React from "react";

import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";

interface CustomPopoverProps {
  children: React.ReactNode;
  popoverContents: React.ReactNode;
  placement?: "top" | "bottom" | "left" | "right";
  showArrow?: boolean;
}

const CustomPopover = ({
  placement,
  showArrow,
  children,
  popoverContents,
}: CustomPopoverProps) => {
  return (
    <Popover placement={placement || "top"} showArrow={showArrow}>
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent className="bg-bg-300">{popoverContents}</PopoverContent>
    </Popover>
  );
};

export default CustomPopover;
