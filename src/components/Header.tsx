import React, { useContext, useState } from 'react';
import Menu from './Menu';
import { AppContext } from '../contexts/AppContext';

const Header = () => {
	const data: any = Array.from(useContext(AppContext));

	return (
	  <Menu items={data} />
	);
}

export default Header;
