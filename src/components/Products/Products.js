import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";
import productsData from "../../data/products";
import Product from "./Product/Product";

const Products = () => {
	const [products] = useState(productsData);
	return (
		<section>
			{products.map((product) => {
				return <Product key={product.id} {...product} />;
			})}
		</section>
	);
};

Products.propTypes = {
	productsData: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			basePrice: PropTypes.number.isRequired,
			sizes: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string.isRequired,
					additionalPrice: PropTypes.number,
				})
			).isRequired,
			colors: PropTypes.arrayOf(PropTypes.string).isRequired,
		})
	).isRequired,
};

export default Products;
