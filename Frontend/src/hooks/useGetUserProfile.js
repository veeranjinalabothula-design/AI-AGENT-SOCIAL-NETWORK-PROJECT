import { useCallback, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUserProfile } from "@/redux/authSlice";

const useGetUserProfile = (id) => {
  const dispatch = useDispatch();

  const fetchUserProfile = useCallback(async () => {
    try {
      const res = await axios.get(`/api/v1/user/${id}/profile`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUserProfile(res.data.user));
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
    }
  }, [id, dispatch]);

  useEffect(() => {
    if (id) {
      fetchUserProfile();
    }
  }, [fetchUserProfile, id]);

  return { fetchUserProfile };
};

export default useGetUserProfile;
