import { useContext } from "react";
import AddEntryContext from "./context/Add-entryContext";

const Operations = () => {
  const {state} = useContext(AddEntryContext); 
  console.log(state)
 

    return (
        <div className="">
          <table className="border-collapse w-full  border border-gray-500 ">
            <thead>
              <tr>
                <th className="border border-gray-600 ">age</th>
                <th className="border border-gray-600 ">prenom</th>
                <th className="border border-gray-600 ">nom</th>
                <th className="border border-gray-600 ">ville</th>
                <th className="border border-gray-600 ">adresse</th>

              </tr>
            </thead>
            <tbody>
               {Object.entries(state).map(([id,{value,prenom,nom,ville,adresse}]) =>
                  <tr key={id} className="text-right">
                   <td>
                     {value}
                   </td>
                   <td>
                     {prenom}
                   </td>
                   <td>
                     {nom}
                   </td>
                   <td>
                     {ville}
                   </td>
                   <td>
                     {adresse}
                   </td>
                  </tr>
                )}

               
            </tbody>
          </table>
        </div>
      );
    };
export default Operations;  