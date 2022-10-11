import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import HeadlineText from './components/HeadlineText';
import HeroImage from './components/HeroImage';
import Notify from './components/Notify';

const App = () => {
	return (
		<div className="app container">
			<Header />
			<HeadlineText />
			<Notify />
			<HeroImage />
			<Footer />
		</div>
	);
};

export default App;
