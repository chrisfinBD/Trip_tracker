class CreateTrips < ActiveRecord::Migration[6.0]
  def change
    create_table :trips do |t|
      t.string :title
      t.datetime :start_date
      t.boolean :favorite
      t.string :locations

      t.timestamps
    end
  end
end
