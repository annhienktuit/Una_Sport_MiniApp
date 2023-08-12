import React from "react";

const PublicCourtDetail = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="h-1/3 relative">
        <img
          src="https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/news/2023/03/13/Stamford_Bridge_inside_stadium_view.jpg"
          alt="Cover"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col p-4 space-y-2">
        <h2 className="text-2xl font-semibold mb-2">Sân bóng Cây Trâm</h2>
        <p className="text-gray-600 mb-2">Address: 123 Main Street, City</p>
        <div className="flex items-center space-x-4">
          <svg
            className="w-6 h-6 fill-current text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C7.03 2 3 6.03 3 11a9 9 0 0 0 9 9c4.97 0 9-4.03 9-9a9 9 0 0 0-9-9zm0 14.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0-2.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5zm0-1.38a1.37 1.37 0 1 1 0-2.75 1.37 1.37 0 0 1 0 2.75z" />
          </svg>
          <p className="text-gray-700">2.5 km</p>
        </div>
        <p className=" text-red-500 font-bold mb-4">Còn 2 vị trí trống</p>

        <p className="text-gray-600 line-clamp-3 mt-4">
          Generate Lorem Ipsum placeholder text. Select the number of
          characters, words, sentences or paragraphs, and hit generate! Generate
          Lorem Ipsum placeholder text. Select the number of characters, words,
          sentences or paragraphs, and hit generate! Generate Lorem Ipsum
          placeholder text. Select the number of characters, words, sentences or
          paragraphs, and hit generate!
        </p>
      </div>
      <div className="flex-grow flex items-end justify-center p-4">
        <button className="text-lg w-full rounded-full bg-blue-500 text-white py-3 px-6 font-bold">
          Tham gia chung
        </button>
      </div>
    </div>
  );
};

export default PublicCourtDetail;
