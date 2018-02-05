var conference = {
    speakers: [
	{
            "id": 1, "name": "Bogdan Andrei Iancu",
            "title": "OpenSIPS Founder",
            "image": "http://i.imgur.com/c0q8TjB.png",
            "twitter": "https://twitter.com/opensips",
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
	{
	    
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
	    
	{
            "id": 11, "name": "Giovanni Maruzzelli",
            "title": "OpenTelecom.it",
            "image": "http://i.imgur.com/heUiUgH.jpg?1",
            "twitter": "https://twitter.com/gmaruzz",
            "presentation": "FreeSWITCH clustering with OpenSIPS (done well)"
        },    
        //  {"id":12,"name":"","title":"", "image":"","twitter":"","presentation":""},
    ],
    schedule: [ 
        { id: "first-day",
	  active: "in active",
	  items: [ 
	    { time: "8:30-9:30", 
	      description: "Registration & Breakfast", 
	      subtitle: "Venue Front-Desk", 
	      icon: "assets/images/lunch.png" },
	    { time: "9:30-13:00", 
	      description: "Conference Day", 
	      subtitle: "Speakers TBA", 
	      icon: "assets/images/speaker.png" },
	    { time: "13:00-14:00", 
	      description: "Opensource Lunch", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/lunch.png" },
	    { time: "14:00-17:00", 
	      description: "Conference Day", 
	      subtitle: "Speakers TBA", 
	      icon: "assets/images/speaker.png" },
	    { time: "17:00-18:00", 
	      description: "Round Tables", 
	      subtitle: "Featuring Speakers & OpenSIPS Team", 
	      icon: "assets/images/round-table.png" }
	  ] 
	},
        { id: "second-day", 
	  active: "",
	  items: [ 
	    { time: "9:30-13:00", 
	      description: "Conference Day", 
	      subtitle: "Speakers TBA", 
	      icon: "assets/images/speaker.png" },
	    { time: "13:00-14:00", 
	      description: "Opensource Lunch", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/lunch.png" },
	    { time: "14:00-17:00", 
	      description: "Conference Day", 
	      subtitle: "Speakers TBA", 
	      icon: "assets/images/speaker.png" },
	    { time: "17:00-18:00", 
	      description: "Round Tables", 
	      subtitle: "Featuring Speakers & OpenSIPS Team", 
	      icon: "assets/images/round-table.png" }
	  ] 
	},
	{ id: "third-day", 
	  active: "",
	  items: [ 
	    { time: "10:00-13:00", 
	      description: "Interactive Demos", 
	      subtitle: "Workshops and Demos", 
	      icon: "assets/images/speaker.png" },
	    { time: "13:00-14:00", 
	      description: "Opensource Lunch", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/lunch.png" },
	    { time: "14:00-17:00", 
	      description: "Interactive Demos", 
	      subtitle: "Workshops and Demos", 
	      icon: "assets/images/speaker.png" }
	  ] 
	},
	{ id: "fourth-day", 
	  active: "",
	  items: [ 
	    { time: "9:00-17:00", 
	      description: "OpenSIPS Training", 
	      subtitle: "The OpenSIPs Training will cover the new clustering capabilities of OpenSIPS 2.4 . The concept of this training course is to spend the day building from the ground up a fully operational OpenSIPS cluster for typical class 4 VoIP services.", 
	      icon: "assets/images/training.png" },
	    { time: "13:00-14:00", 
	      description: "Opensource Lunch", 
	      subtitle: "Sponsored by OpenSIPS", 
	      icon: "assets/images/lunch.png" },
	    { time: "09:00-17:00", 
	      description: "FreeSWITCH Training", 
	      subtitle: "FreeSWITCH Training will cover the installation and configuration of FreeSWITCH. We will walk through making calls, administer various configurations, enable and utilize various modules. We'll also cover some additional functions of FreeSWITCH such as video call recording, video conferencing, Call Detail Recording, troubleshooting, logging, and interacting with Event Socket Library.", 
	      icon: "assets/images/training.png" }
	  ] 
	}
],
    sponsors: []
};
