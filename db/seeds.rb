# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json'

seed_resource_dir = "#{__dir__}/seed_resources/"

puts 'Cleaning Database...'
Exercise.destroy_all
Training.destroy_all
puts 'Cleaned Database'
puts '---------------------------'

puts 'Creating exercises...'
exercises_json = JSON.parse(File.read("#{seed_resource_dir}/exercises.json"))
exercises_json['exercises'].each do |exercise|
  attributes = {
    name: exercise['name'],
    trainings: exercise['trainings'],
    instruction: exercise['instruction'],
    price: exercise['price']
  }
  Exercise.create!(attributes)
end
puts "Created #{Exercise.count} exercises"
puts '---------------------------'

puts 'Creating training...'
trainings_json = JSON.parse(File.read("#{seed_resource_dir}/trainings.json"))
trainings_json['trainings'].each do |training|
  attributes = {
    total: training['total']
  }
  Training.create!(attributes)
end
puts "Created #{Training.count} training"
puts '---------------------------'
