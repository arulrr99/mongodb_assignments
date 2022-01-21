MongoDB Lab Assignment Day- 1
-----------------------------

MongoDB Exercise in mongo shell

Connect to a running mongo instance, use a database named mongo_practice. Document all your queries in a javascript file to use as a reference.

Query/Find documents
1. get all documents
2. get all documents with writer set to "Quentin Tarantino"
3. get all documents where actors include "Brad Pitt" 
4. get all documents with franchise set to "The Hobbit"
5. get all movies released in the 90s
6. get all movies released before the year 2000 or after 2010

Queries to find documents
1) db.movies.find()
2) db.movies.find({writer:"Quentin Tarantino"})
3) db.movies.find({actors:"Brad Pitt"})
4) db.movies.find({franchise:"The Hobbit"})
5) db.movies.find({$and:[{Year:{$gt:1900}},{Year:{$lt:2000}}]})
6) db.movies.find({$or:[{Year:{$lt:2000}},{Year:{$gt:2010}}]})


Update documents
1. add a synopsis to "The Hobbit: An Unexpected Journey" : "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."
2. add a synopsis to "The Hobbit: The Desolation of Smaug" : "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."
3 add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"

Queries to update documents.
1) db.movies.updateOne({title:"The Hobbit: An Unexpected Journey"},{$set:{synopsis: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})
2) db.movies.updateOne({title:"The Hobbit: The Desolation of Smaug"},{$set:{synopsis:"The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."}})
3) db.movies.updateOne({title:"Pulp Fiction"},{$push:{actors:"Samuel L. Jackson"}})




Text Search
1.find all movies that have a synopsis that contains the word "Bilbo"
2.find all movies that have a synopsis that contains the word "Gandalf"
3.find all movies that have a synopsis that contains the word "Bilbo" and not the word "Gandalf"
4.find all movies that have a synopsis that contains the word "dwarves" or "hobbit"
5.find all movies that have a synopsis that contains the word "gold" and "dragon"

Queries for text search
1) db.movies.createIndex({title:"text",writer:"text",franchise:"text",synopsis:"text"})
   db.movies.find({$text:{$search:"Biblo"}})
2) db.movies.find({$text: {$search: "Gandalf"}})
3) db.movies.find({$text: {$search: "Bilbo -Gandalf"}})
4) db.movies.find({$text: {$search: "dwarves hobbit"}})
5) db.movies.find({$text: {$search: "gold dragon"}})



Delete Documents
1.delete the movie "Pee Wee Herman's Big Adventure"
2.delete the movie "Avatar"

Queries to delete documents
1) db.movies.remove({title: "Pee Wee Herman's Big Adventure"})
2) db.movies.remove({title: "Avatar"})




Quering related to collections

1.find all users
2.find all posts
3.find all posts that was authored by "GoodGuyGreg"
4.find all posts that was authored by "ScumbagSteve"
5.find all comments
6.find all comments that was authored by "GoodGuyGreg"
7.find all comments that was authored by "ScumbagSteve"
8.find all comments belonging to the post "Reports a bug in your code"


Queries 
1) db.users.find()
2) db.posts.find()
3) db.posts.find({username:"GoodGuyGreg"})
4) db.posts.find({username: "ScumbagSteve"})
5) db.comments.find()
6) db.comments.find({username: "GoodGuyGreg"})
7) db.comments.find({username: "ScumbagSteve"})
8) db.comments.find({post: "61e69bad9014f9a932063630"})






