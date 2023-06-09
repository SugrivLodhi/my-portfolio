import Link from 'next/link'
import React from 'react'
import styles from './page.module.css'
const navBarData = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'Portfolio',
        path: '/portfolio'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'About',
        path: '/about'
    },
    {
        title: 'Contact',
        path: '/contact'
    },
    {
        title: 'Dashboard',
        path: '/dashboard'
    }
]
const Navbar = () => {
    return (
        <div className={styles.container}>
        <h3>Sugriv Lodhi</h3>
         <div className={styles.link_container}>
            {navBarData.map(nav =>(
                <Link href={nav.path}>{nav.title}</Link>
            ))}
         </div>
        </div>
    )
}

export default Navbar