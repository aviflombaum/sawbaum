class CreateClips < ActiveRecord::Migration
  def change
    create_table :clips do |t|
      t.belongs_to :montage
      t.string :vine_video_url
      t.string :opacity
      t.string :z_index
      t.string :left
      t.string :top
      t.string :shape
      t.string :width
      t.string :height
      
      t.timestamps
    end
  end
end
