
import React from 'react'
import './App.css'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Items from './components/Items'

function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is Product 1 description.',
      price: '$10.00',
      image: 'splash-03-605-v1.webp'
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is Product 2 description.',
      price: '$20.00',
      image: 'splash-03-605-v1.webp'
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is Product 3 description.',
      price: '$30.00',
      image: 'splash-03-605-v1.webp'
    },
    {
      id: 3,
      name: 'Product 4',
      description: 'This is Product 4 description.',
      price: '$40.00',
      image: 'splash-03-605-v1.webp'
    },
    {
      id: 3,
      name: 'Product 5',
      description: 'This is Product 5 description.',
      price: '$50.00',
      image: 'splash-03-605-v1.webp'
    },
    {
      id: 3,
      name: 'Product 6',
      description: 'This is Product 6 description.',
      price: '$60.00',
      image: 'splash-03-605-v1.webp'
    }
  ];
  return (
    <>
    <Nav/>
    <Items products={products}/> 
    <Footer/>
    </>
  )
}

export default App