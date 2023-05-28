import React from 'react';
import Login from './login/login';
import MainPage from './mainPage/mainPage';
import PathName from 'models/emuns/pathName';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SongsTable from './songsTable/songsTable';
import PlaylistTable from './playlistTable/playlistTable';
import FavoritesTable from './favoritesTable/favoritesTable';

const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path={PathName.firstPage} element={<MainPage />}>
					<Route path={PathName.songs} element={<SongsTable />} />
					<Route path={PathName.playlist} element={<PlaylistTable />} />
					<Route path={PathName.favorites} element={<FavoritesTable />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
