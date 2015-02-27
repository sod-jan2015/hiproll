# hiproll
Features:
#1: Grab a list of all students who have connected to hipchat.
(https://sodjan2015.hipchat.com/)
#2: Create a table with columns for each student who has connected,
and rows for each day since the beginning of this bootcamp.
#3: Put the earliest time each student was seen on hipchat, for each
day.
#4 For students who were not on hipcat for a give day, put absent.

Software Requirements:
Use node.js with express to connect to hipchat.

The node server should accept a request for a specific day, example
http://localhost:8000/2015-01-01/, and return a json object that
contains the a key for each student and the value should be the
first time they were seen on that date.

Use angular to connect to the your node.js server and request the
data for all the dates since the beginning on this class, 2015-01-19.

Use angular to display the data about students in a table, extra
credit for sorting and filtering options. =)
