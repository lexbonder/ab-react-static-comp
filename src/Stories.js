import React from 'react';
import Story from './Story';
import Author from './Author'
import './Stories.css';

const Stories = (props) => {
  return (
    <div className='Stories'>

      <div className='stories-header'>
        <h3>{props.storiesTitle}</h3>
        <a href='#'>See more</a>
      </div>

      <div className='stories-grid'>
        {
          props.stories.map( (story, index) => {
            return (<Story img={story.img} 
                           title={story.title} 
                           desc={story.desc} 
                           authName={story.authName}
                           authImg={story.authImg}
                           estTime={story.estTime} />)
          })
        }
      </div>
    </div>
  )
}

export default Stories;
