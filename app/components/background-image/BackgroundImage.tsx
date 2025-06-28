import React from 'react'

export const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className='bg-cover bg-center bg-no-repeat min-h-screen -z-40'
      style={{ backgroundImage: "url('/Assets/Background/background.jpg')"}}>
    </div>
  )
}

export default BackgroundImage;