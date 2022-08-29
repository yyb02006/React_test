import styles from '../css/App.module.css';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

function Movie({ id, title, year, genres, coverImg, summary }) {
	return (
		<div className={styles.title}>
			<div>
				<strong>Movie Title</strong>
				<br />
				<NavLink to={`/detail/${id}`}>{title}</NavLink> - {year}
			</div>
			<div>
				<strong>Genres</strong>
				<br />
				<ul>
					{genres.map((genre) => (
						<li key={genre}>{genre}</li>
					))}
				</ul>
			</div>
			<div>
				<img src={coverImg} alt={`${title}`} />
			</div>
			<div>
				<strong>Summary</strong>
				<br />
				{summary}
			</div>
			<hr />
		</div>
	);
}

Movie.propTypes = {
	id: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	year: PropTypes.number,
	genres: PropTypes.arrayOf(PropTypes.string).isRequired,
	coverImg: PropTypes.string.isRequired,
	summary: PropTypes.string.isRequired,
};

export default Movie;
