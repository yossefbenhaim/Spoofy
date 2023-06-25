import React from 'react';
import { LicenseInfo } from '@mui/x-license-pro';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './login/login';
import Library from './library/library';
import PathName from 'models/emuns/pathName';

import SongsTable from './songsTable/songsTable';
import FavoritesTable from './favoritesTable/favoritesTable';
import PlaylistsTable from './playlistsTable/playlistsTable';

LicenseInfo.setLicenseKey('6239d8e4e4e446a3d208d638ff7603bdT1JERVI6Um9tLVRlc3QsRVhQSVJZPTIyMjMwNjEyMDAwMDAsS0VZVkVSU0lPTj0x');

const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path={PathName.library} element={<Library />}>
					<Route path={PathName.songs} element={<SongsTable />} />
					<Route path={PathName.playlist} element={<PlaylistsTable />} />
					<Route path={PathName.favorites} element={<FavoritesTable />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
