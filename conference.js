var conference = {
    speakers: [
	{
            "id": 1, "name": "Bogdan Andrei Iancu",
            "title": "OpenSIPS Founder",
            "image": "http://i.imgur.com/c0q8TjB.png",
            "twitter": "opensips",
            "presentation": "OpenSIPS Keynote"
        },
        {
            "id": 2, "name": "Liviu Chiurcu",
            "title": "Sr. OpenSIPS Developer",
            "image": "http://i.imgur.com/LmSk7gI.jpg",
            "twitter": "liviuchirchu",
            "presentation": ""
        },
        {
            "id": 3, "name": "Razvan Crainea",
            "title": "Sr. OpenSIPS Developer",
            "image": "http://i.imgur.com/YbMlg4m.png",
            "twitter": "razvancrainea",
            "presentation": ""
        },
        {
            "id": 4, "name": "Alex Goulis",
            "title": "CEO @RateTel",
            "image": "http://i.imgur.com/FvHRqNc.png",
            "twitter": "ratetel",
            "presentation": ""
        },
        {
            "id": 5, "name": "Lorenzo Mangani",
            "title": "CEO @QXIP",
            "image": "http://i.imgur.com/XJS0Ihj.png",
            "twitter": "qxip",
            "presentation": "HEP in NodeJS"
        },
	{
            "id": 6, "name": "Peter Kelly",
            "title": "CEO @SourceVox",
            "image": "https://user-images.githubusercontent.com/1423657/31589533-a7cf4f5e-b203-11e7-8a52-bf2f2cfdf72a.png",
            "twitter": "p3k4y",
            "presentation": ""
        },
        {
            "id": 7, "name": "Flavio Goncalves",
            "title": "CEO @SIPPulse",
            "image": "http://i.imgur.com/5PS7U7r.png",
            "twitter": "opensips",
            "presentation": ""
        },
        {
            "id": 8, "name": "Dan Christian Bogos",
            "title": "Founder @ITSysCom",
            "image": "http://i.imgur.com/2D2AjWr.png",
            "twitter": "danbogos",
            "presentation": ""
        },
        {
            "id": 9, "name": "Lorenzo Miniero",
            "title": "Co-Founder @Meetecho",
            "image": "http://i.imgur.com/4rfCiZB.png",
            "twitter": "elminiero",
            "presentation": ""
        },
        {
            "id": 10, "name": "Alexandr Dubovikov",
            "title": "CTO @QXIP",
            "image": "http://i.imgur.com/F83gMim.png",
            "twitter": "adubovikov",
            "presentation": ""
        },
        //  {"name":"","title":"", "image":"","twitter":"","presentation":""},
    ],
    schedule: [ 
        { id: "first-day",
	  active: "in active",
	  items: [ 
	    { time: "8:00-9:00AM", 
	      description: "Coffee Break", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/speaker.png" },
	     { time: "9:00-10:00AM", 
	      description: "Opensource Lunch", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/lunch.png" } 
	  ] 
	},
        { id: "second-day", 
	  active: "",
	  items: [ 
	    { time: "9:00-10:00AM",
	      description: "Coffee Break", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/lunch.png" } 
	  ] 
	}
],
    sponsors: []
};
