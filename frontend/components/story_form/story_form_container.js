import { connect } from 'react-redux';
import StoryForm from './story_form';
import { requestStory } from '../../actions/story_actions';

const mapStateToProps = (state) => (
  {
    story: state.story
  }
);

const mapDispatchToProps = (dispatch) => (
  {
    requestStories: (id) => dispatch(requestStory(id))
  }
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoryForm);
