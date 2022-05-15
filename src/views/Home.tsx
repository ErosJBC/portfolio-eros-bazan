import React from 'react'
import cvEros from '../assets/documents/CV_Bazan_Calderon_Eros_Jeanpierre.pdf'
import photoEros from '../assets/img/photo_bazan-calderon-eros.png'

const Home = () => {
  return (
    <>
      <section id='home' className='bg-zinc-900 pt-28'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 pb-16'>
          <div className='mx-auto my-auto px-14 md:px-10'>
            <h1 className='text-5xl font-semibold pt-10 text-neutral-50'>Soy Eros Jeanpierre Bazan Calderon</h1>
            <h2 className='text-3xl font-semibold pt-5 text-teal-600'>Desarrollador y Programador</h2>
            <p className='leading-relaxed py-4 text-neutral-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, quos quibusdam! Ut amet velit assumenda quasi repudiandae accusamus quas iusto, cupiditate consectetur officia ea perspiciatis neque necessitatibus cumque voluptatibus consequuntur.</p>
            <div className='pt-5'>
              <a rel='noreferrer' href={cvEros} target={'_blank'} className='bg-slate-900 py-4 px-6 rounded-lg text-neutral-50 hover:bg-slate-800 duration-300 transition'>Descargar CV</a>
            </div>
          </div>
          <div className='mx-auto my-auto pt-16 md:pt-0 px-14 md:px-10'>
            <img src={photoEros} alt="Foto de perfil de Eros Jeanpierre Bazan Calderon" className='rounded-full ' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home