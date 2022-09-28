import React from 'react'


interface ButtonInterface{
  bgColor: string;
  color: string;
  size?: string;
  text: string;
  borderRadius:string;
}

const Button:React.FC<ButtonInterface> = ({bgColor,color,size,text,borderRadius}) => {
  return (
    <button
    type='button'
    style={{backgroundColor: bgColor,color,borderRadius}}
    className={`text-${size} p-3 hover:drop-shadow-xl`}>
      {text}
    </button>
  )
}

export default Button
