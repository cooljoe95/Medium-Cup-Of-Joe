class AddColumnToStory < ActiveRecord::Migration
  def change
    add_column :stories, :original_post_id, :integer
  end
end
