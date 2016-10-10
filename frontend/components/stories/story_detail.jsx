import React from 'react';
import { Link } from 'react-router';


const StoryDetail = ({story}) => {
	debugger
	return (
		<div>
			<div className="story-show">
				<span className="title">{window.currentStory ? window.currentStory.title : "Haha"}</span>
				<span className="body">{window.currentStory ? window.currentStory.body : "LOL"}</span>
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
// 			debugger
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
