import React from 'react';
import dashboard from '../assets/illustration-dashboard.png';

const HeroImage = () => {
	return (
		<div className="hero-image-container container">
			<div className="hero-image">
				<img src={dashboard} alt="dashboard" />
			</div>
		</div>
	);
};

export default HeroImage;
