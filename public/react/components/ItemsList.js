import React from 'react';
import { Item } from './Item';
import { ItemForm } from './ItemForm';
import { UpdateForm } from './UpdateForm';

export const ItemsList = ({items, setitem, item, addItem}) => {
	return <div className='allItems'>
		{
			items.map((item_, idx) => {
				return <Item item={item_} key={idx} setitem={setitem} setUpdatedItem={item}/>
			})
		}

	</div>
} 