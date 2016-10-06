import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component{
  componentDidMount() {
    this.props.requestStories();
  }

  render(){
    const originalStories = (story) => {
      if(story.response_id === null){
        return <StoryIndexItem key={story.id} story={story} />;
        // return ;
      }
    };

    return (
      <div className="story-index">
        <ul className="original-stories-container">
          {Object.keys(this.props.stories).map((myKey) => {
            const story = this.props.stories[myKey];
            return originalStories(story);
          })}
        </ul>
      </div>
    );
  }
}

export default StoryIndex;
