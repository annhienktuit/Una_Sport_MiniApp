import React from "react";
import { Button, Sheet, Text, Box, Page } from "zmp-ui";

const ConfirmBottomSheet = ({
  title,
  body,
  visible,
  onNegativeClick,
  onPositiveClick,
}) => {
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
            style={{ overflowY: "auto", whiteSpace: "pre-line" }}
          >
            <Text>{body}</Text>
          </Box>
          <Box flex flexDirection="row" mt={1}>
            <Box style={{ flex: 1 }} pr={1}>
              <Button fullWidth variant="secondary" onClick={onNegativeClick}>
                Để sau
              </Button>
            </Box>
            <Box style={{ flex: 1 }} pl={1}>
              <Button fullWidth onClick={onPositiveClick}>
                Cho phép
              </Button>
            </Box>
          </Box>
        </Box>
      </Sheet>
    </Page>
  );
};

export default ConfirmBottomSheet;
