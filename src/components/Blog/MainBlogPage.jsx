import React from 'react'
import Header from '../Header'
import MainBlogHero from './MainBlogHero'
import BlogDetails from './BlogDetails'
import RelatedPost from './RelatedPost'

const MainBlogPage = () => {
  return (
    <div className='w-full'>
        <MainBlogHero/>
       <BlogDetails/>
       <RelatedPost/>
    </div>
  )
}

export default MainBlogPage