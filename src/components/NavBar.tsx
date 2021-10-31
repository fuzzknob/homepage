import React from 'react'
import Logo from './Logo'

const NavBar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-5 md:px-20">
      <Logo size={54} />
      <div>
        <a
          href="#works"
          className="text-lg pb-1 border-b border-light hover:border-primary mr-4 md:mr-7"
          aria-label="Works"
        >
          works
        </a>
        <a
          href="#about"
          className="text-lg pb-1 border-b border-light hover:border-primary"
          aria-label="About"
        >
          about
        </a>
      </div>
    </nav>
  )
}

export default NavBar
