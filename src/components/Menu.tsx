import React, { useState } from 'react';
import Hamburger from "hamburger-react";
import Arrow from "./Arrow";
import { Link } from "react-router-dom";
import styled from "styled-components"

const UlStyled = styled.ul`
	list-style: none;
`;

const Menu = ({ items }: any) => {
	const [humburgerIsOpen, setHumburgerIsOpen] = useState(false);

	if (!items || !items.length) {
		return (
			<div>
				Loading...
			</div>
		);
	}

	console.log(items[0].name);
	console.info(items[0].name);

	return (
		<>
			<Hamburger toggled={humburgerIsOpen} toggle={setHumburgerIsOpen} />
			<Arrow />
			{items[0].name}
		</>
	);
}

export default Menu;
