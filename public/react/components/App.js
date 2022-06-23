import React, { useState, useEffect } from 'react';
import { ItemsList } from './ItemsList';
import { ItemForm } from './ItemForm';

// import and prepend the api url to any fetch calls
import apiURL from '../api';

export const App = () => {

	const [items, setitems] = useState([]);

	const [item, setitem] = useState({
		title: '',
		price: 0,
		category: '',
		description: '',
		image: ''
	  })

	  async function addItem(item){
		try {
			await fetch(`${apiURL}/items`,  {
			  	method: 'POST',
			 	headers: {
			   'Content-Type': 'application/json',
			   },
				body: JSON.stringify(item),
		   	});
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	async function fetchitems(){
		try {
			const response = await fetch(`${apiURL}/items`);
			const itemsData = await response.json();
			
			console.log(itemsData);
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
					
			<nav class="navbar navbar-expand-custom navbar-mainbg">
        <a class="navbar-brand navbar-logo" href="#">Luxorzon</a>
        <button class="navbar-toggler" type="button" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i class="fas fa-bars text-white"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
                <div class="hori-selector"><div class="left"></div><div class="right"></div></div>
                <li class="nav-item active">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-address-book"></i>Address Book</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="javascript:void(0);"><i class="far fa-clone"></i>Add Item</a>
                </li>

            </ul>
        </div>
    </nav>

				<ItemsList items={items} setitem={setitem} item={item} addItem={addItem}/>

				<ItemForm items={items} setitem={setitem} item={item} addItem={addItem}/>
			

			
		</main>
	);

}

