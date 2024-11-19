import React, { useContext, useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import img from "../../assets/premium_photo-1661351404790-dd90f03228eb.jpeg"
import image from "../../assets/506c2633e07c48c2f9bec072a0cec2eb.png"
import image2 from "../../assets/image 24.png"
import { Data } from "../../App"
import "./Home.css"
import Footer from "../../Components/Footer/Footer"

const Home = () => {



    const { posts, logos, cards, trends } = useContext(Data);
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProducts = selectedCategory === "All"
        ? posts
        : posts.filter(item => item.category === selectedCategory);

    return (
        <div className='home'>
            <Navbar />
            <section className='hero-section'>
                <div className='hero-content'>
                    <p>TRENDING COLLECTION</p>
                    <h1>Explore Summer Collection</h1>
                    <button>shop now</button>
                </div>
                <div>
                    <img className='hero-image' src={img} alt="" />
                </div>
            </section>

            <section className='image-section'>
                <img className='image-section-image' src={image} alt="" />
            </section>

            <section className='home-cards-section'>
                {
                    cards.map((item) => (
                        <div className='home-card' key={item.id}>
                            <div className='home-card-content'>
                                <h1>{item.heading}</h1>
                                <p>{item.description}</p>
                                <button>{item.button}</button>
                            </div>
                            <div>
                                <img src={item.image} alt="" />
                            </div>
                        </div>
                    ))
                }
            </section>

            <section className='arrival-section'>
                <h1>New Arrivals</h1>
                <p>Check out the most promising products bought by our buyers</p>
                <div className='arrival-buttons'>
                    <button onClick={() => setSelectedCategory("All")}>All</button>
                    <button onClick={() => setSelectedCategory("Men")}>Men</button>
                    <button onClick={() => setSelectedCategory("Women")}>Women</button>
                    <button onClick={() => setSelectedCategory("Children")}>Kids</button>
                </div>

                <div className='cards-container'>
                    {
                        filteredProducts.slice(0, 4).map((item) => (
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

            <section className='logos-section' >
                <div className='onemore'>
                    <div className='logo-content'>
                        <h1>Top Brands Deal</h1>
                        <p>Up To <span>60%</span> off on brands</p>
                    </div>

                    <div className='logos'>
                        {
                            logos.map((item) => (
                                <img src={item.logo}></img>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className='trends-section'>
                <div className='trend-content'>
                    <h1>Trending Collection</h1>
                    <p>Check out most promising product bought by our buyers</p>
                </div>
                <div className='trend-cards-section'>
                    {
                        trends.map((item) => (
                            <div className='trends-card' key={item.id}>
                                <img src={item.imageUrl}></img>
                                <h4>{item.name}</h4>
                                <p>{item.description}</p>
                                <h3 className='price'>${item.price}</h3>
                            </div>
                        ))
                    }
                </div>
            </section>
            <section className='review-container'>
                <div className='review-content1'>
                    <h1>Reviews</h1>
                    <p>This is what our customers have to say </p>
                </div>
                <div className='review-card'>
                    <div><img className='image2' src={image2} alt="" /></div>
                    <div className='review-content'>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum</p>
                        <h5>Sameer Jain</h5>
                    </div>

                </div>

            </section>
<Footer></Footer>
        </div>
    );
}

export default Home;
