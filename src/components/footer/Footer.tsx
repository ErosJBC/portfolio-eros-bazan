import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className='pt-6 bg-neutral-50 w-full'>
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-sky-500 font-semibold text-center text-2xl pb-5'>Redes Sociales</h2>
          <div className='grid grid-cols-1 items-center gap-y-2 md:grid-cols-2 md:gap-y-4 lg:grid-cols-4 text-xl mb-5'>
            <div className='flex items-center px-10 text-sky-600 duration-500 transition'>
              <a rel='noreferrer' href='https://linkedin.com/in/eros-jeanpierre-bazan-calderon' target={'_blank'}><i className="fa-brands fa-linkedin px-2 text-lg"></i>LinkedIn</a>
            </div>
            <div className='flex items-center px-10 text-blue-600 duration-500 transition'>
              <a rel='noreferrer' href='https://facebook.com/erosjbc24' target={'_blank'}><i className="fa-brands fa-facebook-square px-2 text-lg"></i>Facebook</a>
            </div>
            <div className='flex items-center px-10 text-pink-500 duration-500 transition'>
              <a rel='noreferrer' href='https://instagram.com/erosjbc' target={'_blank'}><i className="fa-brands fa-instagram px-2 text-lg"></i>Instagram</a>
            </div>
            <div className='flex items-center px-10 text-zinc-800 duration-500 transition'>
              <a rel='noreferrer' href='https://github.com/erosjbc' target={'_blank'}><i className="fa-brands fa-github px-2 text-lg"></i>GitHub</a>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-900'>
          <hr className='h-1 bg-zinc-800' />
          <div className='text-center py-3 px-10'>
            <span className='text-sm text-neutral-50'>Eros Jeanpierre Bazan Calderon &copy; 2022. Todos los derechos reservados.</span>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer