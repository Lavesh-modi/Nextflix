'use client'

import styles from "@/app/styles/navbar.module.css";
import Link from "next/link";


function Nav() {
  return (
    <div className={styles.navbar} >
        <div>
            <ul className={styles.navbarList}
            
            >
                <li>
                    <Link className={styles.navbarItem}
                    href={"/"}
                    >Home</Link>
                </li>
                <li>
                    <Link className={styles.navbarItem}
                    href="/about"
                    >About</Link>
                </li>
                <li>
                    <Link className={styles.navbarItem}
                    href="/movie"
                    >Movie</Link>
                </li>
                <li>
                    <Link className={styles.navbarItem}
                    href="/contact"
                    >Contact</Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Nav