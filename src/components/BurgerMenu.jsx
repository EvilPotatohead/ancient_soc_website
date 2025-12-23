import { slide as Menu } from 'react-burger-menu'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const BurgerMenu = ({items}) => {
    const navigate = useNavigate();
    const scrollToTop = () => {window.scrollTo(0, 0)};
    const [menuOpen, setMenuOpen] = useState(false);
    const titleCase = (string) => {
        return String(string).charAt(0).toUpperCase() + String(string).slice(1);
    };

    const handleClick = (p) => {
        setMenuOpen(false)
        navigate("/" + p)
        scrollToTop()
    }

    return (
        <Menu right 
            onStateChange={(state) => setMenuOpen(state.isOpen)}
            styles={{
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
                width: '45%',
                background: '#fff',
                height: '100vh',
            },
            bmMenuWrap: {
                position: 'fixed',
                width: '45%',
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
            {items.map(p=> (
                <button
                    className="font-main text-black px-4 py-2 whitespace-nowrap cursor-pointer"
                    id={p}
                    onClick={() => {handleClick(p)}}
                >
                    {titleCase(p)}
                </button>
            ))}
        </Menu>
    )
}

export default BurgerMenu;