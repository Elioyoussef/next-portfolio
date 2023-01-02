import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillLinkedin} from 'react-icons/ai'
import Image from 'next/legacy/image'
import ElioAvatar from '../public/avatar-elio-2.png'
import ElioAvatar2 from '../public/avatar.png'
import code from '../public/code.png'
import consulting from '../public/consulting.png'
import { useState } from 'react'


export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? 'dark' : ''}>
    <Head>
      <title>Elio Youssef | Portfolio</title>
      <meta name="keywords" content="Software Developer Portfolio" />
    </Head>
      <main className=' bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900'>
        <section className=' min-h-screen'>
            <nav className='py-10 mb-12 flex justify-between'>
              <h1 className=' text-xl font-burtons dark:text-white'>Developed By Elio</h1>
              <ul className='flex items-center'>
                <li>
                  <BsFillMoonStarsFill className=' cursor-pointer text-2xl dark:text-white' onClick={() => setIsDark(!isDark)}/>
                </li>
                <li>
                  <a href="" className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-lg ml-8'>Resume</a>
                </li>
              </ul>
            </nav>
            <div className='text-center p-10'>
              <h2 className='text-5xl py-2 text-teal-600 font-medium md:text-6xl'>Elio Youssef</h2>
              <h3 className='text-2xl py-2 md:text-3xl dark:text-white'>Software Engineer</h3>
              <p className='text-md py-5 leading-6 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white'>As a front-end software engineer, I have a strong foundation in HTML, CSS, and JavaScript, ReactJs and NextJs and have experience building responsive and interactive websites and web applications.</p>
              <div className='flex items-center justify-center text-5xl gap-16 py-3 text-teal-600'>
                <a href="https://www.instagram.com/elioyousssef/" target='_blank'><AiFillInstagram /></a>
                <a href="https://www.linkedin.com/in/elio-youssef-398247184/" target='_blank'><AiFillLinkedin /></a>
              </div>
              <div className='relative bg-gradient-to-b from-teal-500 rounded-2xl w-90 h-90 mt-20'>
                <Image src={ElioAvatar2} width='230' height='230' alt='Software Engineer | Elio Youssef' className='overflow-hidden'/>
              </div>
            </div>
        </section>

        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Services I Offer</h3>
            <p className='text-md py-2 leading-6 text-gray-800 dark:text-white'>
              I offer a range of front-end development services, including building <span className='text-teal-500'>responsive & interactive websites</span> and <span className='text-teal-500'>web applications. </span> 
              With a focus on creating intuitive and <span className='text-teal-500'> user-friendly experiences </span>, I can help you design and develop custom solutions that meet the specific needs of your<span className='text-teal-500'> business</span>  or <span className='text-teal-500'> project</span>.
            </p>
            <p className='dark:text-white'>
            Whether you need a simple <span className='text-teal-500'> landing page</span> or a complex <span className='text-teal-500'> e-commerce </span> platform, I have the skills and experience to deliver high-quality code that is optimized for <span className='text-teal-500'>performance </span> and <span className='text-teal-500'>accessibility</span>.
            </p>
          </div>
          <div className=' md:flex gap-5'>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:shadow-white'>
              <Image src={code} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-cyan-500'>Code:</h3>
              <div className='p-4'>
                <p className='dark:text-white'>
                I have extensive experience with modern front-end technologies and frameworks, including React, NextJs, and am comfortable working with both server-rendered and client-side rendering approaches.
                Proficient in building responsive layouts using CSS Grid and Flexbox, and have a strong understanding of cross-browser compatibility issues and how to troubleshoot and fix them.
                </p>
              </div>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 dark:bg-gray-850 dark:shadow-white'>
              <Image src={consulting} width={100} height={100}/>
              <h3 className='text-lg font-medium pt-8 pb-2 text-cyan-500'>Consulting:</h3>
              <div className='p-4'>
                <p className='dark:text-white'>
                I offer consulting services to help clients plan and execute their web projects, from initial concept to final deployment.
                As a front-end software engineer, I have a deep understanding of the technical considerations involved in building successful web projects and can provide guidance on the most appropriate technologies and approaches to use.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-1 dark:text-white'>Contact Me!</h3>
            <p className='text-md py-2 leading-6 text-gray-800 dark:text-white' >
            Thank you for visiting my website. If you have <span className='text-teal-500'>any questions </span> or would like to <span className='text-teal-500'>discuss your project</span> in more detail, please don't hesitate to get in touch. You can reach me by phone at<span className='text-teal-500'> +961 76603125</span> or by email at <span className='text-teal-500'>elioyousssef@gmail.com </span>. I am available to schedule calls or meetings at a time that is convenient for you and look forward to discussing your project and how I can help. I am committed to providing <span className='text-teal-500'>excellent service </span> and delivering results that exceed your expectations. <span className='text-teal-500'>I look forward to hearing from you soon.</span>
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
