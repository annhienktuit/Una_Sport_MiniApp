import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { getUserInfo } from "zmp-sdk/apis";
import { Avatar, Box, Page, Text } from "zmp-ui";
import { userState } from "../../state";

function Welcome() {
  const user = useRecoilValue(userState);
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
