import React from "react";
import { useRecoilValue } from "recoil";
import { Button, Sheet, Text, Box, Page } from "zmp-ui";
import { postNotification } from "../../services/apiServices";
import { userState } from "../../state";

const ConfirmBottomSheet = ({
  title,
  body,
  visible,
  onNegativeClick,
  onPositiveClick,
}) => {
  const user = useRecoilValue(userState);

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
              <Button
                fullWidth
                onClick={() => {
                  postNotification(user.id);
                  onPositiveClick();
                }}
              >
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
