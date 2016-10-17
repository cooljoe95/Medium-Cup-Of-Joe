# Medium Cup Of Joe
Medium Cup of Joe is a web application inspired by Medium and build using Ruby on Rails, React, and Redux. This site features stories for users to post as well as opportunities to comment and style responses.

[Link](https://medium-cup-of-joe.herokuapp.com/) to app.

## Screenshots
### Homescreen
![tag](/app/assets/images/Screen Shot 2016-10-17 at 2.28.17 AM.png)

### Story Detail View
![tag](/app/assets/images/Screen Shot 2016-10-17 at 2.28.35 AM.png)

### New Story View
![tag](/app/assets/images/Screen Shot 2016-10-17 at 2.30.28 AM.png)

## Technical Details
Medium Cup of Joe utilizes stateToHTML library as well as the Megadraft.js library to interpret the rich text from the user. 

The code below shows the checking required to ensure that the user did in fact enter a string and gets rid of the excess space in the beginning should the user have inputted an extra line or two. The updating of the responses allows for redux to update whenever a comment is made. Because it is looking through HTML code, many of the traditional checks for newlines need to be rethought.

```javascript
  empty(string){
    const arrayOfParagraphs = string.replace(/(\r\n|\n|\r|&nbsp;)/gm,"").split("<p>");

    for(let i = 0; i < arrayOfParagraphs.length; i++){
      if (!["", "<br></p>", "</p>"].includes(arrayOfParagraphs[i])){
        if(i > 0){
          this.state.body = string.split("\n").slice(i - 1).join("\n");
        } else {
          this.state.body = string;
        }
        return false;
      }
    }
    return true;
  }

  createNewStory(e){
    e.preventDefault();
    this.state.body = stateToHTML(this.state.body.getCurrentContent());
    if(!this.empty(this.state.body)){
      const story = Object.assign({}, this.state);
      if (this.props.originalPost){
        story.original_post_id = this.props.originalPost.id;
        this.setState({body: editorStateFromRaw(null)});
        let i = 0;
        while (this.props.originalPost.responses[i] !== undefined) {
          i += 20;
        }
        this.props.originalPost.responses[i] = story;
      }
      this.props.createStory({story});
    }
  }
```

### Features
* Add stories
* Create a feed of people's stories you'd like to follow
* Show some love and like other people's stories
* Create and read rich text stories
* Comment on stories

### Technologies Used

* React.js
* Redux
* Megadraft.js
* StateToHTML
* Ruby on Rails
* JSON API
* PostgreSQL
* Heroku


