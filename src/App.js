import React from 'react';
import './App.css';

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
      
      {/* Home Page */}
      <div className="home-section" id="home">
        <h1>Discover the Art of Songwriting</h1>
        <p>
          Songwriting is the craft of expressing emotions, telling stories, and capturing life's moments through melody and lyrics.
          Experience the passion and creativity of our featured songwriter.
        </p>

        {/* Featured Song */}
        <div className="featured-song">
          <h2>Most Popular Song: "Golden Dreams"</h2>
          <audio controls>
            <source src="./assets/golden-dreams.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>

        {/* Button to Navigate to Songs Page */}
        <button className="gold-button" onClick={() => window.location.href = "#songs"}>
          Explore Songs
        </button>
      </div>

      {/* Songs Section */}
      <section id="songs" className="songs-section">
        <h2>All Songs</h2>
        <div className="songs-container">
          <div className="song-card">
            <h3>"Golden Dreams"</h3>
            <audio controls>
              <source src="./assets/golden-dreams.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="song-card">
            <h3>"Echoes of the Night"</h3>
            <audio controls>
              <source src="./assets/echoes-of-the-night.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

          <div className="song-card">
            <h3>"Melody in Motion"</h3>
            <audio controls>
              <source src="./assets/melody-in-motion.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact</h2>
        <p>Interested in collaborations or custom songwriting? Reach out below!</p>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Your Name" required />

          <label>Email:</label>
          <input type="email" placeholder="Your Email" required />

          <label>Message:</label>
          <textarea placeholder="Write your message..." required></textarea>

          <button type="submit" className="gold-button">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
