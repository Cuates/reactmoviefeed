import React from 'react';
import { Link } from 'react-router-dom';

function NavigationMenu(props) {
  return (
    <div>
      <div className="text-black font-bold py-3 flex justify-between items-center font-bold">
        Movie Feeds Menu
      </div>
      <ul>
        <li>
          <Link
            to="/moviefeed"
            className="text-indigo-900 py-3 border-t border-yellow-100 border-b block"
            onClick={props.closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/moviefeed/movieextract"
            className="text-indigo-900 py-3 border-b border-yellow-100 block"
            onClick={props.closeMenu}
          >
            Movie Extract
          </Link>
        </li>
        <li>
          <Link
            to="/moviefeed/movieadd"
            className="text-indigo-900 py-3 border-b border-yellow-100 block"
            onClick={props.closeMenu}
          >
            Movie Add
          </Link>
        </li>
        <li>
          <Link
            to="/moviefeed/about"
            className="text-indigo-900 py-3 border-b border-yellow-100 block"
            onClick={props.closeMenu}
          >
            About
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavigationMenu;