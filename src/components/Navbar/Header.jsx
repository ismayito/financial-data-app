import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import '../../pages/Pages.css';

const Header = ({ title }) => {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate('/');
  };

  return (
    <div>
      <header>
        <nav className="navBar">
          <section className="logo">
            <button type="submit" className="navigationButton" onClick={handleNavigation}>
              <BsChevronLeft onClick={handleNavigation} />
              <p className="link">Finance</p>
            </button>
          </section>
          <p className="title">{title}</p>
          <section className="navIcons">
            <MdKeyboardVoice />
            <IoIosSettings />
          </section>

        </nav>
      </header>
    </div>
  );
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
