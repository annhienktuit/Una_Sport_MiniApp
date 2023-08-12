import React, { FC } from "react";
import { Box, Input, useNavigate } from "zmp-ui";
import { localizeString } from "../../assets/string";

export const MainHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <Box className="app-header bg-white" pl={4} pt={3} pr={4} pb={3}>
      <Input.Search
        onFocus={() => navigate("/search")}
        placeholder={localizeString.searchPlaceHolder}
      />
    </Box>
  );
};
