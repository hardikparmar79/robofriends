import React from 'react';
import '../index.css';

const Searchbox = ({ SearchChange }) => {
	return (
		<div>
			<input
					type="search"
					placeholder="search robots"
					className="bg-lightest-blue br2 bw0 pa2 b--green" 
					onChange={ SearchChange }
			/>
		</div>
	);
}

export default Searchbox;