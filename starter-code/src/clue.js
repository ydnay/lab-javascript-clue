// Characters Collection

let charactersArray = [
  mrGreen = {
    first_name: 'Jacob',
    last_name: 'Green',
    color: 'green',
    description: 'He has a lot of connections',
    age: 45,
    image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
    occupation: 'Entrepreneur',
  },
  drOrchid = {
    frst_name: 'Doctor',
    lst_name: 'Orchid',
    color: 'white',
    description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
    age: 26,
    image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg',
    ocupation: 'Scientist',
  },
  profPlum = {
    first_name: 'Victor',
    last_name: 'Plum',
    color: 'purple',
    description: 'Billionare video game designer',
    age: 22,
    image: 'https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg,',
    occupation: 'Designer',
  },
  missScarlet = {
    first_name: 'Kasandra',
    last_name: 'Scarlet',
    color: 'red',
    description: 'She is an A-list movie star with a dark past',
    age: 31,
    image: 'https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg',
    occupation: 'Actor',
  },
  mrsPeacock = {
    first_name: 'Eleanor',
    last_name: 'Peacock',
    color: 'blue',
    description: 'She is from a wealthy family and uses her status and money to earn popularity',
    age: 36,
    image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg',
    occupation: 'Socialité',
  },
  mrMustard = {
    first_name: 'Jack',
    last_name: 'Mustard',
    color: 'yellow',
    description: 'He is a former football player who tries to get by on his former glory',
    age: 62,
    image: 'https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg',
    occupation: 'Retired Football player',
  }
]

// Rooms Collection

let roomsArray = ['Dinning Room', 'Conservatory', 'Kitchen', 'Study', 'Library', 'Billiard Room', 'Lounge', 'Ballroom', 'Hall', 'Spa', 'Living Room', 'Observatory', 'Theater', 'Guest House', 'Patio'];

// Weapons Collection

let weaponsArray = [
  rope = {
    weight: 10,
  },
  knife = {
    weight: 8,
  },
  candlestick = {
    weight: 2,
  },
  dumbbell = {
    weight: 30,
  },
  poison = {
    weight: 2,
  },
  axe = {
    weight: 15,
  },
  bat = {
    weight: 13,
  },
  trophy = {
    weight: 25,
  },
  pistol = {
    weight: 20,
  }
];

// Helper function returns a random int ranged [0, int)
function getRandomInt(int) {
  return Math.floor(Math.random() * int);
}

// Create a method randomSelector to randomly select one element from a card stack.
function randomSelector(arr) {
  return arr[getRandomInt(arr.length)];
}

function pickMistery() {
  let misteryEnvelope = [];
  misteryEnvelope.push(randomSelector(charactersArray), randomSelector(weaponsArray), randomSelector(roomsArray));
  return misteryEnvelope;
}