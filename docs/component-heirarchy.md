## Component Heirarchy

**AuthFormContainer**
 - AuthForm
 - Twitter Login
 - Facebook Login
 - Google Login
 - Email Login

**HomeContainer**
 - Home
  - HeaderContainer
  - NewShortStoryContainer
  - StoriesContainer
  
**HeaderContainer**
  - Navbar
    - Search bar
    - User Info
    - Categories
  
**NewShortStoryContainer**
 - User Info
 - Story body

**StoriesContainer**
 - HeaderContainer
 - StoryDetailContainer
 - FootersContainer

**ArticlePreviewContainer**
 - Picture (optional)
 - Title
 - Subtitle
 
**AuthorContainer**
 - User Profile Pic
 - User Name

**StoryIndexContainer**
 - Stories
  - Tags
  - AuthorContainer
  - Article Info
    - Date created
    - Length of time to read 
  - ArticlePreviewContainer
  - ActionsContainer

**ActionsContainer**
 - Like
 - Comment
 - Follow

**StoryDetailContainer**
 - AuthorContainer
 - Story
    - Title
    - Pics
    - Links
    - Text
 - Tags
 - ActionsContainer
 
**FootersContainer**
 - SimilarStoriesContainer
 - ResponsesContainer
 
**SnapshotStoryContainer**
 - Pic
 - Title
 - Author
 - Likes
 
**SimilarStoriesContainer**
 - SnapshotStoryContainer
 - SnapshotStoryContainer
 - SnapshotStoryContainer

**ResponsesContainer**
 - NewShortStoryContainer
 - Responses
   - Responder's Info
   - Response Text
   - Likes
   
**NewStoryContainer**
 - HeaderContainer
 - AuthorContainer
 - Title
 - Textarea

**TagsContainer**
 - HeaderContainer
 - TaggedArticlesContainer
 - OtherTagsContainer
 
**TaggedArticleContainer**
 - Tag Name
 - Follow Status
 - Stories
    - SnapshotStoryContainer

**OtherTagsContainer**
 - RelatedTagsContainer
 - TagsIFollowContainer
 
**RelatedTagsContainer**
 - Tags
 
**TagsIFollowContainer**
 - Tags


## Routes

|Path                                                   | Component   |
|-------------------------------------------------------|-------------|
| "/sign-up"                                            | "AuthFormContainer" |
| "/sign-in"                                            | "AuthFormContainer" |
| "/home"                                               | "HomeContainer" |
| "/home/story/new"                                     | "NewStoryContainer" |
| "/home/story/:id"                                     | "StoriesContainer" |
| "/home/tags/:tags_id/"                                | "TagsContainer" |

