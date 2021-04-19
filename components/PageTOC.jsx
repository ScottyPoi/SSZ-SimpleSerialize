import React from 'react';
import ScrollSpy from 'react-scrollspy';
import Link from 'next/link';
import styles from '../styles/PageTOC.module.css';

export default function PageTOC({...props}) {

    return (
        <>
        <div className='nav flex-column'>
            <ul>
            <ScrollSpy items={props.toc} currentClassName={styles.iscurrent} aria-current='true' offset={0}>
                { props.toc.map((section) => {
                    return (
                        <li key={section}>
                            <Link className='nav-link' key={section} href={`${props.foo}#${section}`} passHref={true}>
                                <a>{`${section}`}</a>
                            </Link>
                        </li>
                    )
                })}
            </ScrollSpy>
            </ul>
        </div>
        </>
    )
}