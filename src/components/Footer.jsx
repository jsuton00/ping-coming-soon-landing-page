import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="social-media-row row">
					<div className="social-media-icons">
						<span>
							<FaFacebook />
						</span>
					</div>
					<div className="social-media-icons">
						<span>
							<FaTwitter />
						</span>
					</div>
					<div className="social-media-icons">
						<span>
							<FaInstagram />
						</span>
					</div>
				</div>
				<div className="copyright-row row">
					&copy; Copyright Ping. All rights reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
