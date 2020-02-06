import React from 'react';
import './css/App.css';

import Story from './components/Story.js';

import News1 from './img/antiTrump.jpeg';
import News2 from './img/corona.jpeg';
import News3 from './img/weather.jpeg';
import Sport1 from './img/mufc.jpeg';
import Sport2 from './img/nike.jpeg';
import Sport3 from './img/fury.jpeg';

function App() {
  return (

    <div class="headlineBody">

      <div class="newsHeadlines">
        <h2 class="newsHeading">News Headlines ></h2>
        <div class="newsStories">
          <Story source={News1} alt="anti-trump" headline="Anti-Trump protesters rally across US" footer="USA" />
          <Story source={News2} alt="corona" headline="UK sees rise in 'coronavirus racism' after outbreak in China" footer="UK / CHINA" />
          <Story source={News3} alt="weather" headline="Met Office weather warnings as Storm Ciara set to batter Britain" footer="UK" />
        </div>
      </div>

      <div class="sportHeadlines">
        <h2 class="newsHeading">Sport Headlines ></h2>
        <div class="sportsStories">
          <Story source={Sport1} alt="mufc" headline="Munich Air Disaster: Man Utd's fallen eight remembered" footer="MUFC" />
          <Story source={Sport2} alt="nike" headline="Why 'game changing' Nike shoes are so controversial" footer="RUNNING" />
          <Story source={Sport3} alt="fury" headline="Fury insists Wilder's punches cause 'no pain'" footer="BOXING" />
        </div>
      </div>
      
    </div>

  );
}

export default App;
