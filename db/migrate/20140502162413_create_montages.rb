class CreateMontages < ActiveRecord::Migration
  def change
    create_table :montages do |t|
      t.string :name
      t.string :slug
      t.timestamps
    end
  end
end
