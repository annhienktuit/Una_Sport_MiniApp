import React, { useState } from "react";
import { Button, Sheet, Text, Box, Page, Input } from "zmp-ui";

const ConfirmTextInputSheet = ({
  title,
  visible,
  onNegativeClick,
  onPositiveClick,
}) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Page>
      <Sheet
        visible={visible}
        onClose={onNegativeClick}
        autoHeight
        mask
        handler
        swipeToClose
      >
        <Box p={4} className="custom-bottom-sheet" flex flexDirection="column">
          <Box mb={4}>
            <Text.Title>{title}</Text.Title>
          </Box>
          <Box
            mb={4}
            className="bottom-sheet-body"
            style={{ overflowY: "auto" }}
          >
            <Input.TextArea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Vui lòng nhập ở đây..."
              showCount
            />
          </Box>
          <Box flex flexDirection="row" mt={1}>
            <Box style={{ flex: 1 }} pr={1}>
              <Button fullWidth variant="secondary" onClick={onNegativeClick}>
                Để sau
              </Button>
            </Box>
            <Box style={{ flex: 1 }} pl={1}>
              <Button fullWidth onClick={() => onPositiveClick(inputValue)}>
                Cho phép
              </Button>
            </Box>
          </Box>
        </Box>
      </Sheet>
    </Page>
  );
};

export default ConfirmTextInputSheet;
