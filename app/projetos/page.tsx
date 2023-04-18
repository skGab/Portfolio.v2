import React from 'react';
import Projects from '../components/projects/projects';
import fetchData from '../hooks/useFetchRepositories';
import './page.scss';

async function Home() {

  const repositories = await fetchData();
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

      <section id="projects" className="py-5">
        <div className="container custom_container">
          <Projects repositories={repositories} />
        </div>
      </section>
    </>
  );
}


export default Home;