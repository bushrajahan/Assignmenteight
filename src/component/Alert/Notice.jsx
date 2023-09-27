import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Notice = () => {
  const [one,setOne] = useState([]);
  useEffect(()=>{
    fetch('../../../public/data.json')
    .then(res => res.json())
    .then(data =>setOne(data))
  },[])

  const { id } = useParams();
  console.log(id);
  const machId = parseInt(id);
  // const data = useLoaderData();
  // console.log(data);
  const cards = one.data;
  const selectedId = cards?.find((card) => card.id === machId);
  console.log(selectedId);
  // const {picture,catagory,card_bg,description,price,text,text_button_bg,title} = selectedId;
  return (
    <div>
      <div className={`card shadow-xl `}>
        <figure className="lg:mx-32 mt-20 ">
          <div className="w-full " style={{  position: "relative" }}>
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
                
              
              }} className="bg-gray-900 bg-opacity-50
              "
              
            >
                <button style={{background:selectedId?.text}}  className="text-white p-2 m-4 opacity-100 absolute bottom-0" >
                Donate:{selectedId?.price}
             </button>
            </div>
 
           </div>
         
        </figure>
        <div className="card-body lg:mx-24">
          <h2
            className="card-title "
           
          >
            {selectedId?.title}
          </h2>
          <p className="card-title" >
            {selectedId?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
