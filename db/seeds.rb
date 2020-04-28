# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Category.destroy_all
Activity.destroy_all

health = Category.create(name: "health")
fitness = Category.create(name: "fitness")
travel = Category.create(name: "travel")
finance = Category.create(name: "finance")
entertainment = Category.create(name: "entertainment")
wellbeing = Category.create(name: "wellbeing")


Activity.create(name: "walking", category: fitness)
Activity.create(name: "Yoga", category: fitness)
Activity.create(name: "reading", category: wellbeing)
Activity.create(name: "saving", category: finance)
Activity.create(name: "journaling", category: wellbeing)
Activity.create(name: "free-weights", category: fitness)
