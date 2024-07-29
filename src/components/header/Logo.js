import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'
import { useAppState, useAppDispatch } from '../../context/AppProvider'


const Logo = (props) => {
	const router = useRouter()
	// const { user } = useAppState()

	const [show, setShow] = useState(false);

	const _onClick = (e) => {
		if (props.isWorkspace && !user?.id) {
			e.preventDefault()
			e.nativeEvent.stopImmediatePropagation()
			setShow(true)
		}
	}

	return (
		<>
			<Link legacyBehavior 
				href={props.isWorkspace && !user?.id
					? '#'
					: '/'
				}
			>
				<a
					className="col-sm-4 col-6"
					onClick={_onClick}
				>
					<Navbar.Brand>
						<Image
							src="/assets/images/BriBooks-Logos/coloured-logo.svg"
							height={45}
							width={150}
							alt="BriBooks"
							className="logo"
							priority={true}
						/>
					</Navbar.Brand>
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
