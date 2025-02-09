import React from "react";
import "./MusicPlayer.css"; // Import the CSS file for styling

const MusicPlayer = ({ title, artist, audioSrc }) => {
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

      <div className="controls">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="20"
          width="24"
          className="volume_button"
        >
          <path
            clipRule="evenodd"
            d="M11.26 3.691A1.2 1.2 0 0 1 12 4.8v14.4a1.199 1.199 0 0 1-2.048.848L5.503 15.6H2.4a1.2 1.2 0 0 1-1.2-1.2V9.6a1.2 1.2 0 0 1 1.2-1.2h3.103l4.449-4.448a1.2 1.2 0 0 1 1.308-.26Zm6.328-.176a1.2 1.2 0 0 1 1.697 0A11.967 11.967 0 0 1 22.8 12a11.966 11.966 0 0 1-3.515 8.485 1.2 1.2 0 0 1-1.697-1.697A9.563 9.563 0 0 0 20.4 12a9.565 9.565 0 0 0-2.812-6.788 1.2 1.2 0 0 1 0-1.697Z"
            fillRule="evenodd"
          />
        </svg>

        <audio controls>
          <source src={audioSrc} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>

      <div className="time">
        <div className="elapsed"></div>
      </div>
      <p className="timetext time_now">1:31</p>
      <p className="timetext time_full">3:46</p>
    </div>
  );
};

export default MusicPlayer;
