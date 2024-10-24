"use client";
import React from 'react';
import Image from 'next/image';

const LeftSection = () => {
  return (
    <section className="section-left col-md-3 p-3">
      <Image
        src="/images/spotifylibraryicon.png"
        alt="Library Icon"
        width={30}
        height={30}
        className="library-icon me-2"
      />
      <h4 className="d-inline" style={{ fontSize: '18px', color: '#B7B1B1' }}>Your Library</h4>
      <p>Content for the left section.</p>
      <Image
        src="/images/spotifyaddicon.png"
        alt="Add Icon"
        width={30}
        height={30}
        className="add-icon"
      />
    </section>
  );
};

export default LeftSection;
