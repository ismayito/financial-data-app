import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import '../../pages/Pages.css';
import './Detail.css';

const Detail = () => {
  const { financialItemDetailsArray } = useSelector((store) => store.financial);

  return (
    <div>
      <div className="headSection">
        <section className="imageContainer">
          <img src="../assets/images/detail.jpg" alt="financeImage" className="fruityImage" />
        </section>
        {
           financialItemDetailsArray.map((item) => (
             <section className="introInfo" key={item.symbol}>
               <h1 className="heading">
                 {item.exchange}
               </h1>
             </section>
           ))
        }
      </div>
      { financialItemDetailsArray.map((item) => (
        <section className="detailHeader" key={item.symbol}>
          <p className="detailHead">{item.name}</p>
        </section>
      ))}
      {financialItemDetailsArray.map((item) => (
        <div className="detailCardContainer" key={item.symbol}>
          <div className="detailCard">
            <p>Exchange Short Name</p>
            <div className="cardInfo">
              <p>{item.exchangeShortName}</p>
              <BsArrowRightCircle />
            </div>
          </div>
          <div className="detailCard">
            <p>Symbol</p>
            <div className="cardInfo">
              <p>{item.symbol}</p>
              <BsArrowRightCircle />
            </div>
          </div>
          <div className="detailCard">
            <p>type</p>
            <div className="cardInfo">
              <p>{item.type}</p>
              <BsArrowRightCircle />
            </div>
          </div>
          <div className="detailCard">
            <p>Price</p>
            <div className="cardInfo">
              <p>{item.price}</p>
              <BsArrowRightCircle />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detail;
