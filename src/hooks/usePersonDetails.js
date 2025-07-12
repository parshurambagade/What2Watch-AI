import { useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPersonDetails } from "../redux/personSlice";
import { BACKEND_ENDPOINT } from "../utils/constants";

const usePersonDetails = (personId) => {
  const dispatch = useDispatch();

  const fetchPersonDetails = useCallback(async () => {
    try {
      const data = await fetch(
        `${BACKEND_ENDPOINT}/person-details?personId=${personId}`
      );
      const json = await data.json();
      dispatch(addPersonDetails(json));
    } catch (e) {
      console.error(e);
    }
  }, [dispatch, personId]);

  useEffect(() => {
    personId && fetchPersonDetails();
  }, [fetchPersonDetails, personId]);
};

export default usePersonDetails;
