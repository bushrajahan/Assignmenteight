import React, { useState } from 'react';
import Card from '../../component/Cards/Card';
import Item from '../../component/items/Item';


const Donation = () => {
  const [click,setClick] = useState(false)

  const seletedItem = JSON?.parse(localStorage.getItem('favorites'));
  
  // console.log(seletedItem)
  return (
    <div>
       <div className='grid gap-4 lg:mx-16 lg:my-12 md:grid-cols-2 '>
       {
         click? seletedItem?.map(item =>
          <Item key={item.id} card={item}></Item>
        ): seletedItem?.slice(0,4).map(item =>
          <Item key={item.id} card={item}></Item>
        )
       }
       </div>
      <div className='flex justify-center items-center '>
        {!click &&
      seletedItem?.length>4?
      <button className='bg-green-700 p-2 text-white '
       
      onClick={()=>setClick(true)} >See All</button>
    :""    
    }


      </div>

    </div>
  );
};

export default Donation;