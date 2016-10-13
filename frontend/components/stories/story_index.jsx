import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryFormContainer from '../story_form/story_form_container';

class StoryIndex extends React.Component{
  componentDidMount() {
    this.props.requestStories();
  }

  render(){
    const originalStories = (story) => {
      return <StoryIndexItem key={story.id} story={story} />;
    };

    const unfollowedAtEnd = [];

    const ableToAdd = (story) => {
      if(window.currentUser.following === undefined){
        window.currentUser.following = {};
      }
      if(window.currentUser.following[(story.author.id)] !== undefined){
        return true;
      } else {
        unfollowedAtEnd.push(story);
        return false;
      }
    };


    return (
      <div className="story-index">
        <img
          src={window.twitterAssets.secondImage}
          className="home-splash"></img>
        <div className="stories-and-feed">
          {window.currentUser ? <StoryFormContainer className="new-short-story" smallForm="true"/> : ""}
          <ul className="original-stories-container">
            {Object.keys(this.props.stories).map((myKey) => {
              const story = this.props.stories[myKey];
              let storyItem;
              if(!window.currentUser){
                storyItem = originalStories(story);
              } else {
                storyItem = ableToAdd(story) ? originalStories(story) : null;
              }
              return storyItem;
            })}
            {unfollowedAtEnd.map((story) => {
              return originalStories(story);
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default StoryIndex;
