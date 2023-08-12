import React, { FC, useState } from "react";
import { Box, Icon, Text } from "zmp-ui";
import { localizeString } from "../../assets/string";
import { Section } from "./section";
import { BoxProps } from "zmp-ui/box";

export interface DropDownProps extends BoxProps {
  labelString: string;
  placeHolder: string;
  onClick?: () => void;
}

export const DropDownButton: FC<DropDownProps> = ({
  labelString,
  placeHolder,
  onClick,
  ...props
}) => {
  const handleInputClick = () => {
    console.log("Input clicked!");
  };

  return (
    <Box className="flex flex-col">
      <Text.Header size="normal">{labelString}</Text.Header>
      <div className="relative" onClick={handleInputClick}>
        <input
          disabled
          type="text"
          className="px-4 py-2 border rounded-[30px] w-full mt-2 bg-white"
          placeholder={placeHolder}
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
          <Icon icon="zi-chevron-down"></Icon>
        </div>
      </div>
    </Box>
  );
};
