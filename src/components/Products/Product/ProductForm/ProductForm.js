import styles from "../Product.module.scss";
import React from "react";
import Button from "../../../Button/Button";
import OptionSize from "./OptionSize";
import OptionColor from "./OptionColor";
import PropTypes from "prop-types";
const ProductForm = (props) => {
	return (
		<form>
			<OptionSize
				sizes={props.sizes}
				currentSize={props.currentSize}
				handleSizeChange={props.handleSizeChange}
			/>
			<OptionColor
				colors={props.colors}
				currentColor={props.currentColor}
				handleColorChange={props.handleColorChange}
			/>
			<Button className={styles.button} onClick={props.handleButtonClick}>
				<span className="fa fa-shopping-cart" />
			</Button>
		</form>
	);
};

ProductForm.propTypes = {
	sizes: PropTypes.array.isRequired,
	currentSize: PropTypes.string.isRequired,
	handleSizeChange: PropTypes.func.isRequired,
	colors: PropTypes.array.isRequired,
	currentColor: PropTypes.string.isRequired,
	handleColorChange: PropTypes.func.isRequired,
	handleButtonClick: PropTypes.func.isRequired,
};

export default ProductForm;
