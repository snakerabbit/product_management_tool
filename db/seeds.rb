# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Product.destroy_all
Property.destroy_all
ProductProperty.destroy_all

product1 = Product.create(name: "Chanel Makeup Brush", upc: '1234567890', available_on: '2018-05-03')
product2 = Product.create(name: "Chanel Perfume", upc: '1234567891', available_on: '2018-05-03')
product3 = Product.create(name: "Yves St Lauurent Concealer", upc: '1234567892', available_on: '2018-05-03')
product4 = Product.create(name: "Kat Von D Lipliner", upc: '1234567893', available_on: '2018-05-03')

property1 = Property.create(name: 'brand')
property2 = Property.create(name: 'color')
property3 = Property.create(name: 'description')

pp1 = ProductProperty.create(property_id: property1.id, value: 'Chanel', product_id: product1.id)
pp2 = ProductProperty.create(property_id: property1.id, value: 'Chanel', product_id: product2.id)
pp3 = ProductProperty.create(property_id: property1.id, value: 'Yves Saint Laurent', product_id: product3.id)
pp4 = ProductProperty.create(property_id: property1.id, value: 'Kat Von D', product_id: product4.id)
pp5 = ProductProperty.create(property_id: property2.id, value: 'Lolita', product_id: product4.id)
pp6 = ProductProperty.create(property_id: property2.id, value: 'Buff Ivory', product_id: product3.id)
pp7 = ProductProperty.create(property_id: property3.id, value: 'This foundation brush is designed to apply and blend fluid or compact cream foundations. ', product_id: product1.id)
pp8 = ProductProperty.create(property_id: property3.id, value: 'a modern, fresh and vibrant embodiment of the eternal scent.', product_id: product2.id)
pp9 = ProductProperty.create(property_id: property3.id, value: 'Versatile long-lasting lipliner for the rock n roller.  ', product_id: product4.id)
