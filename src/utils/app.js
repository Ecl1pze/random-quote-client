import { quotes } from '../data/quotes.data.js';
import { dataHandler } from './dataHandler.js';

const btnQuote = document.getElementById('btn');
const quoteBox = document.querySelector('.quote-box');

btnQuote.addEventListener('click', () => {
	console.log('1');
	dataHandler(quotes[Math.floor(Math.random() * quotes.length)], quoteBox);
});
