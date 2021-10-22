import './Header.css'
import { FaPalette, FaBell, FaSearch } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Header = () => {
    return (
        <header>
            <div className="header">
                <div className="header-search">
                    <motion.input type="text" placeholder="Search..." whileFocus={{ width: 350 }}></motion.input>
                    <FaSearch className="search-icon" />
                </div>
                <div className="header-icons">
                    <FaPalette className="header-icon" />
                    <FaBell className="header-icon" />
                </div>
            </div>
        </header>
    )
}

export default Header
