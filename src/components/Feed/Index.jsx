import './Stylle.scss';
import React from 'react';
import { FeedModal } from "../subComponents/FeedModal/Index";
import { FeedPhotos } from "../subComponents/FeedPhotos/Index";

export function Feed(){
  const [modalPhoto, setModalPhoto] = React.useState(null)

  return(

    <div className='Feed Container'>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      
      <FeedPhotos setModalPhoto={setModalPhoto}/>
    </div>

  )

}