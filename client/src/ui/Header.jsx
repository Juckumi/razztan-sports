import styles from "../styles/uiStyles/HeaderStyles.module.css";
import Logo from "./Logo";


function Header() {
    return (
        <header className={styles.header}>
            <Logo isWhite={true} />
        </header>
    )
}

export default Header
