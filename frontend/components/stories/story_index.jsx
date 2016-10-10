import React from 'react';
import StoryIndexItem from './story_index_item';

class StoryIndex extends React.Component{
  componentDidMount() {
    this.props.requestStories();
  }

  render(){
    const originalStories = (story) => {
      return <StoryIndexItem key={story.id} story={story} />;
    };

    return (
      <div className="story-index">
        <img
          src={window.twitterAssets.secondImage}
          className="home-splash"></img>
        <div className="stories-and-feed">
          <ul className="original-stories-container">
            {Object.keys(this.props.stories).map((myKey) => {
              const story = this.props.stories[myKey];

              return originalStories(story);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default StoryIndex;
