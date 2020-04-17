import React from 'react';
import styles from './mainbody.module.css';

const MainBody = () => {
  return (
    <div className={styles.mainbody}>
      Welcome to Twin Peaks, the REST API, the landing page, by <a
        href="https://www.jonforney.com"
        target="_blank" rel="noopener noreferrer">me</a>, Jon. 
      
      <p>
        <span className={styles.invertText}>The API is live at <a
          href="https://twin-peaks.herokuapp.com/" 
          target="_blank" rel="noopener noreferrer"
        >https://twin-peaks.herokuapp.com/</a></span>
      </p>

      <p>
        Routes from this API return two types of
        data, Character information and Quotes. Querry the specific routes
        provided to return data. The two paths are listed below, each of which
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        provides an array of all of that path's respective data:
      </p>

      <p>
        <span className={styles.invertText}>basic routes:</span>
        <ul>
          <li className={styles.codeBlock}>
            <a
              href="https://twin-peaks.herokuapp.com/api/v1/characters"
              target="_blank" rel="noopener noreferrer">
              https://twin-peaks.herokuapp.com/api/v1/characters
            </a>
          </li>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/quotes"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/quotes
            </a>
          </li>
        </ul>
      </p>

      <p>
        The Routes below return sorted data, either single data items that are specifically
        requested by id, or aggregations of various types, which return things like an
        indvidual character with all of their questes, or a random quote with the associated
        character information included. Please play around with them and have fun learning,
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        that's what this REST API is for.
      </p>

      <p>
        <span className={styles.invertText}>characters routes</span>
        <ul>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/characters/5e8fb51f959b3e0017376fa0"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/characters/:id
            </a>
          </li>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/characters/randomCharacter"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/characters/randomCharacter
            </a>
          </li>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/characters/allCharsAllQuotes"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/characters/allCharsAllQuotes
            </a>
          </li>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/characters/characterWithQuotes/5e8fb51f959b3e0017376fa0"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/characters/characterWithQuotes/:id
            </a>
          </li>
        </ul>
      </p>

      <p>
        <span className={styles.invertText}>quotes routes:</span>
        <ul>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/quotes/5e93faf4ca886b0017ded34f"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/quotes/:id
            </a>
          </li>
          <li className={styles.codeBlock}>
            <a href="https://twin-peaks.herokuapp.com/api/v1/quotes/randomQuote"
              target="_blank" rel="noopener noreferrer">
            https://twin-peaks.herokuapp.com/api/v1/quotes/randomQuote
            </a>
          </li>
        </ul>
      </p>

      <p>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        *The routes ending in ':id' require a character or quote id (the id supplied by the 
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        MongoDB in the '_id' field for each character and quote entry).
        To find that information, qerry the two main routes.
      </p>

      <p>
        Please note, the information regarding how to consume this site
        assumes the user is familure with the basic REST API concept. If you would
        like more information on the basics of this topic, please head over 
        to <a href="https://restfulapi.net/"
          target="_blank" rel="noopener noreferrer">https://restfulapi.net/</a> to
        learn more.
      </p>
    </div>
  );
};

export default MainBody;
