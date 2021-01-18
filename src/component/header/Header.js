import React, { useEffect, useState } from 'react';
import classes from './Header.module.css'

const Header = () => {
    return (
        <div className={classes.root}>            

            <div className={classes.appBar} elevation={0}>
                <div className={classes.appBarWrapper}>
                    <h1 className={classes.appBarTitle}>
                        Enat <span className={classes.titleColor}>Care</span>
                    </h1>
                    
                </div>
            </div>
        </div>
    );
}

export default Header;
