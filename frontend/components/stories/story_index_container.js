import { connect } from 'react-redux';
import StoryIndex from './story_index';
import { requestStories } from '../../actions/story_actions';

const mapStateToProps = (state) => (
  {
    stories: state.stories
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestStories: () => dispatch(requestStories())
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryIndex);
