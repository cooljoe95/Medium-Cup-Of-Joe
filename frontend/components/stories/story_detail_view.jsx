import React from 'react';
import { Link } from 'react-router';

import StoryDetail from "./story_detail";


const StoryShow = ({ story, storyId, requestStory, children }) => {
	debugger
  const stories = {
    [story.id]: story
  };

  return(
    <div className="single-story-show">
      <div className="right-half bench-details">
        <StoryDetail story={story} />
      </div>
    </div>
  );
};

export default StoryShow;
