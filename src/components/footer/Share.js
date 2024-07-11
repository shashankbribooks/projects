import Image from 'next/image'
import Link from 'next/link'

const Share = (props) => {
	return (
		<ul className="list-inline list-unstyled">
			<li>Follow us on</li>
			<li>
				<Link legacyBehavior  href="https://www.youtube.com/channel/UCNWUSqYrXp1udztwj56XOPg" passHref>
					<a target="_blank" rel="noopener noreferrer">
						<Image
							src="/assets/images/Share/Youtube.png"
							height={25}
							width={25}
							alt="BriBooks Youtube"
							className="img-fluid"
						/>
					</a>
				</Link>
			</li>
			<li>
				<Link legacyBehavior  href="https://www.linkedin.com/company/bribooks/" passHref>
					<a target="_blank" rel="noopener noreferrer">
						<Image
							src="/assets/images/Share/Linkedin.png"
							height={25}
							width={25}
							alt="BriBooks Linkedin"
							className="img-fluid"
						/>
					</a>
				</Link>
			</li>
			<li>
				<Link legacyBehavior  href="https://www.facebook.com/bribooksglobal" passHref>
					<a target="_blank" rel="noopener noreferrer">
						<Image
							src="/assets/images/Share/Facebook.png"
							height={25}
							width={25}
							alt="BriBooks Facebook"
							className="img-fluid"
						/>
					</a>
				</Link>
			</li>
			<li>
				<Link legacyBehavior  href="https://twitter.com/BriBooks_global" passHref>
					<a target="_blank" rel="noopener noreferrer">
						<Image
							src="/assets/images/Share/Twitter.jpg"
							height={25}
							width={25}
							alt="BriBooks Twitter"
							className="img-fluid"
						/>
					</a>
				</Link>
			</li>
			<li>
				<Link legacyBehavior  href="https://www.instagram.com/bribooks_global/" passHref>
					<a target="_blank" rel="noopener noreferrer">
						<Image
							src="/assets/images/Share/Instagram.png"
							height={25}
							width={25}
							alt="BriBooks Facebook"
							className="img-fluid"
						/>
					</a>
				</Link>
			</li>
		</ul>
	)
}

export default Share;
