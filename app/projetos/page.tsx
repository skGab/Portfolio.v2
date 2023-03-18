/* eslint-disable no-console */

import React from 'react';
import { Octokit } from '@octokit/rest';
import Projects from '../components/projects/projects';
import styles from './page.module.scss';


async function getRepositories() {
  try {
    const octokit = new Octokit({
      auth: `token ${process.env.GITHUB_ACCESS}`,
    });

    const { data: repositories } = await octokit.repos.listForAuthenticatedUser();

    return repositories

  } catch (error) {
    console.log(error);

    return []
  }
};

async function Home() {

  const repositories = await getRepositories();

  return (
    <>
      <section id="tree3D" className="py-5">
        <div className="container px-4 py-5">
          <div className="row">
            <div className="col text-center">
              <h1 className="small">Arvore 3d rodando</h1>
            </div>
          </div>
        </div>
      </section>

      <section id={styles.projects} className="py-5">
        <div className="container px-4">

          <Projects repositories={repositories} />

        </div>
      </section>
    </>
  );
}


export default Home;