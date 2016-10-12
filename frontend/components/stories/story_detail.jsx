import React from 'react';
import { Link } from 'react-router';
import AuthorInfoItem from './author_info_item';


const StoryDetail = ({story}) => {
  story.responses = story.responses || {};
  const comments = Object.keys(story.responses);

	return (
    <div className="story-detail">
      <AuthorInfoItem author={story.author || {}} size="65" />
      <div className="story-show-container">
  			<span className="title">{story.title}</span>
  			<span className="body" dangerouslySetInnerHTML={{__html: story.body}}></span>
  		</div>
      <div className="comment-container">
        <ul className="comments">
          {comments.map((key) => { return <li className="comment" key={`comment-${key}`}>{story.responses[key].title}</li>;})}
        </ul>
      </div>
    </div>
	);
};

export default StoryDetail;
//
// export default class StoryDetailView extends React.Component{
//
// 	constructor(props){
// 		super(props)
// 		const setCurrentStory = (data) => { window.currentStory = (data)};
// 		if(!window.currentStory){
//
// 			fetchStory(this.props.params.id, setCurrentStory);
// 		}
// 	}
//
// 	componentWillUnmount(){
//
// 	}
//
// 	render(){
// 		return(
// 			<div className="story-show">
// 				<span className="title">{window.currentStory ? window.currentStory.title : "Haha"}</span>
// 				<span className="body">{window.currentStory ? window.currentStory.body : "LOL"}</span>
// 			</div>
// 		);
// 	}
// }
