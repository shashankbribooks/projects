import Image from 'next/image'
import Link from 'next/link'

import { Stack } from 'react-bootstrap'

const Menu = (props) => {
	return (
		<Stack gap={3} className="footer-menu">
			<h6 className="heading">{props.heading}</h6>
			{(props.menus || []).map((menu) => (
				<Link legacyBehavior  href={menu.href} key={menu.name}>
					<a>{menu.name}</a>
				</Link>
			))}
		</Stack>
	)
}

export default Menu;
