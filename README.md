# LIRI Bot

LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data. 


### How to install:

* Install Node.js and npm in your laptop.
* In your terminal, run "git clone https://github.com/gugucode/LIRI_Bot.git" to download application.
* Or Download from https://github.com/gugucode/LIRI_Bot.
* After download, in your terminal, run "npm install" in the LIRI_Bot folder that has package.json.
* Create a file named .env, add the following to it, replacing the values with your API keys (no quotes) once you have them:

```
# Spotify API keys

SPOTIFY_ID=your-spotify-id
SPOTIFY_SECRET=your-spotify-secret

# Twitter API keys

TWITTER_CONSUMER_KEY=your-twitter-consumer-key
TWITTER_CONSUMER_SECRET=your-twitter-consumer-secret
TWITTER_ACCESS_TOKEN_KEY=your-access-token-key
TWITTER_ACCESS_TOKEN_SECRET=your-twitter-access-token-secret
```

### How to use LIRI
* **node liri.js my-tweets**
    * This will show your last 20 tweets and when they were created at in your terminal/bash window.

```
BasementOffice:LIRI_Bot$ node liri.js my-tweets

my-tweets

Mon 11 Jun 2018 17:15:18
"IBM  and the U.S. Department of Energy’s Oak Ridge National Laboratory (ORNL) today unveiled Summit, the departmen… https://t.co/l8SZTG23HY
Mon 11 Jun 2018 17:09:36
Working on UT LIRI bot homework, having fun!
Mon 11 Jun 2018 17:08:57
Happy coding! My first day at Twitter!
```

* **node liri.js spotify-this-song \'\<song name here\>\'**
    * If no song is provided then your program will default to "The Sign" by Ace of Base.
    * This will show the information about the song in your terminal/bash window

```
BasementOffice:LIRI_Bot$ node liri.js spotify-this-song "Hey Jude"

spotify-this-song "Hey Jude"

----------------
Artist: The Beatles
Song's name: Hey Jude - Remastered 2015
Preview url: null
Album: 1 (Remastered)
----------------
Artist: Wilson Pickett
Song's name: Hey Jude
Preview url: https://p.scdn.co/mp3-preview/f9bd7992e08e00c43e21ceeb3f06568cfd961913?cid=3b4245ec1b384e15aaae3b8b52746602
Album: Hey Jude
----------------
Artist: The Beatles
Song's name: Hey Jude
Preview url: null
Album: Love
```


* **node liri.js movie-this \'\<movie name here\>\'**
    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
    * This will output the following information to your terminal/bash window:
```
BasementOffice:LIRI_Bot$ node liri.js movie-this Frozen

movie-this "Frozen"

Title: Frozen
Year: 2013
IMDB Rating: 7.5
Rotten Tomatoes Rating: 90%
Country: USA
Language: English, Norwegian
Plot: When the newly-crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.
Actors: Kristen Bell, Idina Menzel, Jonathan Groff, Josh Gad
```


* **node liri.js do-what-it-says**
    * LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.

```
BasementOffice:LIRI_Bot$ node liri.js do-what-it-says

do-what-it-says


spotify-this-song "I Want it That Way"

----------------
Artist: Backstreet Boys
Song's name: I Want It That Way
Preview url: https://p.scdn.co/mp3-preview/e72a05dc3f69c891e3390c3ceaa77fad02f6b5f6?cid=3b4245ec1b384e15aaae3b8b52746602
Album: The Hits--Chapter One
----------------
Artist: Backstreet Boys
Song's name: I Want It That Way
Preview url: https://p.scdn.co/mp3-preview/b8c2410a5acb68b462be6ac85f1312430e2b149c?cid=3b4245ec1b384e15aaae3b8b52746602
Album: Millennium
----------------
Artist: Backstreet Boys
Song's name: I Want It That Way
Preview url: https://p.scdn.co/mp3-preview/f9f504a705fcaaf2f24b004b629725451014ad6c?cid=3b4245ec1b384e15aaae3b8b52746602
Album: The Essential Backstreet Boys

```


### Built With  

* Javascript 
* twitter, node-spotify-api, request, DotEnv and colors packages


### Contributing

Please contact Erin at meiyuechang@gmail.com for details on our code of conduct, and the process for submitting pull requests to us.

### Authors

* **Erin Mei** - *Initial work* - [Portfolio](https://gugucode.github.io/mysite/)

