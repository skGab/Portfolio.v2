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
    <section id="about" className='py-5'>
      <div className="container px-4">
        <div className="row">
          <div className="col-8 mx-auto">
            {/*   INTRO */}
            <h3 id='intro' className="bg" data-aos="fade-up" data-aos-duration="1000">Hello, I'm an indie app developer based in Japan!</h3>

            {/* NAME */}
            <section id='profile' className='d-flex align-items-center justify-content-between mb-5' data-aos="fade-up" data-aos-duration="1200">
              <div>
                <h1 className='fw-bold lh-1'>Gabriel Assunção</h1>
                <p className='m-0'>Digital Craftsman ( Artist / Developer / Designer )</p>
              </div>

              <figure>
                {/* <Image src="" alt="#" /> */}
              </figure>
            </section>

            {/* WORK */}
            <section id='work' className="work mb-5" data-aos="fade-up" data-aos-duration="1400">
              <h2 className='d-flex flex-column'>Trabalho <span /></h2>
              <p>
                Takuya is a freelance and a full-stack developer based in Osaka with a passion for building digital services/stuff he wants. He has a knack for all things launching products, from planning and designing all the way to solving real-life problems with code. When not online, he loves hanging out with his camera. Currently, he is living off of his own product called <Link href="/" title='Inkdrop'>Inkdrop</Link>. He publishes content for marketing his products and his YouTube channel called "Dev as Life" has more than 100k subscribers.
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
                <li className='d-flex'><strong>1984</strong> <p className='mb-1'>Born in Osaka (大阪), Japan.</p> </li>
                <li className='d-flex' ><strong className="mr-5">2010</strong> <p className='mb-1'>Completed the Master's Program in the Graduate School of Information Science at Nara Institute of Science and Technology (奈良先端科学技術大学院大学情報科学研究科修士課程)</p> </li>
                <li className='d-flex'><strong className="mr-5">2010</strong> <p className='mb-1'>Worked at Yahoo! Japan (ヤフー株式会社入社)</p> </li>
                <li className='d-flex'><strong className="mr-5">2012 to present</strong> <p className='mb-1'>Working as a freelancer</p> </li>
              </ul>
            </section>

            {/* I_LOVE */}
            <section id='i_love' className="mb-5" data-aos="fade-up" data-aos-duration="1000" >
              <h2 className='d-flex flex-column'><div className='d-flex align-items-center gap-2'>I <Heart /></div> <span /></h2>
              <p>Art, Music, <span className='text-secondary'>Drawing</span>, Playing Drums, <span className='text-secondary'>Photography</span>, Leica, Machine Learning</p>
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
