import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import UseGetCard from "../../component/hook/UseGetcard";
// import useGetCard from "../../../component/hook/useGetCard";
// import UseGetCard from "../../component/hook/useGetCard";

const Hello = () => {
  const [selectedId,setSelectedId] = useState({});
  // const [datas,setData] = useState([])
  const datas =useLoaderData()


  const { id } = useParams();
  const machId = parseInt(id);
//   useEffect(()=>{
//     fetch('data.json')
//     .then(res =>res.json())
//     .then(data =>setData(data) )
//   },[])
//  console.log(datas)
  useEffect(()=>{
  const findedData =datas?.data?.find(data => data?.id === machId)
  setSelectedId(findedData)}
  
  ,[machId,datas])
  
  // Check if `data` is an object with a `data` property or an array


  const notify = () => toast("Thank you for your kindness!");

  return (
    <div>
      <div className={`card shadow-xl `}>
        <figure className="lg:mx-32 mt-20 ">
          <div className="w-full " style={{ position: "relative" }}>
            <img className="w-full " 
              src={selectedId?.picture}
              alt="your-image-description"
            />
           
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "100px",
              }}
              className="bg-gray-900 bg-opacity-50"
            >
              <button onClick={notify} style={{ background: selectedId?.text }} className="text-white p-2 m-4 opacity-100 absolute bottom-0">
                Donate: {selectedId?.price}
              </button>
              <ToastContainer />
            </div>
          </div>
        </figure>
        <div className="card-body lg:mx-24">
          <h2 className="card-title">
            {selectedId?.title}
          </h2>
          <p className="card-title">
            {selectedId?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hello;
