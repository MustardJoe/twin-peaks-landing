import React from 'react';

const MainBody = () => {
  return (
    <div>
      Welcome to Twin Peaks, the REST API. This API returns two types of
      data, Character information and Quotes.

      <p>The API is live at <a href="https://twin-peaks.herokuapp.com/" 
      >https://twin-peaks.herokuapp.com/</a>, but you will need to querry
      the specific routes provided to return data</p>

      <ul>
        <li>https://twin-peaks.herokuapp.com/api/v1/characters</li>
        <li>https://twin-peaks.herokuapp.com/api/v1/characters/:id</li>
        <li>https://twin-peaks.herokuapp.com/api/v1/characters/randomCharacter</li>
        <li>https://twin-peaks.herokuapp.com/api/v1/characters/allCharsAllQuotes</li>
        <li>https://twin-peaks.herokuapp.com/api/v1/characters/characterWithQuotes/:id</li>
      </ul>
      <ul>
        <li>https://twin-peaks.herokuapp.com/api/v1/quotes</li>
        <li>https://twin-peaks.herokuapp.com/api/v1/quotes/:id</li>
        <li>https://twin-peaks.herokuapp.com/api/v1/quotes/randomQuote</li>
      </ul>

      <p>Please note, the information regarding how to consume this REST API
      assumes the user is familure with the basic REST API concept. If you would
      like more information on the basics of this topic, please head over 
      to <a href="https://restfulapi.net/">https://restfulapi.net/</a> to learn
      more.</p>
    </div>
  );
};

export default MainBody;
