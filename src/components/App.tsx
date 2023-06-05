import React from 'react';
import Login from './login/login';
import MainPage from './mainPage/mainPage';
import PathName from 'models/emuns/pathName';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import SongsTable from './songsTable/songsTable';
import FavoritesTable from './favoritesTable/favoritesTable';
import PlaylistsTable from './playlistsTable/playlistsTable';

const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path={PathName.mainPage} element={<MainPage />}>
					<Route path={PathName.songs} element={<SongsTable />} />
					<Route path={PathName.playlist} element={<PlaylistsTable />} />
					<Route path={PathName.favorites} element={<FavoritesTable />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
