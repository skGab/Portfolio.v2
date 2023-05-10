'use client'

import Link from 'next/link'
import Image from 'next/image';
import React from 'react'
import { usePathname } from 'next/navigation';
import giIcon from '../../public/icons/github.svg'
import treeIcon from '../../public/icons/treeIcon.svg'


export default function Header() {

    const pathname = usePathname();
    const isCurrentPage = pathname === '/projetos'

    return (
        <header id='header' className='sticky-top'>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <Link className="navbar-brand fw-bold" href="/">
                        <Image src={treeIcon} width={25} className='img-fluid me-1 hoverTree' alt='Icone floresta' />
                        gabriel assunção
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0 gap-1">
                            <li className="nav-item">
                                <Link className={isCurrentPage ? 'nav-link active' : 'nav-link'} aria-current="page" href="/projetos" >Projetos</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link d-flex align-items-center" aria-current="page" href="https://github.com/zDeep10" target="_blank">
                                    <Image src={giIcon} width={15} className="me-2 img-fluid" alt='GitHub Icon' />
                                    Source
                                </Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link className="nav-link" aria-current="page" href="#">x</Link>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

