import Image from 'next/image'

const Logo = (props) => {
	return (
		<Image
			src="/assets/images/BriBooks-Logos/white-R-logo.svg"
			height={45}
			width={150}
			alt="BriBooks"
			className="logo"
		/>
	)
}

export default Logo;
