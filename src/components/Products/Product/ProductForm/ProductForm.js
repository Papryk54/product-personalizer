import styles from "../Product.module.scss";
import React from "react";
import Button from "../../../Button/Button";
import OptionSize from "./OptionSize";
import OptionColor from "./OptionColor";

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
export default ProductForm;
