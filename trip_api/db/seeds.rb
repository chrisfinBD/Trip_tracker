
# Kill all the data
Location.destroy_all

Trip.destroy_all

# Add template data 
 t = Trip.new
t.title = "The first trip"
 t.favorite = false
 t.save
 puts t.errors.full_messages
l1 = Location.new
 l1.title = "Disney California"
 l1.address = "1313 Disneyland Dr, Anaheim, CA 92802"
 l1.trip_id = Trip.last.id
 l1.save

 l2 = Location.new
l2.title = "The Good Place"
 l2.address  = "317 S 6th St, Las Vegas, NV 89101"
 l2.trip_id = Trip.last.id
 l2.save


# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
