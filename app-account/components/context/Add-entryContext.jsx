import * as yup from "yup";
import { createContext, useCallback, useState } from "react";

const AddEntryContext = createContext({});

const initialState = 
  [
    { value: 10, prenom: "mathieu",nom:"junior",ville:"courbevoie",adresse:"1 rue de la saint valentin" },
  ];


const validationSchema = yup.object().shape({
  value: yup.number().label("value"),
  prenom: yup.string().label("prenom"),
  nom: yup.string().label("nom"),
  ville: yup.string().label("ville"),
  adresse: yup.string().label("adresse"),

});



export const AddEntryProvider = (props) => {
  const [state, setState] = useState(initialState);
  const handleFormSubmit = useCallback(( entries ) => {
    setState((currentState) => currentState.concat(entries));
  }, []);
  return (
    <AddEntryContext.Provider
      {...props}
      value={{ state, handleFormSubmit, validationSchema }}
    ></AddEntryContext.Provider>
  );
};

export default AddEntryContext;