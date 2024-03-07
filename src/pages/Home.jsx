import React from 'react'
import { useCartContext } from '../Context/CartContext'
import Product from '../components/Product'
import Button from '../components/Button'

const coffees = [
    {
        id: 1,
        title: "black coffee",
        price: 30
    },
    {
        id: 2,
        title: "hot coffee",
        price: 30
    },
    {
        id: 3,
        title: "cold coffee",
        price: 30
    }
]
const Home = () => {
  return (
      <section>
        <div className='bg-amber-100 h-[90vh] flex flex-col md:flex-row gap-9 justify-center items-center'>
          <img className='w-[300px]' src="/heroImg.webp" alt="" />
          <div className='w-[300px]'>
            <h1 className='text-5xl font-bold text-amber-800 mb-4'>Awaken Your Senses, One Sip at a Time.</h1>
            {/* <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis commodi? Nobis, perferendis?</p> */}
            <Button>Buy Your Booster</Button>
          </div>
        </div>
        {/* About */}
        <div className='py-10 flex flex-col md:flex-row justify-center items-center gap-5'>
          <div className='flex flex-col gap-4 items-center'>
            <img src="/coffeecup.png" alt="" className='w-[100px] md:w-[200px]' />
            <h3 className='text-3xl font-semibold text-slate-700'>About</h3>
          </div>
          <p className='w-[300px] text-slate-500'>Coffee seeds originate from the seeds of the Coffea plant, typically Coffea arabica or Coffea robusta species. These plants are native to tropical regions around the world, primarily found in countries within the "Coffee Belt," such as Brazil, Colombia, Ethiopia, and Indonesia.</p>
        </div>
      </section>
);
}

export default Home
// https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg