import './Sidebar.css'
import { FaAddressCard, FaUsers, FaCog, FaBoxOpen, FaChartLine, FaShoppingCart, FaBox } from 'react-icons/fa'

const Item = (props) => {
    return (
        <div style={props.selected ? { backgroundColor: '#3aa5ec' } : null} className="sidebar-item">
            <div className="sidebar-icon">{props.icon}</div>
            <span>{props.title}</span>
        </div>
    )
}

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <h1 className="logo">dash<span>board</span>.</h1>
            </div>
            <Item icon={<FaAddressCard />} title="Dashboard" selected />
            <Item icon={<FaChartLine />} title="Analytics" />
            <Item icon={<FaUsers />} title="Customers" />
            <Item icon={<FaBoxOpen />} title="Products" />
            <Item icon={<FaShoppingCart />} title="Orders" />
            <Item icon={<FaBox />} title="Inventory" />
            <Item icon={<FaCog />} title="Settings" />
        </div>
    )
}

export default Sidebar
