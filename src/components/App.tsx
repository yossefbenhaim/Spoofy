import React from 'react';
import Login from './login/login';
import FirstPage from './firstPage/firstPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TemplateSongs from './templateSongs/templateSongs';
import TemplatePlaylist from './templatePlaylist/templatePlaylist';
import TemplateFavorites from './templateFavorites/templateFavorites';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Login />}></Route>
                <Route path="firstPage" element={<FirstPage />}>
                    <Route path="songs" element={<TemplateSongs />} />
                    <Route path="playlist" element={<TemplatePlaylist />} />
                    <Route path="favorites" element={<TemplateFavorites />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
