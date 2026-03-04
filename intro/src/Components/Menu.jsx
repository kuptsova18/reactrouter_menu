import { NavLink } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <NavLink to='/' className={({isActive}) => `menu__item ${isActive ? 'menu__item-active' : ''}`} end>Главная</NavLink>
            <NavLink to='/drift' className={({isActive}) => `menu__item ${isActive ? 'menu__item-active' : ''}`} end>Дрифт-такси</NavLink>
            <NavLink to='/timeattack' className={({isActive}) => `menu__item ${isActive ? 'menu__item-active' : ''}`} end>Time Attack</NavLink>
            <NavLink to='/forza' className={({isActive}) => `menu__item ${isActive ? 'menu__item-active' : ''}`} end>Forza Karting</NavLink>
        </nav>
    )
}

export default Menu;