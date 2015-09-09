var favImg = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/2000px-Heart_coraz%C3%B3n.svg.png';
var rateImg = 'https://www.remarkablecoating.com/wp-content/uploads/2015/04/five-star-rating.jpg'
var myFavorite = ko.observableArray([{
        'name': 'Grindhouse Killer Burgers',
        'img': 'http://s3-media4.fl.yelpcdn.com/bphoto/MYdr2F_3YwcUyKv0VITzow/ms.jpg',
        'ph': '1+404-522-3444',
        'url': 'http://www.yelp.com/biz/grindhouse-killer-burgers-atlanta',
        'stars': rateImg,
        'rate': 4,
        'loc': {
            'lat': 33.7350597644043,
            'lng': -84.379862,
            'address': {
                'line1': '209 Edgewood Ave SE',
                'line2': 'Atlanta, GA 30303',
            }
        },
        'review': {
            'img': favImg,
            'txt': 'This place has amazing gourmet burgers. I would definitely invite my friends and family to give it a try.',
        }
    },

    {
        'name': 'Fire Station 19',
        'img': 'http://s3-media3.fl.yelpcdn.com/bphoto/Yo1oLBvKPN2aX5_xZ_BXHw/ms.jpg',
        'ph': '1+404-853-3413',
        'url': 'http://www.yelp.com/biz/fire-station-19-atlanta',
        'stars': rateImg,
        'rate': 5,
        'loc': {
            'lat': 33.78323,
            'lng': -84.380052,
            'address': {
                'line1': '1063 N Highland Ave NE',
                'line2': 'Atlanta, GA 30306',
            }
        },
        'review': {
            'img': favImg,
            'txt': 'The local Fire Station help our community in many ways. I am glad they are around and show support.',
        }
    },

    {
        'name': 'Sweet Auburn Bakery',
        'img': 'http://s3-media2.fl.yelpcdn.com/bphoto/mRLro-BRrTjpuCKa_UqEiA/ms.jpg',
        'ph': '1+678-927-9401',
        'url': 'http://www.yelp.com/biz/sweet-auburn-bakery-atlanta',
        'stars': rateImg,
        'rate': 4.5,
        'loc': {
            'lat': 33.75404,
            'lng': -84.37986,
            'address': {
                'line1': '209 Edgewood Ave SE',
                'line2': 'Atlanta, GA 30303',
            }
        },
        'review': {
            'img': favImg,
            'txt': 'If you have a sweet tooth this is the spot to be. I would reccomond to all. Go for the donuts.',
        }
    }, {
        'name': 'Variety Playhouse',
        'img': 'http://s3-media2.fl.yelpcdn.com/bphoto/pXP6D8UtNkY3AqpasPzQIw/ms.jpg',
        'ph': '1+404-524-7354',
        'url': 'http://www.yelp.com/biz/variety-playhouse-atlanta',
        'stars': rateImg,
        'rate': 4,
        'loc': {
            'lat': 33.76353,
            'lng': -84.35095,
            'address': {
                'line1': '1099 Euclid Avenue',
                'line2': 'Atlanta, GA 30307',
            }
        },
        'review': {
            'img': favImg,
            'txt': 'If you\'re looking for a fun night out this is the place to be. Awesome DJ and nice cold drinks. Gather up a bunch of friends and enjoy a night in the city.',
        }
    },

    {
        'name': 'Moods Music',
        'img': 'http://s3-media1.fl.yelpcdn.com/bphoto/50j4Y4CAOB1d0sZ8Q9ZTRg/ms.jpg',
        'ph': '1+404-653-0724',
        'url': 'http://www.yelp.com/biz/moods-music-atlanta',
        'stars': rateImg,
        'rate': 5,
        'loc': {
            'lat': 33.75323,
            'lng': -84.350052,
            'address': {
                'line1': '1131 Euclid Ave NE',
                'line2': 'Atlanta, GA 30307',
            }
        },
        'review': {
            'img': favImg,
            'txt': 'Best music in town. Love the recommendations. Nice & Funky style.',
        }
    },

    {
        'name': 'Star Provisions',
        'img': 'http://s3-media2.fl.yelpcdn.com/bphoto/ZvVDO8VNTdzUYPczbJYvIw/ms.jpg',
        'ph': '1+404-365-0410',
        'url': 'http://www.yelp.com/biz/star-provisions-atlanta',
        'stars': rateImg,
        'rate': 4.5,
        'loc': {
            'lat': 33.7868423461914,
            'lng': -84.4122543334961,
            'address': {
                'line1': '1198 Howell Mill Rd NW',
                'line2': 'Atlanta, GA 30318',
            }
        },
        'review': {
            'img': favImg,
            'txt': 'Best deli in town. With Delicious gourmet cheese. Must try!',
        }
    },
]);
