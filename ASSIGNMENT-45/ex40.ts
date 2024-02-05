interface Album {
    artist: string;
    title: string;
    tracks?: number; // Optional parameter for the number of tracks
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist,
        title,
    };

    if (tracks !== undefined) {
        album.tracks = tracks;
    }

    return album;
}

// Example usage of the function
const album1: Album = make_album('Artist1', 'Album Title 1');
const album2: Album = make_album('Artist2', 'Album Title 2', 12);
const album3: Album = make_album('Artist3', 'Album Title 3', 8);

// Print each return value
console.log(album1);
console.log(album2);
console.log(album3);
