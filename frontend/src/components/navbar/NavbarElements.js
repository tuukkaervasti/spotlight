import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
background: #white;
height: 150px;
display: flex;
justify-content: left;

// border-bottom: 1px solid black;
font-family: Aktiv Grotesk;




width: 100%;
top: 0;
left: 0;
padding-left: 2.9em;


/* Third Nav */
/* justify-content: flex-start; */
`;

export const NavLink = styled(Link)`
color: black;
display: flex;
align-items: center;
text-decoration: none;
padding-right: 3rem;
height: 100%;
cursor: pointer;
&.active {
	color: #000000;
	text-decoration: underline;
	text-underline-offset: 0.5rem;
	font-weight: bold;
}
`;

export const Bars = styled(FaBars)`
display: none;
color: #808080;
@media screen and (max-width: 768px) {
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 75%);
	font-size: 1.8rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.div`
display: flex;
align-items: center;
margin-right: -24px;
/* Second Nav */
/* margin-right: 24px; */
/* Third Nav */
/* width: 100vw;
white-space: nowrap; */
@media screen and (max-width: 768px) {
	display: none;
}
`;

