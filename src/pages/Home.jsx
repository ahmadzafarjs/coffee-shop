import React from 'react'
import { useCartContext } from '../Context/CartContext'
import Product from '../components/Product'
import Button from '../components/Button'
import Review from '../components/Review'

const Home = () => {
  return (
      <section>
        <div className='bg-amber-100 h-[900px] flex flex-col md:flex-row gap-9 justify-center items-center'>
          <img className='w-[300px]' src="/heroImg.webp" alt="" />
          <div className='w-[300px]'>
            <h1 className='text-5xl font-bold text-amber-800 mb-4'>Awaken Your Senses, One Sip at a Time.</h1>
            {/* <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, blanditiis commodi? Nobis, perferendis?</p> */}
            <Button>Buy Your Booster</Button>
          </div>
        </div>
        {/* About */}
        <div className='py-12 flex flex-col md:flex-row justify-center items-center gap-5'>
          <div className='flex flex-col gap-4 items-center'>
            <img src="/coffeecup.png" alt="" className='w-[100px] md:w-[200px]' />
            <h3 className='text-3xl font-semibold text-slate-700'>About</h3>
          </div>
          <p className='w-[300px] text-slate-500'>Coffee seeds originate from the seeds of the Coffea plant, typically Coffea arabica or Coffea robusta species. These plants are native to tropical regions around the world, primarily found in countries within the "Coffee Belt," such as Brazil, Colombia, Ethiopia, and Indonesia.</p>
        </div>
        {/* Reviews */}
        <div className='h-[400px] flex flex-col md:flex-row items-center justify-center gap-3'>
            <Review>
              <Review.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda unde ut ab atque officia nobis nesciunt minima non recusandae.</Review.Content>
              <Review.Author img="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=sph" name="John Doe" />
            </Review>
            <Review>
              <Review.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda unde ut ab atque officia nobis nesciunt minima non recusandae.</Review.Content>
              <Review.Author img="https://t4.ftcdn.net/jpg/02/18/93/97/360_F_218939757_YqHgeD3BAANU87y2Kc10Y40HNVgDv5rK.jpg" name="John Doe" />
            </Review>
            <Review>
              <Review.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda unde ut ab atque officia nobis nesciunt minima non recusandae.</Review.Content>
              <Review.Author img="https://img.freepik.com/free-photo/portrait-young-beautiful-woman-with-smoky-eyes-makeup-pretty-young-adult-girl-posing-studio-closeup-attractive-female-face_186202-4439.jpg" name="John Doe" />
            </Review>
            <Review>
              <Review.Content>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi assumenda unde ut ab atque officia nobis nesciunt minima non recusandae.</Review.Content>
              <Review.Author img="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1395880969.1709769600&semt=sph" name="John Doe" />
            </Review>
        </div>
      </section>
        
);
}



export default Home
// https://img.freepik.com/free-photo/fresh-coffee-steams-wooden-table-close-up-generative-ai_188544-8923.jpg