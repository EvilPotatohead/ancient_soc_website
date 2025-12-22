import { slide as Menu } from 'react-burger-menu'
import { useState } from 'react';

const BurgerMenu = ({children}) => {
    return (
        <Menu right styles={{
            bmBurgerButton: {
                position: 'fixed',
                width: '30px',
                height: '30px',
                top: '1rem',
                right: '1rem',
                zIndex: 1000
            },
            bmBurgerBars: {
                background: '#000000',
                height: '3px',
            },
            bmMenu: {
                position: 'fixed',
                width: '240px',
                background: '#fff',
                height: '100vh',
            },
            bmMenuWrap: {
                position: 'fixed',
                width: '240px',
                top: 0,
                background: '#fff'
            },
            bmOverlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
            },
            bmCrossButton: {
                color: '#000000'
            },
            bmCross: {
                background: 'black',
            },
            bmItemList: {
                paddingTop: '24px'
            }
        }}>
            {children}
        </Menu>
    )
}

export default BurgerMenu;