import React from 'react';
import StoryIndexItem from './story_index_item';
import StoryFormContainer from '../story_form/story_form_container';
import { Link } from 'react-router';

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

    const homeSplash = () => {
      if(!window.currentUser){
        return (
          <div className="home-splash">
            <span className="first-text">Move thinking forward.</span>
            <span className="second-text">Medium is a community of readers and writers offering unique perspectives on ideas large and small.</span>
            <span className="third-text">Sign up to read and interact with what matters most to you.</span>
            <Link to="/signup" className="link-to-signup">Get Started</Link>
          </div>
        );
      } else {
        return "";
      }
    }


    return (
      <div className="story-index">
        {homeSplash()}
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
