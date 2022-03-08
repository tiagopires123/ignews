import { SigInButton } from '../SignInButton'

import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    

    return (
        <header className={styles.headerContainer}>
            <div className={styles.hedaerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <ActiveLink activeClassName={styles.active} href="/">
                        <a>Home</a>
                    </ActiveLink>
                    <ActiveLink activeClassName={styles.active} href="/posts">
                        <a>Post</a>
                    </ActiveLink>
                </nav>

                <SigInButton />
            </div>
        </header>
    )
}