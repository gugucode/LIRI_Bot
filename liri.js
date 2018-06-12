require("dotenv").config();
var colors = require('colors');
var keys = require("./keys.js");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var request = require("request");
var fs = require("fs");
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// function appendlog(d){
//     fs.appendFile("log.txt",d,(error)=>{
//         if(error) throw error;
//     });
// }
// overwrite console.log function
console.log = function(d) {
    d = d + '\n';
    fs.appendFile("log.txt",d,(error)=>{
        if(error) throw error;
    });
    process.stdout.write(d);
  };

// get my tweets from my twitter account
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

// search song from sporify (limit 3 songs)
function spotifySong(song){
    spotify.search({ type: 'track', query: song, limit: 3 }, function(error, data) {
        if (error) {
          return console.log('Error occurred: ' + error);
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

// use request to get movie info from omdb API
function movieThis(movie){
    
    var url = "http://www.omdbapi.com/?apikey=trilogy&t="+movie;
    request(url,(error, response, body)=>{
        if(error){
            return console.log('Error occurred: ' + error);
        }
        
        var movie_detail = JSON.parse(body);
        console.log("Title: ".green + movie_detail.Title);
        console.log("Year: ".green + movie_detail.Year);
        console.log("IMDB Rating: ".green + movie_detail.imdbRating);
        if(movie_detail.Ratings && movie_detail.Ratings[1]){
            console.log("Rotten Tomatoes Rating: ".green + movie_detail.Ratings[1].Value);
        }else{
            console.log("Rotten Tomatoes Rating: ".green + "N/A")
        }
        
        console.log("Country: ".green + movie_detail.Country);
        console.log("Language: ".green + movie_detail.Language);
        console.log("Plot: ".green + movie_detail.Plot);
        console.log("Actors: ".green + movie_detail.Actors);
    })
}

// read the random.txt file and run the first command from the file
function doWhatItSays(){
    fs.readFile("random.txt","utf8",(error,data)=>{
        if(error){
            return console.log('Error occurred: ' + error);
        }

        var data = data.replace("\n",",").replace(/\"/g,"").split(',')
        runCommand(data[0],data[1]);
    })
}

// run the command with option
function runCommand(command,option){ 
    switch(command){
        case "my-tweets":
            console.log("\nmy-tweets".blue+"\n");
            getTweets();
            break;
        case "spotify-this-song":
            var song = option ? option:"The Sign";
            console.log(("\nspotify-this-song \""+song+"\"").blue+"\n");
            spotifySong(song);
            break;
        case "movie-this":
            var movie = option ? option:"Mr. Nobody";
            console.log(("\nmovie-this \""+movie+"\"").blue+"\n");
            movieThis(movie);
            break;
        case "do-what-it-says":
            console.log("\ndo-what-it-says".blue+"\n");
            doWhatItSays();
            break;
        default:
            console.log("Sorry, I don't understand.")
            break;
    }   
}


var command = process.argv[2]; // command from user, like "my-tweets", "spotify-this-song" and etc.
var option = process.argv[3] // option or search key from user, like movie name, name of song
runCommand(command,option);