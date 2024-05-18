import React from 'react'
import HeroHome from './HeroHome'
import Architect from './Mua'
import Results from './Results'
import Region from './Region'
import MahikazInfo from './Info'

const Home = () => {
  return (
    <div className=''>
        <HeroHome/>
        <Architect/>
        <Results/>
        <Region/>
        <MahikazInfo/>
    </div>
  )
}

export default Home