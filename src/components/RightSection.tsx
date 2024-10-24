"use client";
import React from 'react';
import Image from 'next/image';

interface Artist {
  name: string;
  image: string;
}

interface Album {
  title: string;
  image: string;
}

const ArtistComponent = ({ artist }: { artist: Artist }) => (
  <article className="col-2">
    <Image src={artist.image} alt={artist.name} width={150} height={150} className="img-circle" />
    <p>{artist.name}</p>
    <p className="artist-label">Artist</p>
  </article>
);

const AlbumComponent = ({ album }: { album: Album }) => (
  <article className="col-2">
    <Image src={album.image} alt={album.title} width={150} height={150} className="img-square" />
    <p>{album.title}</p>
  </article>
);

const RightSection = () => {
  const artists: Artist[] = [
    { name: 'Post Malone', image: '/images/postmalone.jpeg' },
    { name: 'The Weeknd', image: '/images/theweeknd.jpeg' },
    { name: 'Drake', image: '/images/drake.jpeg' },
    { name: 'Billie Eilish', image: '/images/billieeilish.jpeg' },
    { name: 'Kendrick Lamar', image: '/images/kendricklamar.jpeg' },
    { name: 'Taylor Swift', image: '/images/taylor swift.jpeg' },
  ];

  const albums: Album[] = [
    { title: "Short n' Sweet", image: '/images/shortnsweet.jpeg' },
    { title: 'The Rise and Fall of a Midwest Pricness', image: '/images/theriseandfall.jpeg' },
    { title: 'HIT ME HARD AND SOFT', image: '/images/hitmehardandsoft.jpeg' },
    { title: 'One Thing At A Time', image: '/images/onethingatatime.jpeg' },
    { title: 'THE TORCHERED POETS', image: '/images/torcheredpoets.jpeg' },
    { title: 'Zach Bryan', image: '/images/zachbryan.jpeg' },
  ];

  return (
    <section className="section-right col-md-9 p-3">
      {/* Popular Artists Section */}
      <header className="d-flex justify-content-between align-items-center">
        <h4>Popular artists</h4>
        <a href="#" className="show-all-link">Show All</a> {/* Show All link for Popular Artists */}
      </header>
      <section className="row mt-3 text-center">
        {artists.map((artist, index) => (
          <ArtistComponent key={index} artist={artist} />
        ))}
      </section>

      {/* Popular Albums Section */}
      <article className="section-below mt-5">
        <header className="d-flex justify-content-between align-items-center">
          <h4>Popular albums</h4>
          <a href="#" className="show-all-link">Show All</a> {/* Show All link for Popular Albums */}
        </header>
        <section className="row mt-3 text-center">
          {albums.map((album, index) => (
            <AlbumComponent key={index} album={album} />
          ))}
        </section>
      </article>
    </section>
  );
};

export default RightSection;
