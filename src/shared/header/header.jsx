import React, { useState } from 'react';
import './header.scss';
import { Link } from 'react-router-dom';
import './header.scss';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	Nav,
	NavItem,
	NavbarText,
	Dropdown,
	DropdownToggle,
	DropdownMenu,
	DropdownItem,
} from 'reactstrap';

import CartIcon from '../../components/cartIcon/cartIcon';

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [dropdownProfileOpen, setDropdownProfileOpen] = useState(false);
	const toggleProfileDropdown = () =>
		setDropdownProfileOpen((prevState) => !prevState);
	const toggle = () => setIsOpen(!isOpen);
	return (
		<header>
			<div className='container'>
				<Navbar className='navbar' light expand='md'>
					<Link className='nav-brand' to='/home'>Store</Link>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='mr-auto' navbar>
							<NavItem className='nav-item'>
								<Link className='nav-link' to='/home'>
									products
								</Link>
							</NavItem>
							<NavItem className='nav-item'>
								<Link className='nav-link' to='/cart'>
									cart
								</Link>
							</NavItem>
						</Nav>
						<NavbarText className='pb-0'>
							<CartIcon />
						</NavbarText>
						<Dropdown
							isOpen={dropdownProfileOpen}
							toggle={toggleProfileDropdown}>
							<DropdownToggle tag='div' className='nav-link'>

									<img
										src='/images/10.jpg'
										className='card-img'
										alt=''
									/>
							</DropdownToggle>
							<DropdownMenu>
								<DropdownItem className='d-flex align-items-center dropdown-item'>
									<i className='fa fa-pencil'></i>
									<h6 className='mb-0'>View / Edit Profile</h6>
								</DropdownItem>
								<DropdownItem className='d-flex align-items-center dropdown-item'>
									<i className='fa fa-circle-o-notch'></i>
									<h6 className='mb-0'>sign out</h6>
								</DropdownItem>
							</DropdownMenu>
						</Dropdown>
					</Collapse>
				</Navbar>
			</div>
		</header>
	);
};

export default Header;
