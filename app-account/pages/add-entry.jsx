import { Formik } from "formik";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { useCallback, useContext } from "react/cjs/react.development";
import AddEntryContext from "../components/context/Add-entryContext";
import Header from "../components/Header";
import Input from "../components/Input";

const Add = () => {
   const {
    state : { entries },
  } = useContext(AddEntryContext);




  const { handleFormSubmit } = useContext(AddEntryContext);
  const { validationSchema } = useContext(AddEntryContext);

const submit = () => {
  useCallback(Input => handleSubmit(Input),[submit])
}
  return (
    <div className="place-content-center m-auto relative w-5/6 ">
      <Header name="Add Entry" />
      <div>
        <Formik
          onSubmit={handleFormSubmit}
          initialValues={entries}
          validationSchema={validationSchema}
        >
          {({ handleSubmit, isValid, isSubmitting }) => (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="flex flex-col gap-4 p-4"
            >
              <FormField name="value" type="text" placeholder="Votre age">
                Age
              </FormField>
              <FormField name="prenom" type="text" placeholder="Votre prenom">
                Prenom
              </FormField>
              <FormField name="nom" type="text" placeholder="Votre nom">
                Nom
              </FormField>
              <FormField name="ville" type="text" placeholder="Votre ville">
                Ville
              </FormField>
              <FormField name="adresse" type="text" placeholder="Votre Adresse">
                Adresse
              </FormField>
              <Button type="submit" disabled={!isValid || isSubmitting}>
                Ajouter
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};
export default Add;