import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setMessages } from "@/redux/chatSlice";

const useGetAllMessage = () => {
  const dispatch = useDispatch();
  const {selectedUser} = useSelector(store=>store.auth)

  useEffect(() => {
    const fetchAllMessgaes = async () => {
      try {
        const res = await axios.get(`/api/v1/message/all/${selectedUser?._id}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setMessages(res.data.messages || []));
        }
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };
    if (selectedUser?._id) {
      fetchAllMessgaes();
    }
  }, [dispatch, selectedUser?._id]);
};

export default useGetAllMessage;
