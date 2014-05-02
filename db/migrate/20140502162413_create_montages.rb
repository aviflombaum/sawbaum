class CreateMontages < ActiveRecord::Migration
  def change
    create_table :montages do |t|

      t.timestamps
    end
  end
end
