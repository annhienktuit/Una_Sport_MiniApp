import React from "react";
import { Modal, Box, Button } from "zmp-ui";

const CustomPopup = ({
  visible,
  title,
  onClose,
  homeButtonLabel,
  detailButtonLabel,
  onHomeClick,
  onDetailClick,
}) => {
  return (
    <Modal visible={visible} title={title} onClose={onClose}>
      <Box p={6} className="flex flex-col items-center">
        <img
          src="https://static.vecteezy.com/system/resources/previews/020/906/151/original/tick-icon-accept-approve-sign-design-free-free-png.png"
          className="mb-6 w-1/3"
        />
        <div className="flex justify-center">
          <Button
            onClick={onHomeClick || onClose}
            variant="secondary"
            className="mr-2"
          >
            {homeButtonLabel || "Home"}
          </Button>
          <Button onClick={onDetailClick || onClose}>
            {detailButtonLabel || "See Detail"}
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default CustomPopup;
