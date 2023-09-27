import React from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Notice = () => {
  const { id } = useParams();
  console.log(id);
  const machId = parseInt(id);
  const data = useLoaderData();
  console.log(data);
  const cards = data.data;
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
                height: "50px",
                backgroundColor: "black",
                opacity:"50%"
              }}
              
            >
              <button className="bg-red-600 text-white opacity-100">Donate:{selectedId?.price}</button>
            </div>
          </div>
        </figure>
        <div className="card-body lg:mx-24">
          <h2
            className="card-title "
           
          >
            {selectedId?.title}
          </h2>
          <p className="card-title" style={{ color: selectedId?.text }}>
            {selectedId?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notice;
