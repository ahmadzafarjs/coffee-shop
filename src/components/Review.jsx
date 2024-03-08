import React from 'react'

function Review({children}) {
  return (
    <div className='w-[300px] p-3 bg-slate-100 rounded m-auto'>
      {children}
    </div>
  )
}
function Content({children}){
    return <p className='italic text-amber-700'>{children}</p>
}
function Author({img, name}){
    return <div className='flex items-center justify-start py-5  gap-2'>
        <img className='border-r-2 border-amber-700 w-12 h-12 object-cover rounded-full overflow-hidden' src={img} alt="" />
        <div>

        <h3 className='text-slate-600'>{name}</h3>
        <span>⭐⭐⭐⭐⭐</span>
        </div>
    </div>
}

Review.Content = Content;
Review.Author = Author;

export default Review
