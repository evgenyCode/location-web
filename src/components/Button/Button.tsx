import React from 'react'
import { Pacifico} from 'next/font/google'
const inter = Pacifico ({
  subsets: ['latin'],
  weight: '400'
})

type ButtonType = {

  onClick: ()=> void;
    isLoading: boolean;
    text: string;
    className: string;
    

}

const Button: React.FC <ButtonType> = ({onClick, isLoading, text, className}) => {
  return (
    <button className={className} onClick={onClick}>
    {isLoading ? <>'Įkeliama...'</> : <>{text}</>}
  </button>
  )
}

export default Button
