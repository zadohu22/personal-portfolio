import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Nav from './components/Nav';
import Hero from './components/Hero';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Nav />
		<Hero />
	</>
);
