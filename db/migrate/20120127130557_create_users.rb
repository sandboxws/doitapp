class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :uid
      t.string :twitter_handle
      t.string :twitter_token
      t.string :twitter_secret
      t.string :name
      t.string :twitter_image_url

      t.timestamps
    end
  end
end
