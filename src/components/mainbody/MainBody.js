import React from 'react';
import styles from './mainbody.module.css';
console.log(styles);

const MainBody = () => {
  return (
    <div className={styles.mainbody}>
      Welcome to Twin Peaks, the REST API, the landing page. 
      
      <p><span className={styles.invertText}>The API is live at <a href="https://twin-peaks.herokuapp.com/" 
      >https://twin-peaks.herokuapp.com/</a></span></p>

      Routes from this API return two types of
      data, Character information and Quotes. Querry the specific routes
      provided to return data. The two paths are listed below, each of which
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      provides an array of all of that path's respective data:

      <p>
        <span className={styles.invertText}>basic routes:</span>
        <ul>
          <li>https://twin-peaks.herokuapp.com/api/v1/characters</li>
          <li>https://twin-peaks.herokuapp.com/api/v1/quotes</li>
        </ul>
      </p>

      <p>
        <span className={styles.invertText}>characters routes</span>
        <ul>
          <li>https://twin-peaks.herokuapp.com/api/v1/characters/:id</li>
          <li>https://twin-peaks.herokuapp.com/api/v1/characters/randomCharacter</li>
          <li>https://twin-peaks.herokuapp.com/api/v1/characters/allCharsAllQuotes</li>
          <li>https://twin-peaks.herokuapp.com/api/v1/characters/characterWithQuotes/:id</li>
        </ul>
      </p>

      <p>
        <span className={styles.invertText}>quotes routes:</span>
        <ul>
          <li>https://twin-peaks.herokuapp.com/api/v1/quotes/:id</li>
          <li>https://twin-peaks.herokuapp.com/api/v1/quotes/randomQuote</li>
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
        to <a href="https://restfulapi.net/">https://restfulapi.net/</a> to learn
        more.
      </p>
    </div>
  );
};

export default MainBody;
