import { useContext } from "react";
import AddEntryContext from "./context/Add-entryContext";

const Operations = () => {
  const {state} = useContext(AddEntryContext); 
  const data = state;
  console.log(data);

     
  
    //  const countOut = data.filter((value)=>value<0).reduce((ac, {value} ) => {
    //     ac + value;
    //  }, 0);

     const countOut = data.filter((x) => x.value < 0).reduce(
                      (ac, { value }) => ac + parseInt(value),
                      0);
  
     const countIn = data.filter((x) => x.value > 0).reduce(
      (ac, { value }) => ac + parseInt(value),
      0);

     const result = countIn + countOut;

    return (
        <div className="">
          <table className="border-collapse w-full  border border-gray-500 ">
            <thead>
              <tr>
                <th className="border border-gray-600 ">out</th>
                <th className="border border-gray-600 ">in</th>
              </tr>
            </thead>
            <tbody>
               {Object.entries(data).map(([id,{value,message}]) =>
                value > 0 ? (
                  <tr key={id} className="text-right">
                    <td className="border border-gray-400 "></td>
                    <td className="border border-gray-400 text-green-600">
                      {value}
                      <br />
                      <span>{message}</span>
                    </td>
                  </tr>
                ) : (
                  <tr key={id} className="text-red-600 text-right">
                    <td className="border border-gray-400  ">
                      {value}
                      <br />
                      <span>{message}</span>
                    </td>
                    <td className="border  border-gray-400 "></td>
                  </tr>
                )
              )}
     
               <tr className="text-red-600 text-right">
                 <td className="border border-gray-400 ">Total : {countOut}</td>
                <td className="border border-gray-400 ">Total : {countIn}</td> 
               </tr> 
               <tr className="text-green-600  ">
                <div>
                  <span> Result : </span>
                  {result}
                </div> 
              </tr>  
            </tbody>
          </table>
        </div>
      );
    };
export default Operations;  