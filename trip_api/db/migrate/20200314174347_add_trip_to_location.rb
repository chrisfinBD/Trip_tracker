class AddTripToLocation < ActiveRecord::Migration[6.0]
  def change
    add_column :locations, :trip_id, :bigint
  end
end
