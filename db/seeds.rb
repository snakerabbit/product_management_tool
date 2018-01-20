# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.create([
  {name: "Chanel Makeup Brush", upc: '1234567890', available_on: '2018-05-03'},
  {name: "Chanel Perfume", upc: '1234567891', available_on: '2018-05-03'},
  {name: "Yves Saint Laurent Concealer", upc: '1234567892', available_on: '2018-05-03'},
  {name: "Kat Von D LipLiner", upc: '1234567893', available_on: '2018-05-03'}
])
