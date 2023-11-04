import { NavLink } from 'react-router-dom'
import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context'


const NavBar = () => 
{
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'
    

    return (
        <nav className='flex justify-between items-center fixed top-0 z-10 w-full py-5 px-8 text-sm font-light border-gray-800 bg-gray-100'>
            <ul className='flex items-center gap-3'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'>
                        Shopiu
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({ isActive }) => 
                     isActive ?  activeStyle : undefined 
                 }>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/clothes'
                    className={({ isActive }) => 
                     isActive ?  activeStyle : undefined 
                 }>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/electronics'
                    className={({ isActive }) => 
                    isActive ?  activeStyle : undefined 
                }>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/furnitures'
                    className={({ isActive }) => 
                    isActive ?  activeStyle : undefined 
                }>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/toys'
                    className={({ isActive }) => 
                     isActive ?  activeStyle : undefined 
                 }>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/others'
                    className={({ isActive }) => 
                    isActive ?  activeStyle : undefined 
                }>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className='flex items-center gap-3'>
                <li className='text-black/60'>
                    jm@platzi.com
                </li>
                <li>
                    <NavLink to='/my-orders'>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/my-account'>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/sign-in'>
                        Sign In
                    </NavLink>
                </li>
                <li>
                    Carrito { context.count } 
                </li>
            </ul>
        </nav>
    )
} 

export default NavBar