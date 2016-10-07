class AddIndexToStories < ActiveRecord::Migration
  def change
    add_index :stories, :original_post_id
  end
end
