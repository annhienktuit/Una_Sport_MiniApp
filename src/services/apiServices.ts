import axios from "axios";

const api_url = "https://zah-2.123c.vn/webhook";

const postNotification = async (user_id) => {
  try {
    const response = await axios.post(api_url, { user_id });
    if (response.status === 200) {
      console.log("Posted to server with id", user_id);
    } else {
      console.log("Failed to post user ID.");
    }
  } catch (error) {
    console.error("Error posting user ID:", error);
  }
};

export { postNotification };
