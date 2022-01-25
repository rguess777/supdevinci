import { Formik } from "formik";
import Button from "../components/Button";
import FormField from "../components/FormField";
import { useContext } from "react/cjs/react.development";
import AddEntryContext from "../components/context/Add-entryContext";
import Header from "../components/Header";

const Add = () => {
  const {
    state: { entries },
  } = useContext(AddEntryContext);

  const { handleFormSubmit } = useContext(AddEntryContext);
  const { validationSchema } = useContext(AddEntryContext);

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
              <FormField name="value" type="text" placeholder="Votre montant">
                Montant
              </FormField>
              <FormField name="message" type="text" placeholder="Votre message">
                Message
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