import styles from "../styles/uiStyles/HeaderStyles.module.css";
import Logo from "./Logo";
import UserProfilePic from "./UserProfilePic"


function Header() {
    return (
        <header className={styles.header}>
            <div></div>
            <Logo  isWhite={true} />
            <UserProfilePic />
        </header>
    )
}

export default Header
