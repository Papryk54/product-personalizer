import styles from "../Product.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";
const OptionSize = (props) => {
	return (
		<div className={styles.sizes}>
			<h3 className={styles.optionLabel}>Sizes</h3>
			<ul className={styles.choices}>
				{props.sizes.map((size) => (
					<li key={size.name}>
						<button
							type="button"
							className={clsx({
								[styles.active]: props.currentSize === size.name,
							})}
							onClick={() =>
								props.handleSizeChange(size.name, size.additionalPrice)
							}
						>
							{size.name}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

OptionSize.propTypes = {
	sizes: PropTypes.arrayOf(
		PropTypes.shape({
			name: PropTypes.string.isRequired,
			additionalPrice: PropTypes.number.isRequired,
		})
	).isRequired,
	currentSize: PropTypes.string.isRequired,
	handleSizeChange: PropTypes.func.isRequired,
};

export default OptionSize;
