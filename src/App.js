import React from 'react';
import Home from './routes/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detail from './routes/Detail';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/Detail/:id' element={<Detail />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
