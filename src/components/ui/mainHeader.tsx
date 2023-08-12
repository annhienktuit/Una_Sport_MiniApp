import React, { FC, useState } from "react";
import { useRecoilState } from "recoil";
import { Box, DatePicker, Input, useNavigate } from "zmp-ui";
import { localizeString } from "../../assets/string";
import { dateState, searchValueState } from "../../state";
import DateBooker from "../booking/booker";
import { DropDownButton } from "./dropdownButton";

export const MainHeader: FC = () => {
  const [date, setDate] = useRecoilState(dateState);
  const [searchValue, setSearchValue] = useRecoilState(searchValueState);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
  };

  return (
    <Box className="app-header bg-white" pl={4} pt={3} pr={4} pb={3}>
      <Input.Search placeholder={localizeString.searchPlaceHolder} 
      value = {searchValue}
      onChange={handleSearchChange} />
      <DateBooker onChange={setDate}></DateBooker>
      <div className="bg-white mt-3 flex gap-8">
        <DropDownButton
          labelString={"Môn"}
          placeHolder={"Bóng đá"}
        ></DropDownButton>
        <DropDownButton
          labelString={"Quận"}
          placeHolder={"Quận Thủ Đức"}
        ></DropDownButton>
      </div>
    </Box>
  );
};
