import styles from "../Product.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";

const OptionColor = (props) => {
	return (
		<div className={styles.colors}>
			<h3 className={styles.optionLabel}>Colors</h3>
			<ul className={styles.choices}>
				{props.colors.map((color) => (
					<li key={color}>
						<button
							type="button"
							className={clsx({
								[styles.colorBlack]: color === "black",
								[styles.colorRed]: color === "red",
								[styles.colorGreen]: color === "green",
								[styles.colorBlue]: color === "blue",
								[styles.colorWhite]: color === "white",
								[styles.active]: props.currentColor === color,
							})}
							onClick={() => props.handleColorChange(color)}
						></button>
					</li>
				))}
			</ul>
		</div>
	);
};

OptionColor.propTypes = {
	colors: PropTypes.arrayOf(PropTypes.string),
	currentColor: PropTypes.string,
	handleColorChange: PropTypes.func,
};

export default OptionColor;
