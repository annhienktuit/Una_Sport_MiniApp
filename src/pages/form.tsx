import React from "react";
import { Button, Input, Box, Page, useSnackbar } from "zmp-ui";
import { useRecoilState } from "recoil";
import { userInfo } from "zmp-sdk";
import { userState } from "../state";
import { getDatabase, ref, set } from "firebase/database";
import { getUserInfo } from "zmp-sdk/apis";
import { writeUserData } from "../components/firebase/firebase-write";
type UserForm = Omit<userInfo, "id">;

const FormPage: React.FunctionComponent = () => {
  const [user, setUser] = useRecoilState<userInfo>(userState);
  const [form, setForm] = React.useState<UserForm>({
    name: user.name,
    avatar: user.avatar,
    birthday: user.birthday,
    gender: user.gender,
  });
  const snackbar = useSnackbar();

  const handleChangeInput = (field, value) => {
    setForm({ ...form, [field]: value });
  };

  const handleSubmit = () => {
    snackbar.openSnackbar({ duration: 3000, text: "saved", type: "success" });
    setUser((user) => ({ ...user, ...form }));
  };

  const getUser = async () => {
    try {
      const { userInfo } = await getUserInfo({});
      console.log(userInfo);
    } catch (error) {
      // xử lý khi gọi api thất bại
      console.log(error);
    }
  };

  return (
    <Page className="page">
      <div className="section-container">
        <Box>
          <Input
            id="name"
            label="Name"
            type="text"
            placeholder="Zalo"
            value={form?.name}
            onChange={(e) => handleChangeInput("name", e.target.value)}
          />
          <Input
            label="Avatar"
            type="text"
            placeholder="zalo@zalo.me"
            value={form?.avatar}
            onChange={(e) => handleChangeInput("avatar", e.target.value)}
          />
          <Box mt={4}>
            <Button
              fullWidth
              variant="primary"
              onClick={() => {
                getUser();
                handleSubmit();
                writeUserData("1", "2");
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </div>
    </Page>
  );
};

export default FormPage;
