import React from 'react';

const Scroll = (props) => {
	return (
		<div style={{ overflowY: 'scroll', border:'1px solid black', height:'440px', margin: '0px 15px' }}>
			{ props.children }
		</div>
	);
};

export default Scroll;