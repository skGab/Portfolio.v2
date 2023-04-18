import Image from 'next/image';
import React from 'react';
import './projects.scss';

type Repository = {
    id: number;
    name: string;
    html_url: string;
    imgSrc: string;
    list: string;
};

export type Props = {
    repositories: Repository[];
};

function Projects({ repositories }: Props) {

    const renderRepositories = (listName: string) =>
        repositories
            .filter((repository) => repository.list === listName)
            .map((repository) => (
                <li key={repository.id} className='col-6 d-flex align-items-center justify-content-center mb-2'>
                    <a href={repository.html_url} target="_blank" rel="noreferrer">
                        <figure className="project text-center">
                            <Image src={repository.imgSrc} alt="project thumb" className='img-fluid mb-3' />
                            <h3 className='h5'>{repository.name}</h3>
                            <p>descricao descricao descricao descricao descriao</p>
                        </figure>
                    </a>
                </li>
            ));

    return (
        <>
            <h2 className="d-flex flex-column mb-3">Web App <span /></h2>
            <ul className='row justify-content-between'>{renderRepositories('web-app')}</ul>

            <h2 className="d-flex flex-column mb-3">Front-end <span /></h2>
            <ul className='row justify-content-between'>{renderRepositories('front-end')}</ul>

            <h2 className="d-flex flex-column mb-3">Back-end <span /></h2>
            <ul className='row justify-content-between'>{renderRepositories('back-end')}</ul>

        </>
    );
}

export default Projects;
