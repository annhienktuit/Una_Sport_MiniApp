import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { BoxProps } from "zmp-ui/box";

export interface SectionProps extends BoxProps {
  title: string;
  padding?: "all" | "none" | "title-only";
}

export const Section: FC<PropsWithChildren<SectionProps>> = ({
  children,
  title,
  padding = "all",
  ...props
}) => {
  return (
    <Box
      p={4}
      className={` ${padding === "all" ? "p-4 space-y-4" : ""} ${
        padding === "title-only" ? "py-4 space-y-4" : ""
      }`}
      {...props}
    >
      <Text.Header
        size="normal"
        className={`${padding === "title-only" ? "px-4" : ""}`}
      >
        {title}
      </Text.Header>
      {children}
    </Box>
  );
};
