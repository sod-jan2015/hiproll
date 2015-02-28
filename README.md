# hiproll

Features:
* Grab a list of all students who have connected to hipchat. (https://sodjan2015.hipchat.com/)
* Create a table with columns for each student who has connected, and rows for each day since the beginning of this bootcamp.
* Put the earliest time each student was seen on hipchat, for each day.
* For students who were not on hipcat for a give day, put absent.

Additional (Starter) Features:
*On the Node.js server, gather data from hipchat. 
*Have paths on node.js, such as /hiproll/rooms, which will respond with the rooms object from hipchat, or a /hiproll/roomname path, which will respond with the last 75 messages object from hipchat. 
*Then, in angular, write a program which processes the rooms and message data, and displays it. 
*If possible, sort through the data, and display the number of messages per day in each room.


Software Requirements:
*Use node.js with express to connect to hipchat.
*The node server should accept a request for a specific day, example
http://localhost:8000/2015-01-01/, and return a json object that
contains the a key for each student and the value should be the
first time they were seen on that date.
*Use angular to connect to the your node.js server and request the
data for all the dates since the beginning on this class, 2015-01-19.
*Use angular to display the data about students in a table, extra
credit for sorting and filtering options. =)

Way of working:
* Clone this repo and work in your own branch.
* Push your branch to this repo at least daily to have a backup of your work.
* Respect each others flow. http://heeris.id.au/2013/this-is-why-you-shouldnt-interrupt-a-programmer/
