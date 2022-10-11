import React from 'react';
import pingLogo from '../assets/logo.svg';

const Header = () => {
	return (
		<header className="header">
			<div className="header-row row">
				<div className="app-brand-image-container">
					<img src={pingLogo} alt="Ping logo" className="app-brand-image" />
				</div>
			</div>
		</header>
	);
};

export default Header;
