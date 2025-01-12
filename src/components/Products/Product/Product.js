import styles from "./Product.module.scss";
import { useState } from "react";
import React from "react";
import ProductImage from "./ProductImage";
import ProductForm from "./ProductForm/ProductForm";

const Product = (props) => {
	const [currentColor, setCurrentColor] = useState(props.colors[0]);
	const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

	const handleColorChange = (color) => {
		setCurrentColor(color);
	};

	const handleSizeChange = (size) => {
		setCurrentSize(size);
	};

	const handleButtonClick = () => {
		console.log("Summary:");
		console.log("Color:", currentColor);
		console.log("Size:", currentSize);
		console.log("Price:", newPrice);
	};

	let newPrice;

	const getPrice = () => {
		const selectedSize = props.sizes.find((size) => size.name === currentSize);
		newPrice = props.basePrice + selectedSize.additionalPrice;
		return newPrice;
	};

	return (
		<article className={styles.product}>
			<ProductImage
				name={props.name}
				currentColor={currentColor}
				title={props.title}
			/>
			<div>
				<header>
					<h2 className={styles.name}>{props.title}</h2>
					<span className={styles.price}>Price: {getPrice()}$</span>
				</header>
				<ProductForm
					sizes={props.sizes}
					colors={props.colors}
					currentSize={currentSize}
					currentColor={currentColor}
					handleSizeChange={handleSizeChange}
					handleColorChange={handleColorChange}
					handleButtonClick={handleButtonClick}
				/>
			</div>
		</article>
	);
};

export default Product;
