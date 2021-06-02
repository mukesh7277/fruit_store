import React from 'react'
import Hero from './home/Hero'
import Category from './home/Category'
import Featured from './home/Featured'
import Banner from './home/Banner'
import LatestProducts from './home/LatestProducts'
import Blog from './home/Blog'


function Home() {
    return (
        <div>
           <Hero/>
           <Category/>
           <Featured/>
           <Banner/>
           <LatestProducts/>
           <Blog/>  
        </div>
    )
}

export default Home
