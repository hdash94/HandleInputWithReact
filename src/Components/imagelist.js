import './imagelist.css';
import ImageCard from './ImageCard';
import React from 'react';

const imagelist = props => {
	const images = props.images.map((image) => {
		//attach the key to root component
		return <ImageCard key={image.id} image={image} />;
	});
	return (
		<div className = "image-list">{images}</div>
	);
};
export default imagelist;