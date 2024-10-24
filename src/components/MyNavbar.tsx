"use client";
import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import Image from 'next/image';

const MyNavbar = () => {
  return (
    <Navbar bg="black" expand="lg" variant="dark" className="px-4">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Section: Spotify logo */}
        <Navbar.Brand href="#" className="navbar-brand">
          <Image src="/images/whitespotifyicon.jpeg" alt="Spotify Logo" width={38} height={38} />
        </Navbar.Brand>

        {/* Center Section: Home Icon and Search Bar */}
        <div className="d-flex mx-auto align-items-center">
          <Nav.Link href="#">
            <Image src="/images/spotifyhomebuttonicon2.png" alt="Home Icon" width={50} height={50} />
          </Nav.Link>
          <form className="d-flex mx-3">
            <input
              type="search"
              className="form-control search-bar"
              placeholder="What do you want to play?"
            />
          </form>
        </div>

        {/* Right Section: Sign Up and Log In */}
        <div className="d-flex align-items-center">
          <span className="text-secondary me-3">Sign up</span>
          <Button className="btn-login-circle">Log in</Button>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;