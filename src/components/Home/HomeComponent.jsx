import React, { useEffect } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchFinance, financialItemDetail } from '../../Redux/FinancialSlice';
import '../../pages/Pages.css';

const HomeComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { financial } = useSelector((store) => store.financial);
  const displayData = financial.slice(0, 10);
  console.log(displayData);

  useEffect(() => {
    dispatch(fetchFinance());
  }, [
    dispatch,
  ]);

  const handleRoute = (id) => {
    dispatch(financialItemDetail(id));
    navigate('/details');
  };
  console.log(displayData.length);
  return (
    <>
      <div className="headSection">
        <section className="imageContainer">
          <img src="../assets/images/financeimage.webp" alt="fruityImage" className="fruityImage" />
        </section>
        <section className="introInfo">
          <h1 className="heading">
            Finance
            <b />
            <span>
              {displayData.length}
              {' '}
              companies
            </span>
          </h1>
        </section>
      </div>
      <section className="inputContainer">
        <input type="search" placeholder="search..." className="input" />
      </section>
      <div className="cardContainer">
        {
          displayData.map((data) => (
            <button key={data.symbol} className="button" type="button" onClick={() => handleRoute(data.symbol)}>
              <BsArrowRightCircle />
              <p className="exchange">{data.exchange}</p>
              <p className="price">
                price:
                {data.price}
              </p>

            </button>
          ))
        }
      </div>
    </>
  );
};

export default HomeComponent;
