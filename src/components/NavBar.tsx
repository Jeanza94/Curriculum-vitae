import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { onActiveCertificate, onActiveHome, onActiveProject, onCloseList, onOpenList } from '../store/activeSlice';
import { RootState } from '../store/store';

export const NavBar = () => {

    const {
        isListOpen,
        isHomeActive,
        isProjectActive,
        isCertificateActive
    } = useSelector((state: RootState) => state.active)

    const dispatch = useDispatch();


    return (
        <header className='navbar'>
            <Link onClick={() => dispatch(onActiveHome())} to="/homePage" className={`navbar-profile ${isHomeActive && "active"}`}>
                <img src="/images/profile.jpg" alt="image jean zapata" />
                <figcaption>Jean Zapata</figcaption>
            </Link>

            {
                !isListOpen && (
                    <div className='navbar-content'>
                        <button onClick={() => dispatch(onOpenList())}  ><img src="https://cdn-icons-png.flaticon.com/128/3917/3917215.png" alt="more information" /></button>
                        <Link onClick={() => dispatch(onActiveProject())} className={`${isProjectActive ? "active" : ""}`} to="/projectsPage">Projects</Link>
                        <Link onClick={() => dispatch(onActiveCertificate())} className={`${isCertificateActive ? "active" : ""}`} to="/certificatesPage">Certificates</Link>
                    </div>
                )
            }


            {
                isListOpen && (
                    <ul className='navbar-list'>
                        <li><Link onClick={() => dispatch(onActiveProject())} to="/projectsPage">Projects</Link></li>
                        <li><Link onClick={() => dispatch(onActiveCertificate())} to="/certificatesPage">Certificates</Link></li>
                        <button onClick={() => dispatch(onCloseList())} >x</button>
                    </ul>
                )
            }
        </header>
    )
}
