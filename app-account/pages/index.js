import Operations from "../components/Operations";
import Header from "../components/Header";



export default function Home() {
  return (
   <div>
   <div>
     <Header/>
   </div> 
    <div className="place-content-center m-auto relative w-5/6 ">
      <div className="pt-4">
        <Operations/>
      </div>
    </div>
    </div>
  );
}