import React from 'react'
import './Story.css'

function Story() {
  return (
    <>
    <div className='container-fluid story-container mt-5'>
        <div className='ourstory-div'>
        <h2 className='ourstory-head'>Our Story</h2>
        </div>
        
        <div className='row storycontainer-row'>
            <div className='col-lg-6 storyimg-col'>
                <img className='img-fluid' src="/assets/ourstory-img.avif" alt="" />

            </div>
            <div className='col-lg-6 stoy-col'>
              <h1 className='love-head'>For People Who Love Plants</h1>
              <p className='love-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at consectetur molestiae numquam doloribus eligendi qui quaerat culpa aut atque ducimus inventore eveniet quo laboriosam consequatur ex magni perferendis placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at consectetur molestiae numquam doloribus eligendi qui quaerat culpa aut atque ducimus inventore eveniet quo laboriosam consequatur ex magni perferendis placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at consectetur molestiae numquam doloribus eligendi qui quaerat culpa aut atque ducimus inventore eveniet quo laboriosam consequatur ex magni perferendis placeat!Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, at consectetur molestiae numquam doloribus eligendi qui quaerat culpa aut atque ducimus inventore eveniet quo laboriosam consequatur ex magni perferendis placeat!</p>

            </div>

        </div>

    </div>
      
    </>
  )
}

export default Story
