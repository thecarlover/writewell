import React from 'react'

const Post = () => {
  return (
    <div className='post'>
        <div className='image'>
        <img src="https://images.unsplash.com/photo-1715271040278-9c6fcd6e669b?q=80&w=3542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt='pic1' />
        </div>
       
        <div className='texts'>
        <h2>A Black Fox</h2>
        <p className='info'>Ojasvi Mittal</p>
        <time>2024-05-11</time>
        <p className='summary'>The black fox, with its sleek ebony fur, moves through the shadows with a grace that seems almost supernatural. Its piercing amber eyes gleam with intelligence, reflecting the moon's silver light. A creature of mystery and enchantment, the black fox navigates the dense forests with silent steps, its presence leaving a trail of whispered legends in its wake. In folklore, it's often portrayed as a cunning trickster, embodying both darkness and cunning. Yet, there's an undeniable allure to its enigmatic nature, captivating all who encounter its elusive form.</p>

        </div>
      </div>
  )
}

export default Post