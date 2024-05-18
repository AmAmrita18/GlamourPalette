import React, { useEffect, useState } from 'react'
import { estates } from "../About/estates";
import { useParams } from 'react-router-dom';
import Header from '../Header'
import Details from './Details'

import SimilarListings from './SimilarListings'
import Heading from './Heading'
// import SimilarListingSlider from './SimilarListingSlider'

const Properties = () => {
  const { id } = useParams()
  const [loading, setLoading] = useState(true);
  const [estate, setEstate] = useState(null);

  useEffect(() => {
      const prop = estates.filter((est) => est.id === id)
      setEstate(prop[0]);
      setTimeout(()=> {
          setLoading(false);
      }, 500)
  }, [id])
  return (
    <>
    {
      loading && !estate ? (
        <h2>loading....{id}</h2>
    ) : (
      <div>
      
      <Heading/>
      <Details estate={estate}/>
      <SimilarListings />
      
    </div>
    )
    }</>
   
  )
}

export default Properties