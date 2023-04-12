import Link from "next/link";

import styles from "./Navbar.module.css"
import Logo from "./Logo";

const Navbar = () => {
    return <header className={styles.header}>
        <Link href="/"><Logo /></Link>
        <nav>
            <ul>
                <li><Link href="/posts">Posts</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
}

export default Navbar;