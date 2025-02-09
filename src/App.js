import React from 'react';
import './App.css';

function MusicPlayer({ title, artist, audioSrc }) {
  return (
    <div className="card">
      <div className="top">
        <div className="pfp">
          <div className="playing">
            <div className="greenline line-1"></div>
            <div className="greenline line-2"></div>
            <div className="greenline line-3"></div>
            <div className="greenline line-4"></div>
            <div className="greenline line-5"></div>
          </div>
        </div>
        <div className="texts">
          <p className="title-1">{title}</p>
          <p className="title-2">{artist}</p>
        </div>
      </div>
      <audio controls>
        <source src={audioSrc} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <div className="navbar" id="navbar">
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#songs">Songs</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>

      {/* Home Section */}
      <div className="home-section" id="home">
        <h1>Discover the Art of Songwriting</h1>
        <p>
          Songwriting is the craft of expressing emotions, telling stories, and capturing life's moments through melody and lyrics.
          Experience the passion and creativity of our featured songwriter.
        </p>

        {/* Featured Song */}
        <MusicPlayer
          title="Golden Dreams"
          artist="John Doe"
          audioSrc="./assets/golden-dreams.mp3"
        />

        {/* Button to Navigate to Songs Page */}
        <button className="gold-button" onClick={() => window.location.href = "#songs"}>
          Explore Songs
        </button>
      </div>

      {/* Songs Section */}
      <section id="songs" className="songs-section">
        <h2>All Songs</h2>
        <div className="songs-container">
          <MusicPlayer
            title="Golden Dreams"
            artist="John Doe"
            audioSrc="./assets/golden-dreams.mp3"
          />
          <MusicPlayer
            title="Echoes of the Night"
            artist="Jane Doe"
            audioSrc="./assets/echoes-of-the-night.mp3"
          />
          <MusicPlayer
            title="Melody in Motion"
            artist="John Doe"
            audioSrc="./assets/melody-in-motion.mp3"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="form-card1">
          <div className="form-card2">
            <form className="form">
              <p className="form-heading">Get In Touch</p>

              <div className="form-field">
                <input required placeholder="Name" className="input-field" type="text" />
              </div>

              <div className="form-field">
                <input required placeholder="Email" className="input-field" type="email" />
              </div>

              <div className="form-field">
                <input required placeholder="Subject" className="input-field" type="text" />
              </div>

              <div className="form-field">
                <textarea required placeholder="Message" cols="30" rows="3" className="input-field"></textarea>
              </div>

              <button className="sendMessage-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
