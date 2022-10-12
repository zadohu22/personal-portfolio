import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Hero2 from './components/Hero2';
import Projects from './components/Projects';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		{/* <Nav /> */}
		<Hero />
		<Projects />

		{/* <Hero2 /> */}
	</>
);
