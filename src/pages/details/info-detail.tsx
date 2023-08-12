import React, { useState } from "react";

const DetailInfo = () => {
  const [allowStrangers, setAllowStrangers] = useState(false);

  return (
    <div className="bg-white p-6 h-full">
      <h2 className="text-2xl font-semibold mb-4 leading-tight">
        Thông tin đặt sân
      </h2>
      <p className="mb-2">
        <span className="font-semibold">Sân được chọn:</span> Sân A
      </p>
      <p className="mb-2">
        <span className="font-semibold">Địa điểm:</span> Hồ Chí Minh
      </p>
      <p className="mb-2">
        <span className="font-semibold">Thời gian:</span> 14:00 - 16:00
      </p>
      <p className="mb-2">
        <span className="font-semibold">Ngày:</span> 2023-08-15
      </p>
      <p className="mb-2">
        <span className="font-semibold">Người đặt:</span> John Doe
      </p>
      <div className="mt-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5"
            checked={allowStrangers}
            onChange={() => setAllowStrangers(!allowStrangers)}
          />
          <span className="ml-2">Cho phép người lạ tham gia cùng</span>
        </label>
      </div>
    </div>
  );
};

export default DetailInfo;
