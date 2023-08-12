import React, { PropsWithChildren } from "react";
import { FC } from "react";
import { Box, Icon, Text } from "zmp-ui";

export const RatingStar: FC<{
  numberOfStar: number;
  numberOfReview: number;
}> = ({ numberOfStar, numberOfReview = 0 }) => {
  const showReviewsText = numberOfReview !== 0;

  return (
    <div className="flex justify-center items-center">
      <Icon size={16} icon="zi-star-solid" className="text-warning"></Icon>
      <Text className="ml-1">
        {numberOfStar} {showReviewsText ? `(${numberOfReview} reviews)` : ""}
      </Text>
    </div>
  );
};
