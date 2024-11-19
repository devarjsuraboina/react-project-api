import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from "../../Components/Footer/Footer"
import { Data } from "../../App"
import { useContext } from 'react'

const Women = () => {

  const { posts} = useContext(Data);
  const womenmensPosts = posts.filter(item => item.category === 'Women');
  return (
    <>
     <Navbar></Navbar>
     <section className='arrival-sectionn'>
                <h1>New Arrivals</h1>
                <p>Check out the most promising products bought by our buyers</p>
                <div className='cards-container'>
                    {
                        womenmensPosts.map((item) => (
                            <div className='products-card' key={item.id}>
                                <img src={item.imageUrl} alt={item.name} />
                                <p>{item.category}</p>
                                <h3>{item.description}</h3>
                                <h2>₹ {item.price}</h2>
                            </div>
                        ))
                    }
                </div>
            </section>
     <Footer></Footer>
   
    </>
  )
}

export default Women
