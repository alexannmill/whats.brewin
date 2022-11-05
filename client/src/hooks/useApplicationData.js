import { useEffect, useReducer } from "react";
import dataReducer, { SET_USERS } from "../reducer/data_reducer";
import axios from "axios";

////

//// Not in proper formate just dumped in from boiler

////
const useApplicationData = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    loading: true,
  });
  useEffect(() => {
    axios({
      method: "GET",
      url: "/api/users",
    })
      .then(({ data }) => {
        dispatch({
          type: SET_USERS,
          users: data,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return {
    state,
    dispatch,
  };
};

export default useApplicationData;
