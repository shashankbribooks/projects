import { Button } from 'react-bootstrap';
import Link from 'next/link'
import { useAppState, useAppDispatch } from '../../context/AppProvider'

const LoggedinButton = (props) => {
	const dispatch = useAppDispatch()
	const { user } = useAppState()

	return (
		<div className="login-button">
			{user?.name}
		</div>
	)
}

export default LoggedinButton;
