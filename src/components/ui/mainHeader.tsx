import React, { FC } from "react";
import { Box, Input, useNavigate } from "zmp-ui";
import { localizeString } from "../../assets/string";

export const MainHeader: FC = () => {
  const navigate = useNavigate();
  return (
    <Box p={4} className="app-header bg-white ">
      <Input.Search
        onFocus={() => navigate("/search")}
        placeholder={localizeString.searchPlaceHolder}
      />
      <div className="bg-black h-52 flex mt-2"></div>
    </Box>
  );
};
