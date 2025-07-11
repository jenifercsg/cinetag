import { Link } from 'react-router-dom';
import styles from './cabecalhoLink.module.css';


function cabecalhoLink({url, children}) {
    return(
        <Link to={url} className={styles.link}>
            {children}
        </Link>
    )
}

export default cabecalhoLink;