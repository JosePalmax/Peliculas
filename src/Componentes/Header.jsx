import { Link, NavLink } from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";
import icono from '../imgs/icono.jpg'

const links = [
    { name: "Home", path: "/" },
    { name: "Films", path: "/peliculas" },
];

const linkActivo = 'inline-flex h-9 items-center justify-center rounded-md bg-transparent border border-white px-4 py-2 text-sm font-medium text-black bg-white transition-colors hover:bg-white hover:text-black'
const linkNormal = 'inline-flex h-9 items-center justify-center rounded-md bg-transparent border border-white px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-black'

const Header = () => {
    return (
        <header className="flex items-center justify-between px-4 py-4 bg-gray-800 text-white w-full">
            <Link to="/">
                <div className="flex items-center gap-4">
                <img src={icono} alt="" className="w-12"/>
                    <h1 className="text-2xl font-bold">JoseFlix</h1>
                </div>
            </Link>
            <nav className="flex gap-4">
                {
                    links.map((link, index) => (
                        <p key={index}>
                            <NavLink key={index} to={link.path} className={({ isActive }) => isActive ? linkActivo : linkNormal}>
                                {link.name}
                            </NavLink>
                        </p>
                    ))
                }
            </nav>
        </header >
    )
}

export default Header