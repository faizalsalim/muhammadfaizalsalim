import React from 'react'
import { NavLink } from 'react-router-dom'
import { MoonIcon } from '@heroicons/react/solid'

function NavbarComponent(props) {
    return (
        <nav className="bg-blue-400 text-white shadow-lg">
            <div className="h-14 mx-5 flex justify-between items-center">
                <h1>Faizal Salim</h1>
                <ul className="flex">
                    <li className="mx-2">
                        <NavLink exact activeClassName="font-bold" to="/">
                            Home
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink activeClassName="font-bold" to="/profile">
                            Profile
                        </NavLink>
                    </li>
                    <li className="mx-2">
                        <NavLink activeClassName="font-bold" to="/about">
                            About
                        </NavLink>
                    </li>
                </ul>
                <div role="button">
                    <MoonIcon className="w-5"/>
                </div>
            </div>

        </nav>
    )
}

export default NavbarComponent
