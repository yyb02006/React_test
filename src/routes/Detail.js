import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Detail() {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
		).json();
		setMovies(json.data.movie);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			<Link to='/'>
				<h1>Back to the Home</h1>
			</Link>
			<hr />
			{loading ? (
				'loading...'
			) : (
				<div>
					<h3>
						{movies.title} - {movies.year}
					</h3>
					Genre : {movies.genres.map((genre) => `${genre} `)}
					<div>
						<img src={movies.large_cover_image} alt={movies.title}></img>
					</div>
					Download : {movies.download_count} {'\u00A0'}
					{'\u00A0'} Like : {movies.like_count}
				</div>
			)}
		</div>
	);
}

export default Detail;

//return의 의미는
//function test(){'1+2'}이라는 함수가 있을 때,
//console.log(test());를 하면 undef이지만
//function test(){return '1'}을 만들면
//console.log(test());의 값으로 1이 나온다는 것.

// ex))
// function test() {
//   let tt = 5;
//   return tt;
// }
// let tt = test();
// console.log(tt);

// =5
