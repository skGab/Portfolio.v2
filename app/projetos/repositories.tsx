'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './repositories.scss';
import LoadingSkeleton from '../components/LoadingSkeleton/loadingSkeleton';

export type Repository = {
    id: number;
    name: string;
    html_url: string;
    imgSrc: string;
    categorie: string;
};

export type Props = {
    data: Repository[];
};

function Repositories({ data: repositories }: Props) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (repositories) {
            setLoading(false)
        }
    }, [repositories])

    const renderRepositories = (categorie: string) =>
        repositories
            .filter((repository) => repository.categorie === categorie)
            .map((repository) => (
                <li key={repository.id} className='col-6 d-flex align-items-center justify-content-center'>
                    <a href={repository.html_url} target="_blank" rel="noreferrer">
                        <figure className="project text-center">
                            <Image src={repository.imgSrc} alt="project thumb" className='img-fluid mb-3' />
                            <h3 className='h5 mb-1'>{repository.name}</h3>
                            <p className='mb-0'>descricao descricao descricao descricao descriao</p>
                        </figure>
                    </a>
                </li>
            ));

    return (
        <>
            <h2 className="d-flex flex-column mb-3" data-aos="fade-up" data-aos-duration="1000">Web App <span /></h2>
            {loading ? (
                <LoadingSkeleton />
            ) : (
                <ul className='row justify-content-between mb-0' data-aos="fade-up" data-aos-duration="1200" >{renderRepositories('web-app')}</ul>
            )}

            <hr className='mt-5 mb-4' />

            <h2 className="d-flex flex-column mb-3" data-aos="fade-up" data-aos-duration="1400">Front-end <span /></h2>
            {
                loading ? (
                    <LoadingSkeleton />
                ) : (
                    <ul className='row justify-content-between mb-0' data-aos="fade-up" data-aos-duration="1600">{renderRepositories('front-end')}</ul>
                )
            }

            <hr className='mt-5 mb-4' />

            <h2 className="d-flex flex-column mb-3" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">Back-end <span /></h2>
            {
                loading ? (
                    <LoadingSkeleton />
                ) : (
                    <ul className='row justify-content-between mb-0' data-aos="fade-up" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">{renderRepositories('back-end')}</ul>
                )
            }

        </>
    );
}

export default Repositories;
