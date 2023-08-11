import React, { FC } from "react";
import { localizeString } from "../../assets/string";
import { Section } from "../../components/ui/section";

export const SportCenterListContent: FC = () => {
  const numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <Section title={localizeString.locationListHeader}>
      <div className="grid grid-cols-1 gap-4">
        {numbers.map((number) => (
          <div
            key={number}
            className="bg-gray-200 p-4 w-full h-32 flex items-center justify-center"
          >
            {number}
          </div>
        ))}
      </div>
    </Section>
  );
};
