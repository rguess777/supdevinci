import * as yup from "yup";
import { createContext, useCallback, useState } from "react";

const AddEntryContext = createContext({});

const validationSchema = yup.object().shape({
  value: yup.number().required().label("value"),
  message: yup.string().required().label("message"),
});

const initialValues = {
  entries: {
    value: "",
    message: "",
  },
};

const savedInitialValue = {
  savedEntries: [],
};

export const AddEntryProvider = (props) => {
  const [state, setState] = useState(initialValues);
  const handleFormSubmit = useCallback(async ({ state }) => {
    setState(state);
  }, []);

  return (
    <AddEntryContext.Provider
      {...props}
      value={{ state, handleFormSubmit, validationSchema, savedInitialValue }}
    ></AddEntryContext.Provider>
  );
};

export default AddEntryContext;