import React from "react";
import { Button, Sheet, Text, Box, Page } from "zmp-ui";

const CustomBottomSheet = ({ title, body, visible, onClose }) => {
  return (
    <Page>
      <Sheet
        visible={visible}
        onClose={onClose}
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
              <Button fullWidth variant="secondary" onClick={onClose}>
                Để sau
              </Button>
            </Box>
            <Box style={{ flex: 1 }} pl={1}>
              <Button fullWidth onClick={onClose}>
                Cho phép
              </Button>
            </Box>
          </Box>
        </Box>
      </Sheet>
    </Page>
  );
};

export default CustomBottomSheet;
