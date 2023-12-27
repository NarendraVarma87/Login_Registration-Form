import React from 'react'

export default function Home() {
  return (
    <div className='container'>
      <h1 className='text-center text-success m-5'>Welcome User...!</h1>
      <p className='h5 text-center'>Here you can find out new cars available near you...</p>
      <div className="container">
        <img src="/src/assets/bmw-car.gif" alt="car1" width={'500px'} height={'300px'} className='m-5 p-5'/>
        <img src="/src/assets/bmw-car.gif" alt="car2" width={'500px'} height={'300px'} className='m-5 p-5'/>
        <img src="/src/assets/bmw-car.gif" alt="car3" width={'500px'} height={'300px'} className='m-5 p-5'/>
        <img src="/src/assets/bmw-car.gif" alt="car4" width={'500px'} height={'300px'} className='m-5 p-5'/>
      </div>
    </div>
  )
}
