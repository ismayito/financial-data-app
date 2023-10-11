import React from 'react';
import { BsChevronLeft } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';
import '../../pages/Pages.css';

const Header = () => (
  <div>
    <header>
      <nav className="navBar">
        <section className="logo">
          <BsChevronLeft />
          <p className="link">Finance</p>
        </section>
        <section className="navIcons">
          <MdKeyboardVoice />
          <IoIosSettings />
        </section>

      </nav>
    </header>
  </div>
);

export default Header;
