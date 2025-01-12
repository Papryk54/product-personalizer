import styles from "../Product.module.scss";
import clsx from "clsx";

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

export default OptionSize;
