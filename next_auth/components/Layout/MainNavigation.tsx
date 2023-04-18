import Link from "next/link";
import { useSession, signOut } from "next-auth/react"

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const { status } = useSession();

    const signOutHandler = () => {
        signOut();
    }

    return (
        <header className={styles.header}>
            <Link href="/">
                <div className={styles.logo}>Next Auth</div>
            </Link>
            <nav>
                <ul>
                    {status === "unauthenticated" &&
                        <li>
                            <Link href="/auth">Login</Link>
                        </li>
                    }
                    {status === "authenticated" &&
                        <>
                            <li>
                                <Link href="/profile">Profile</Link>
                            </li>
                            <li>
                                <button onClick={signOutHandler}>Logout</button>
                            </li>
                        </>
                    }
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
