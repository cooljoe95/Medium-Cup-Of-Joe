import { connect } from 'react-redux';
import StoryShow from './story_detail_view';
// Actions
import { requestStory } from '../../actions/story_actions';
// Selectors
import { selectStory } from '../../reducers/selectors';


const mapStateToProps = (state, ownProps) => {
  const storyId = parseInt(ownProps.params.storyId);
  const story = selectStory(state.stories, storyId);
  return {
    storyId,
    story,
    session: state.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestStory: id => dispatch(requestStory(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryShow);
