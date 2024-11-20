import React, { useState, useContext } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from "../../Components/Footer/Footer";
import { Data } from "../../App";
import "./Men.css";

const Mens = () => {
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

  let filteredMensPosts = posts.filter((item) => item.category === 'Men');

  if (topFilter) {
    filteredMensPosts = filteredMensPosts.filter((item) => item.subcategory === "men-top");
  }
  if (bottomFilter) {
    filteredMensPosts = filteredMensPosts.filter((item) => item.subcategory === "men-bottom");
  }
  if (shoesFilter) {
    filteredMensPosts = filteredMensPosts.filter((item) => item.subcategory === "men-shoes");
  }

  if (priceLowHigh) {
    filteredMensPosts.sort((a, b) => a.price - b.price);
  } else if (priceHighLow) {
    filteredMensPosts.sort((a, b) => b.price - a.price);
  }

  return (
    <div>
      <Navbar />
      <section className="arrival-sectionn">
        <h1>New Arrivals</h1>
        <p>Check out the most promising products bought by our buyers</p>

        <div className='check-boxes'>
 <div className='filter-boxes'>
          <p>
            Mens top
            <input type="checkbox" checked={topFilter} onChange={handleTopChange} />
          </p>
          <p>
            Mens bottom
            <input type="checkbox" checked={bottomFilter} onChange={handleBottomChange} />
          </p>
          <p>
            Mens shoes
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
          {filteredMensPosts.length > 0 ? (
            filteredMensPosts.map((item) => (
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
    </div>
  );
};

export default Mens;
