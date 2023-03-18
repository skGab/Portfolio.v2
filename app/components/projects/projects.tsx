import Image from 'next/image';
import React from 'react';
import thumb from '../../assets/imgs/youtube-how-to-build-portfolio.webp';

import styles from './page.module.scss'

type Repository = {
    id: number;
    name: string;
};

export type Props = {
    repositories: Repository[];
};

function Projects({ repositories }: Props) {
    return (
        <>
            <h2 className="d-flex flex-column mb-3 px-5">Trabalhos <span /></h2>
            <ul className='row justify-content-center px-4'>
                {repositories.map(repository => (
                    <li key={repository.id} className='col-5 d-flex align-items-center justify-content-center mb-2'>
                        <a href="/projetos">
                            <figure className={styles.project}>
                                <Image src={thumb} alt="project thumb" className='img-fluid mb-2' />
                                <p>{repository.name}</p>
                            </figure>
                        </a>
                    </li>
                ))}
            </ul>
        </>

    );
}

export default Projects;