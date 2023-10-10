import React, { useEffect } from 'react';
import '../../pages/Pages.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchFinance } from '../../Redux/FinancialSlice';

const HomeComponent = () => {
  const dispatch = useDispatch();
  const { financial } = useSelector((store) => store.financial);
  console.log(financial);

  useEffect(() => {
    if (!financial.length) {
      dispatch(fetchFinance());
    }
  }, [
    dispatch,
  ]);
  console.log(financial.length);
  return (
    <>
      <div className="headSection">
        <section className="imageContainer">
          <img src="../assets/images/financeimage.webp" alt="fruityImage" className="fruityImage" />
        </section>
        <section className="introInfo">
          <p> this is Financial data app</p>
        </section>
      </div>
      <section className="inputContainer">
        <input type="search" placeholder="search..." className="input" />
      </section>
      <div className="cardContainer">
        <button className="button" type="button">Content goes here</button>
        <button className="button" type="button">Content goes here</button>
      </div>
    </>
  );
};

export default HomeComponent;
