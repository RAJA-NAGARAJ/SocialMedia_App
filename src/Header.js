import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from './hooks/useWindowSize';

const Header = ({ title }) => {
    const { width } = useWindowSize();

    return (
        <header className="Header">
            <h1>{title}</h1>
            {width < 700 ? <FaMobileAlt />
                : width < 1000 ? <FaTabletAlt />
                    : <FaLaptop />}
        </header>
    )
}

export default Header