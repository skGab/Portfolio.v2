import React from 'react'
import { Nunito } from 'next/font/google';
import Header from './components/header';
import Footer from './components/footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

const nunito = Nunito({ subsets: ['latin'] });

export const metadata = {
    title: 'Meu Portfolio',
    description: 'Informações e projetos',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body className={nunito.className}>
                <main>
                    <Header />
                    {children}
                    <Footer />
                </main>
            </body>
        </html>
    )
}
