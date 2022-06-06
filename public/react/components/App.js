import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setitems] = useState([]);

	async function fetchitems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			setitems(itemsData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	useEffect(() => {
		fetchitems();
	}, []);

	return (
		<main>	
      		<h1>Inventory List</h1>
			<h2>View All 🔥</h2>
			<ItemsList items={items}/>
			
			
		</main>
	);

}

