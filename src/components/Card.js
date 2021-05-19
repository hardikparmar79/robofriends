import React from 'react';
import '../index.css';

const Card = ({ id, name, email}) => {
	return(
		<div className="card tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5">
			<img className="cardImg" alt='robots' src={`https://robohash.org/${id}`}/>
			<div>
				<h1>{ name }</h1>
				<p>{ email }</p>
			</div>
		</div>
	);
}

export default Card;
