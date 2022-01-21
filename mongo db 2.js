MongoDB - Aggregation Exercises Day-2

show dbs
use population
show collections
//use zipcodes collection - db.zipcodes.aggregate(........)

Atlanta Population

1. use db.zipcodes.find() to filter results to only the results where city is ATLANTA and state is GA.
2. use db.zipcodes.aggregate with Smatch to do the same as above.
3. use $group to count the number of zip codes in Atlanta. 
4. use $group to find the total population in Atlanta.

Queries
1) db.zipcodes.find({city:"ATLANTA",state:"GA"})
2)db.zipcodes.aggregate([{$match:{city:"ATLANTA",state:"GA"}}])
3)db.zipcodes.aggregate([{$match:{city:"ATLANTA"}},{$group:{"_id":"$city",count:{"$sum":1}}}])
4) db.zipcodes.aggregate([{$match:{city:"ATLANTA"}},{$group:{"_id":"$city", totalpopulation:{"$sum":"$pop"}}}])



Population by state
1. use aggregate to calculate the total population for each state 
2. sort the results by population, highest first 
3. limit the results to just the first 3 results. What are the top 3 states in population?

Queries
1) db.zipcodes.aggregate([{$group:{"_id":"$state",totalPopulation:{"$sum":"$pop"}}}])
2) db.zipcodes.aggregate([{$group:{"_id":"$state",totalPopulation:{"$sum":"$pop"}}},{$sort:{totalPopulation:-1}}])
3) db.zipcodes.aggregate([{$group:{"_id":"$state",totalPopulation:{"$sum":"$pop"}}},{$sort:{totalPopulation:-1}},{$limit:3}])




Population by city
1. use aggregate to calculate the total population for each city (you have to use city/state combination). 
You can use a combination for the_id of the Sgroup: { city: 'Scity', state: 'Sstate')
2. sort the results by population, highest first
3. limit the results to just the first 3 results. What are the top 3 cities in population?
4. What are the top 3 cities in population in Texas?

Queries
1) db.zipcodes.aggregate([{$group:{"_id":{state:"$state",city:"$city"},totalPopulation:{"$sum":"$pop"}}}])
2) db.zipcodes.aggregate([{$group:{"_id":{state:"$state",city:"$city"},totalPopulation:{"$sum":"$pop"}}},{$sort:{totalPopulation:-1}}])
3) db.zipcodes.aggregate([{$group:{"_id":"$city",totalPopulation:{"$sum":"$pop"}}},{$sort:{totalPopulation:-1}},{$limit:3}])
4) db.zipcodes.aggregate([{$match:{city:"TEXAS"}},{$group:{"_id":"$city",totalPopulation:{"$sum":"$pop"}}},{$sort:{totalPopulation:-1}},{$limit:3}])




Bonus
1. Write a query to get the average city population for each state.
2. What are the top 3 states in terms of average city population?

Queries
1) db.zipcodes.aggregate([{$group:{"_id":{state:"$state",city:"$city"},avgPopulation:{"$sum":"$pop"}}},{$sort:{,state:1,city:1,avgPopulation:-1}}])
2) db.zipcodes.aggregate([{$group:{"_id":{state:"$state",city:"$city"},avgPopulation:{"$sum":"$pop"}}},{$sort:{,state:1,city:1,avgPopulation:-1}},{$limit:3}])
