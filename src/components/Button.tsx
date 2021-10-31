import React from 'react'

interface ButtonProps {
  to?: string
  shape?: 'square' | 'rectangle'
}

const Button: React.FC<ButtonProps> = ({ children, to, shape }) => {
  const padding = shape === 'square' ? 'p-3' : 'py-2 px-4'
  return (
    <a className="text-sm" href={to || '#'}>
      <button className={`bg-primary text-white rounded-lg pointer ${padding}`}>
        {children}
      </button>
    </a>
  )
}

export default Button
