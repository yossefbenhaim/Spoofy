import React from 'react';
import Login from './login/login';
import FirstPage from './firstPage/firstPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemplateSongs from './templateSongs/templateSongs';
import TemplatePlaylist from './templatePlaylist/templatePlaylist';
import TemplateFavorites from './templateFavorites/templateFavorites';
import PathName from 'models/emuns/pathName';
const App: React.FC = () => {

	return (
		<BrowserRouter>
			<Routes>
				<Route index element={<Login />} />
				<Route path={PathName.firstPage} element={<FirstPage />}>
					<Route path={PathName.songs} element={<TemplateSongs />} />
					<Route path={PathName.playlist} element={<TemplatePlaylist />} />
					<Route path={PathName.favorites} element={<TemplateFavorites />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};

export default App;
