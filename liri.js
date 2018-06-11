require("dotenv").config();
var colors = require('colors');
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

// console.log(keys.twitter)
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

function getTweets(){
    client.get('statuses/user_timeline', function(error, tweets, response) {
        if(error){
            return console.log('Error occurred: ' + error);
        } 

        for(var i = 0; i < tweets.length ; i++){
            var t = tweets[i].created_at.split(" ");
            var time_string = t[0] + " "+t[2]+ " "+ t[1] + " " + t[5] + " " + t[3];
            console.log(time_string.green);
            console.log(tweets[i].text);
        }
    
    });
}

function spotifySong(song){
    spotify.search({ type: 'track', query: song, limit: 3 }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
            
        for(var i = 0; i < data.tracks.items.length; i++){
            var song_info = data.tracks.items[i]
            console.log("----------------")
            console.log("Artist: ".green + song_info.artists[0].name);
            console.log("Song's name: ".green + song_info.name);
            console.log("Preview url: ".green + song_info.preview_url);
            console.log("Album: ".green + song_info.album.name); 

        }
       
    });
}

var command = process.argv[2];
switch(command){
    case "my-tweets":
        getTweets();
        break;
    case "spotify-this-song":
        if(process.argv.length == 4){
            spotifySong(process.argv[3]);
        }else{
            console.log("Please give me the name of the song!")
        }
        break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
        doWhatItSays();
        break;
    default:
        console.log("Sorry, I don't understand.")
        break;
}