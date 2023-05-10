import { Metadata } from 'next';
import React from 'react';
import getRepositories from '@/services/getRepositories';
import Repositories from '../components/Repositories/repositories';
import './page.scss';
// import Tree3D from '../components/Tree3D/tree3D';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Projetos - Gabriel Assunção',
  description: 'Confira meus projetos, incluindo aplicações web, front-end e back-end.'
}

export default async function Home() {
  const repositories = await getRepositories();

  return (
    <section id="projects" className="py-5">
      <div className="container custom_container">
        <Repositories data={repositories} />
      </div>
    </section>
  );
}
