import Image from 'next/image'
import { Container, Row, Col } from 'react-bootstrap'

import Share from './Share'

const CopyRight = (props) => {
	return (
		<div className="copyright">
			<Container>
				<Row>
					<Col sm={4}>
						&copy; {new Date().getFullYear()} - Youbooks Edtech Pte. Ltd. All rights reserved
					</Col>
					<Col sm={8} className="text-end">
						<Share />
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default CopyRight;
