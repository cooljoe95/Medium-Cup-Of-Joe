# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- **`POST /api/users`** (Create User)
- **`PATCH /api/users`** (Update elements of a user)
- **`GET /api/users/:id`** (List all stories written by one user)

### Session

- **`POST /api/session`** (Log in)
- **`DELETE /api/session`** (Log out)

### Stories

- **`GET /api/stories`** (Get all the stories that match parameter)
  - Stories index/search
  - accepts `tag_name` query param to list stories by tag
  - accepts pagination params (if I get there)
- **`POST /api/stories`** (Create new story)
- **`GET /api/stories/:id`** (Display a singular story)
- **`PATCH /api/stories/:id`** (Update a story)
- **`DELETE /api/stories/:id`** (Delete a story)


### Tags

- A story's tags will be included in the story show template
- **`GET /api/tags`**
  - includes query param for typeahead suggestions
- **`POST /api/stories/:story_id/tags`**: add tag to story by name
  - if story doesn't already exist, it will be created
- **`DELETE /api/stories/:story_id/tags/:tag_name`**: remove tag from story by
  name
