import styles  from "./Header.module.css"
import toDoLogo from "../../assets/Logo.png"

export function Header() {
    return (
        <header className={styles.header}>
            <img draggable={false} src={toDoLogo} alt="Logotipo da aplicação" />
        </header>
    )
}