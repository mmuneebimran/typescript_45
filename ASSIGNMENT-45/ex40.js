function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Example usage of the function
var album1 = make_album('Artist1', 'Album Title 1');
var album2 = make_album('Artist2', 'Album Title 2', 12);
var album3 = make_album('Artist3', 'Album Title 3', 8);
// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
