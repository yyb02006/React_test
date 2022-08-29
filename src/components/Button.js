import PropTypes, { string } from 'prop-types';
import styles from '../css/Button.module.css';

function Button({ text }) {
	return <button className={styles.btn}>{text}</button>;
}

Button.prototype = {
	text: PropTypes.string,
};

export default Button;
