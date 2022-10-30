let activities = [
    {
    timestamp: new Date().getTime(),
    text: "Ate lunch",
    user: {
    id: 1, name: 'Nate',
    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Ari', text: 'Me too!' }]
    },
    {
    timestamp: new Date().getTime(),
    text: "Woke up early for a beautiful run",
    user: {
    id: 2, name: 'Ari',
    avatar: "http://www.croop.cl/UI/twitter/images/doug.jpg"
    },
    comments: [{ from: 'Nate', text: 'I am so jealous' }]
    },
   ]


var names = ["great ", "bright", "samson"]
   
   hello={activities, names};
   console.log(hello)