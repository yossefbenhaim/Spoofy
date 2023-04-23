import React, { useState } from 'react';
import useStyles from './firstPageStyles';
import logo from 'svg/spotify.svg';
import UserOptionMenu from 'components/userOptionMenu/userOptionMenu';
import Sliders from 'components/musicPlayer/musicPlayer';
import ButtonsNavigation from 'components/buttomsNavigation/buttonsNavigation';
import { Outlet } from 'react-router-dom';
import LogoHome from 'components/lottie/logoHome';

const FirstPage: React.FC = () => {
    const { classes } = useStyles();

    return (
        <div className={classes.fieldsContainer}>
            <div className={classes.header}>
                <div className={classes.titleContainer}>
                    <UserOptionMenu></UserOptionMenu>
                    <div className={classes.logoContainer}>
                        <LogoHome></LogoHome>
                        <div>musify </div>
                    </div>
                </div>
            </div>
            <div className={classes.navigation}>
                <div className={classes.tableValuse}>
                    <Outlet />
                </div>
                <div className={classes.buttonsContainer}>
                    <ButtonsNavigation />
                </div>
            </div>
            <Sliders />
        </div>
    );
};

export default FirstPage;
