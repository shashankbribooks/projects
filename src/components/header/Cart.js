import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Navbar, Badge } from 'react-bootstrap'
import { useAppState, useAppDispatch } from '../../context/AppProvider'

const Logo = (props) => {
	const router = useRouter()
	// const { userCart } = useAppState()

	// const cartItems = (userCart?.items ?? []).length

	return (
		<>
			<Link legacyBehavior 
				href="https://www.bribooks.com/cart"
			>
				<a className="relative ms-2" >
					<Image
						src="/assets/images/Cart/cart.svg"
						height={40}
						width={40}
						alt="BriBooks Cart"
						priority={true}
					/>
					<Badge
						bg="danger"
						pill={true}
						className="absolute"
						style={{
							right: -5,
							top: -5,
							transform: 'scale(0.8)',
						}}
					>
						{/* {cartItems} */}
					</Badge>
				</a>
			</Link>
		</>
	)
}

Logo.propTypes = {
	isWorkspace					: PropTypes.bool,
};

Logo.defaultProps = {
	isWorkspace					: false
};

export default Logo;
