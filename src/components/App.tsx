import React from 'react';
import Login from './login/login';
import MainPage from './mainPage/mainPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableSongs from './tableSongs/tableSongs';
import TablePlaylist from './tablePlaylist/tablePlaylist';
import TableFavorites from './tableFavorites/tableFavorites';
import PathName from 'models/emuns/pathName';

const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path={PathName.firstPage} element={<MainPage />}>
					<Route path={PathName.songs} element={<TableSongs />} />
					<Route path={PathName.playlist} element={<TablePlaylist />} />
					<Route path={PathName.favorites} element={<TableFavorites />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
