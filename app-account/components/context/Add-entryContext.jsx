import * as yup from "yup";
import { createContext, useCallback, useState } from "react";

const AddEntryContext = createContext({});

const validationSchema = yup.object().shape({
  value: yup.number().required().label("value"),
  message: yup.string().required().label("message"),
});

const savedInitialValue = {
  savedEntries: [{id : 1, value : 200, message: "to"}],
};

export const AddEntryProvider = (props) => {
  const [state, setState] = useState(savedInitialValue.savedEntries);
  const handleFormSubmit = useCallback(( entries ) => {
    setState((currentState) => currentState.concat(entries));
  }, []);
console.log(state);
  return (
    <AddEntryContext.Provider
      {...props}
      value={{ state, handleFormSubmit, validationSchema, savedInitialValue }}
    ></AddEntryContext.Provider>
  );
};

export default AddEntryContext;