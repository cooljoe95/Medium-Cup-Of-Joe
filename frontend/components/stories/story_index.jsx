import React from 'react';

class StoryIndex extends React.Component{
  componentDidMount() {
    this.props.requestStories();
  }

  render(){
    const originalStories = (story) => {
      if(story.response_id === null){
        return <li key={story.id} className="original-story-index-view">{story.title}</li>;
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
