import React, { useState, useContext } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import { Data } from "../../App";

const Women = () => {
  const { posts } = useContext(Data);

  const [topFilter, setTopFilter] = useState(false);
  const [bottomFilter, setBottomFilter] = useState(false);
  const [shoesFilter, setShoesFilter] = useState(false);
  const [priceLowHigh, setPriceLowHigh] = useState(false);
  const [priceHighLow, setPriceHighLow] = useState(false);

  const handleTopChange = () => {
    setTopFilter(!topFilter);
    setBottomFilter(false);
    setShoesFilter(false);
  };

  const handleBottomChange = () => {
    setBottomFilter(!bottomFilter);
    setTopFilter(false);
    setShoesFilter(false);
  };

  const handleShoesChange = () => {
    setShoesFilter(!shoesFilter);
    setTopFilter(false);
    setBottomFilter(false);
  };

  const handlePriceLowHigh = () => {
    setPriceLowHigh(!priceLowHigh);
    setPriceHighLow(false);
  };

  const handlePriceHighLow = () => {
    setPriceLowHigh(false);
    setPriceHighLow(!priceHighLow);
  };

  let filteredWomenPosts = posts.filter((item) => item.category === 'Women');

  if (topFilter) {
    filteredWomenPosts = filteredWomenPosts.filter((item) => item.subcategory === "women-top");
  }
  if (bottomFilter) {
    filteredWomenPosts = filteredWomenPosts.filter((item) => item.subcategory === "women-bottom");
  }
  if (shoesFilter) {
    filteredWomenPosts = filteredWomenPosts.filter((item) => item.subcategory === "women-shoes");
  }

  if (priceLowHigh) {
    filteredWomenPosts.sort((a, b) => a.price - b.price);
  } else if (priceHighLow) {
    filteredWomenPosts.sort((a, b) => b.price - a.price);
  }

  return (
    <>
      <Navbar />
      <section className="arrival-sectionn">
        <h1>New Arrivals</h1>
        <p>Check out the most promising products bought by our buyers</p>
        <div className='check-boxes'>
 <div className='filter-boxes'>
          <p>
            Womens top
            <input type="checkbox" checked={topFilter} onChange={handleTopChange} />
          </p>
          <p>
            Womens bottom
            <input type="checkbox" checked={bottomFilter} onChange={handleBottomChange} />
          </p>
          <p>
            Womens shoes
            <input type="checkbox" checked={shoesFilter} onChange={handleShoesChange} />
          </p>
          </div>
          <div className='price-boxes'>
          <p>
            Price Low-High
            <input type="checkbox" checked={priceLowHigh} onChange={handlePriceLowHigh} />
          </p>
          <p>
            Price High-Low
            <input type="checkbox" checked={priceHighLow} onChange={handlePriceHighLow} />
          </p>
   
          </div>
 </div>

        <div className="cards-container">
          {filteredWomenPosts.length > 0 ? (
            filteredWomenPosts.map((item) => (
              <div className="products-card" key={item.id}>
                <img src={item.imageUrl} alt={item.name} />
                <p>{item.category}</p>
                <h3>{item.description}</h3>
                <h2>₹ {item.price}</h2>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Women;
