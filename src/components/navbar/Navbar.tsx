import React, { FunctionComponent, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'

const Navbar: FunctionComponent = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <header className='bg-slate-800 fixed z-10 w-full text-sm text-neutral-50 font-medium px-6 py-4 shadow'>
        <nav className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between'>
          <div className='flex flex-col md:flex-row justify-between'>
            <div className='flex justify-between'>
              <NavLink to='/' className='cursor-pointer py-2' reloadDocument={true}>
                <span className='text-xl'>Eros Bazan</span>
                <img src="" alt="" />
              </NavLink>
              <button className='text-white text-xl cursor-pointer rounded md:hidden' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
              </button>
            </div>
          </div>
          <div className='flex items-center'>
            <ul className={`md:inline-flex md:flex-grow w-full md:w-auto ${!click ? 'hidden' : ''}`}>
              <div className='flex flex-col align-middle md:flex-row'>
                <li>
                  <Link to='home' className='inline-flex w-full cursor-pointer md:w-auto px-5 py-2 rounded hover:text-slate-900 hover:bg-slate-100 transition-all duration-500'>Inicio</Link>
                </li>
                <li>
                  <Link to='aboutme' className='inline-flex w-full cursor-pointer md:w-auto px-5 py-2 rounded hover:text-slate-900 hover:bg-slate-100 transition-all duration-500'>Acerca de mí</Link>
                </li>
                <li>
                  <Link to='skills' className='inline-flex w-full cursor-pointer md:w-auto px-5 py-2 rounded hover:text-slate-900 hover:bg-slate-100 transition-all duration-500'>Habilidades</Link>
                </li>
                <li>
                  <Link to='projects' className='inline-flex w-full cursor-pointer md:w-auto px-5 py-2 rounded hover:text-slate-900 hover:bg-slate-100 transition-all duration-500'>Proyectos</Link>
                </li>
                <li>
                  <Link to='contact' className='inline-flex w-full cursor-pointer md:w-auto px-5 py-2 rounded hover:text-slate-900 hover:bg-slate-100 transition-all duration-500'>Contacto</Link>
                </li>
              </div>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Navbar