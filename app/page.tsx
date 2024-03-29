/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Metadata } from 'next';
import Link from 'next/link';

import ArrowRight from './assets/icons/arrowRight';
import Heart from './assets/icons/heart';
import Github from './assets/icons/github';
import Linkedin from './assets/icons/linkedin';
import Instagram from './assets/icons/instagram';
import './page.scss';

export const metadata: Metadata = {
  title: 'Gabriel Assunção - Home',
  description: 'Confira meus projetos, incluindo aplicações web, front-end e back-end.'
}

export default function Home() {
  return (
    <section id="about" className='pb-4'>
      <div className="container px-4">
        <div className="row">
          <div className="col-8 mx-auto">
            {/*   INTRO */}
            {/* <h3 id='intro' className="bg" data-aos="fade-up" data-aos-duration="1000">Olá, o modelo 3D acima representa algo com bastante significado para mim!</h3> */}

            {/* NAME */}
            <section id='profile' className='d-flex align-items-center justify-content-between mb-5' data-aos="fade-up" data-aos-duration="1200">
              <div>
                <h1 className='fw-bold lh-1'>Gabriel Assunção</h1>
                <p className='m-0'>Desenvolvedor Full-Stack ( Next.js / Laravel / Wordpress )</p>
              </div>

              <figure>
                {/* <Image src="" alt="#" /> */}
              </figure>
            </section>

            {/* WORK */}
            <section id='work' className="work mb-5" data-aos="fade-up" data-aos-duration="1400">
              <h2 className='d-flex flex-column'>Trabalho <span /></h2>

              <p>
                Desenvolvedor Full-stack com especialidade de 2 anos em aplicações no lado do <span className='text-secondary'>Front-end</span>, formado como tecnico em Desenvolvimento Web.
                Atuando hoje como desenvolvedor Full-stack na Black Beans, e tambem atuando em projetos independentes como freelancer.
              </p>

              <p>
                Com experiência na construção e manutenção de aplicações do lado do Front-end e Back-end, desde a concepção do produto, análise de layout e prototipagem ate seu desenvolvimento e produção, pensando tambem em <span className='text-secondary'>SEO e arquitetura dos dados</span>, com o objetivo de criar sistemas escaláveis e acessíveis.
              </p>

              <div className='w-100 text-center'>
                <Link href="/projetos" title='Meu portfólio' className='btn btn-light fw-bold align-items-center' >Meu portfólio
                  <ArrowRight />
                </Link>
              </div>
            </section>

            {/* BIO */}
            <section id='bio' className="work mb-5" data-aos="fade-up" data-aos-duration="1500" data-aos-anchor-placement="top-bottom">
              <h2 className='d-flex flex-column'>Bio <span /></h2>
              <ul>
                <li className='d-flex'><strong>1999</strong> <p className='mb-1 ps-3'>Nascido em Três Corações, Minas Gerais.</p> </li>
                <li className='d-flex' ><strong className="mr-5">2021</strong> <p className='mb-1 ps-3'>Formação Tecnica em Desenvolvimento Web Full-Stack no SENAI - Centro de Treinamento da Tecnologia da Informação</p>
                </li>
                <li className='d-flex'><strong className="mr-5">2022 - o momento</strong> <p className='mb-1 ps-3'>Lider operacional na Black Beans</p></li>
              </ul>
            </section>

            {/* I_LOVE */}
            <section id='i_love' className="mb-5" data-aos="fade-up" data-aos-duration="1000" >
              <h2 className='d-flex flex-column'><div className='d-flex align-items-center gap-2'>Eu <Heart /></div> <span /></h2>
              <p><span className='text-secondary'>Acampar</span>, Trilhas, Boxe, Jogos, Fotografia, <span className='text-secondary'>Corrida</span>, Meditação e Yoga</p>
            </section>

            {/* SOCIAL */}
            <section id='social' className="social" data-aos="fade-up" data-aos-duration="1200">
              <h2 className='d-flex flex-column'>Social <span /></h2>

              <ul>
                <li>
                  <Link className="hover" href="https://github.com/zDeep10" target="_blank"><Github />@zDeep10 </Link>
                </li>
                <li className='my-1'>
                  <Link className="hover" href="https://www.linkedin.com/in/gabrielgontijoa/" target="_blank"><Linkedin />@gabrielgontijoa</Link>
                </li>
                <li><Link className="hover" href="https://www.instagram.com/sk_gab/" target="_blank"><Instagram />@sk_gabs</Link></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
