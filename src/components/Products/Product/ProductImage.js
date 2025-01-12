import styles from "./Product.module.scss";

const ProductImage = (props) => {
	const imageSrc = `${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${props.currentColor}.jpg`;

	return (
		<div className={styles.imageContainer}>
			<img className={styles.image} alt={props.title} src={imageSrc} />
		</div>
	);
};

export default ProductImage;
