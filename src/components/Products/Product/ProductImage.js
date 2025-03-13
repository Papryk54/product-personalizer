import styles from "./Product.module.scss";
import PropTypes from "prop-types";
const ProductImage = (props) => {
	const imageSrc = `${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`;

	return (
		<div className={styles.imageContainer}>
			<img className={styles.image} alt={props.title} src={imageSrc} />
		</div>
	);
};

ProductImage.propTypes = {
	name: PropTypes.string.isRequired,
	currentColor: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};


export default ProductImage;
