import Styles from './Layout.module.css';

import { githubIcon } from '../../icons/Icons';

const Layout = ({ children }) => {
    return (
        
        <div className={Styles.layout}>
            <header className={Styles.headerContent}>
                <div className={Styles.headerTitle}>
                    KAMI
                </div>
                <div className={Styles.headerSocial}>
                    <a href="https://github.com/Kamiiuwu" target="_blank" rel="noopener noreferrer">
                        {githubIcon()}
                    </a>
                </div>
            </header>
            <div className={Styles.mainAppTitle}>
                <h1 className={Styles.title}>Multi App</h1>
                <p className={Styles.subtitle}>Colección de mini aplicaciones</p>
            </div>
            {children}
        </div>
    );
};

export default Layout;
