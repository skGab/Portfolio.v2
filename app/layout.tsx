'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import { Nunito } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';
// import Tree3D from './components/Tree3D/tree3D';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css'
import 'aos/dist/aos.css'
import './global.scss';

const nunito = Nunito({ subsets: ['latin'], weight: ['400', '500'], });

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <html className={nunito.className} lang="pt-BR">
            <body >
                <Header />

                <section id="tree3D" className='py-5'>
                    <div className="container px-4 py-5">
                        <div className="row">
                            <div className="col text-center">
                                {/* <Tree3D /> */}
                            </div>
                        </div>
                    </div>
                </section>

                <main>{children}</main>

                <Footer />
            </body>
        </html>
    )
}

