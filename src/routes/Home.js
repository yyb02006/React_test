import React, { useState, useEffect } from 'react';
import styles from '../css/App.module.css';
import Movie from '../components/Movie';

function Home() {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const getMovies = async () => {
		const json = await (
			await fetch(
				`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year`
			)
		).json();
		setMovies(json.data.movies);
		setLoading(false);
	};
	useEffect(() => {
		getMovies();
	}, []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div className={styles.card}>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							id={movie.id}
							title={movie.title}
							year={movie.year}
							genres={movie.genres}
							coverImg={movie.large_cover_image}
							summary={movie.summary}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;

// arrow function 의 body 부분
// () => {} 의 괄호는 중괄호이냐{}, 소괄호이냐()의 차이가 있다.
// 변수를 변경하는 등의 일을 하는 함수가 아닌, 값을 반환해야 하는 함수는 리턴값을 가지고 있는데,
// return이 없는 경우에도 () => something 의 형식에서는 something 전체가 리턴되는, 암묵적인 리턴값을 가지게 된다.
// 이를 여러가지의 값들로 묶게 되면(스니펫으로 묶이는 건 오로지 가시성때문) () => (something1,something2) 의 형식이 될 수 있는데,
// 이 경우 또한 전체에 대한 암묵적인 리턴값을 가지고 있다.
// 중괄호로 표현된 경우에는 암묵적인 리턴값이 존재하지 않으며, 직접 명시적으로 리턴값을 작성해야한다.
//
//
