import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useRecoilState, useRecoilValue } from "recoil";
import { getAppInfo } from "zmp-sdk";
import CustomBottomSheet from "../../components/ui/bottomsheets";
import CustomPopup from "../../components/ui/popup";
import icTick from "../../assets/ic_tick.webp";
import { userState } from "../../state";

function Welcome() {
  const navigate = useNavigate();
  const handleNavigateClick = () => {
    const delay = 5000; // in milliseconds

    setTimeout(() => {
      // Delay fake Zalopay
      navigate("/calendar");
    }, delay);
  };
  const user = useRecoilValue(userState);
  const [isSheetVisible, setIsSheetVisible] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  return (
    <>
      <section className="pt-16 bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center">
                  <div className="relative">
                    <img
                      src={user.avatar}
                      alt="Your Image"
                      className="w-full max-w-screen-lg mt-2 rounded-ful"
                      onClick={() => {
                        setIsPopupVisible(true);
                      }}
                    />
                  </div>
                </div>
                <div className="text-center mt-6">
                  <h3 className="text-2xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {user.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                    Cấp độ bán chuyên
                  </div>
                </div>
                <div className="w-full px-4 text-center mt-20">
                  <div className="flex justify-center py-4 lg:pt-4">
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        22
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Trận đấu
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Đánh giá
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomBottomSheet
          title="Xác nhận thông tin"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          visible={isSheetVisible}
          onClose={() => setIsSheetVisible(false)}
        />
        <CustomPopup
          visible={isPopupVisible}
          title="Thanh toán thành công"
          onClose={() => setIsPopupVisible(false)}
          imageSrc={icTick}
          homeButtonLabel="Trang chủ"
          onHomeClick={() => navigate("/home")}
          detailButtonLabel="Xem chi tiết"
          onDetailClick={() => setIsPopupVisible(false)}
        />
        ;
      </section>
    </>
  );
}

const Profile: React.FunctionComponent = () => {
  return (
    <div>
      <Suspense>
        <Welcome />
      </Suspense>
    </div>
  );
};

export default Profile;
