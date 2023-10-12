import React, { useEffect, useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { fetchFinance, financialItemDetail } from '../../Redux/FinancialSlice';
import '../../pages/Pages.css';

const HomeComponent = () => {
  const [searchInput, setSearchInput] = useState('');
  const [returnedSearchData, setReturnedSearchData] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { financial } = useSelector((store) => store.financial);
  const displayData = financial?.slice(0, 10);

  useEffect(() => {
    dispatch(fetchFinance());
  }, [
    dispatch,
  ]);

  // callback to handle navigation to details page on clicking a single card item
  const handleRoute = (id) => {
    dispatch(financialItemDetail(id));
    navigate('/details');
  };

  // callback to handle search input functionality to details page on clicking a single card item
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
    if (searchInput === '') { return; }
    const searchedData = displayData.filter((item) => {
      if (item.exchange.toLowerCase().includes(searchInput.toLowerCase())) {
        return true;
      }
      return false;
    });
    setReturnedSearchData(searchedData);
  };

  return (
    <>
      <div className="headSection">
        <section className="imageContainer">
          <img src="../assets/images/financeimage.webp" alt="fruityImage" className="fruityImage" />
        </section>
        <section className="introInfo">
          <h1 className="heading">
            Finance
            <br />
            <span>
              {displayData.length}
              {' '}
              companies
            </span>
          </h1>
        </section>
      </div>
      <section className="inputContainer">
        <input
          type="search"
          placeholder="search..."
          className="input"
          onChange={handleSearchInput}
        />
      </section>
      <p className="priceTitle">Price By Stock Company</p>
      <div className="cardContainer">
        {
            searchInput === '' ? (displayData.map((data) => (
              <button key={data.symbol} className="button" type="button" onClick={() => handleRoute(data.symbol)}>
                <BsArrowRightCircle className="circle" />
                <p className="exchange">{data.exchange}</p>
                <p className="price">
                  price:
                  {data.price}
                </p>
              </button>
            ))) : (
              returnedSearchData.map((data) => (
                <button key={data.symbol} className="button" type="button" onClick={() => handleRoute(data.symbol)}>
                  <BsArrowRightCircle />
                  <p className="exchange">{data.exchange}</p>
                  <p className="price">
                    price:
                    {data.price}
                  </p>
                </button>
              ))
            )
        }
      </div>
    </>
  );
};

export default HomeComponent;
