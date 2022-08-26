import React, { useState } from "react";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

interface IconProps {
	icon: any;
	onClick: () => void;
	open: boolean;
}

const Icon = styled(FontAwesomeIcon)`
	transform: ${(props: IconProps) =>
		props.open ? "rotate(180deg)" : "rotate(0deg)"};
	transition: transform 0.3s ease-in-out;
`;

const Arrow = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<Icon icon={faCaretUp} onClick={() => setIsOpen(!isOpen)} open={isOpen} />
	);
};

export default Arrow;
