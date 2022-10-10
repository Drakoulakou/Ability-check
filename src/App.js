import { useEffect, useState } from 'react';
import DropDown from './components/Drop-down';
import Frame from './components/Frame';
import Hexagon from './components/Hexagon';
import SmallHexagon from './components/SmallHexagon';
import Mark from './components/Mark';
import Laptops from './utils/data.json'

import './App.scss';

function App() {
  const [selectedLaptop, setSelectedLaptop] = useState(Laptops[0]) //state laptops 
  const gamesArrayOfSelectedLaptop = Object.entries(selectedLaptop.Games).map(game => ({ sku: game[0], ...game[1] })) // games array 
  const [selecteGame, setSelectedGame] = useState(gamesArrayOfSelectedLaptop[0]) //state games

let pcMarkCategoryToNumber = 0; //condition for pc Mark Category 

if(selectedLaptop.PCMark_Category === 'Home') {
  pcMarkCategoryToNumber = 1;
} else if (selectedLaptop.PCMark_Category === 'Produce') {
  pcMarkCategoryToNumber = 2;
} else if (selectedLaptop.PCMark_Category === 'Create') {
  pcMarkCategoryToNumber = 3;
}

let threeDCategoryToNumber = 0; //condition for three D Mark Category 

if(selectedLaptop['3DMark_Time_Spy_score'] > 5000 && selectedLaptop['3DMark_Time_Spy_score'] < 6900) {
  threeDCategoryToNumber = 1;
} else if (selectedLaptop['3DMark_Time_Spy_score'] > 6900 && selectedLaptop['3DMark_Time_Spy_score'] < 8850) {
  threeDCategoryToNumber = 2;
} else if (selectedLaptop['3DMark_Time_Spy_score']  > 8850) {
  threeDCategoryToNumber = 3;
}

  return (
    <div className="App">
      <Frame />
      <h2><b>Δες τις επιδόσεις του laptop</b></h2>
      <h3>Διάλεξε το παιχνίδι που σε ενδιαφέρει και ανακάλυψε τις<br />επιδόσεις του</h3>

      <DropDown items={Laptops} setSelectedItem={setSelectedLaptop} selectedItem={selectedLaptop} /> {/**dropDown for laptops */}
      {selectedLaptop && <DropDown items={gamesArrayOfSelectedLaptop} setSelectedItem={setSelectedGame} selectedItem={selecteGame} />} {/**dropDown for games */}

      <hr className='drop-down-hr' />

      {selecteGame && (
        <div className='hexagons'>
          <Hexagon number={selecteGame.normal} legend="NORMAL 1080p"  />
          <Hexagon number={selecteGame.ultra} legend="ULTRA 1440p" fpsContent={selecteGame.ultra === "Not enough VRAM"} />
        </div>
      )}

      <hr className='fps-hr' />

      <h3 className='fps-score'>FPS Score</h3>
      <div className='small-hexagons'>
        <SmallHexagon numberSmallHexagon={60} legendSmallHexagon='ZERO HACKING' />
        <SmallHexagon numberSmallHexagon={100} legendSmallHexagon='RECOMMENDED' />
      </div>
      <hr className='pcmark-hr' />
      <div className='marks'>
        <Mark
          className="markpc"
          image={process.env.PUBLIC_URL + '/PCMark10-logo.png'}
          subtitle="Το προιόν αυτό είναι κατάλληλο γιά:"
          marks={[
            { title: 'Basic' },
            { title: 'Home' },
            { title: 'Produce' },
            { title: 'Create' },
          ]}
          selected={pcMarkCategoryToNumber}
        />
        <Mark
          className="mark3d"
          image={process.env.PUBLIC_URL + '/3DMark-logo.png'}
          subtitle="TimeSpy: "
          subtitleNumber={selectedLaptop['3DMark_Time_Spy_score']}
          selected={threeDCategoryToNumber}
          marks={[
            { title: 'Casual', subtitle: '<5000' },
            { title: 'Specialist', subtitle: '<6900' },
            { title: 'Hardcore', subtitle: '<8850' },
            { title: 'Elite', subtitle: '>8850' },
          ]}
        />
      </div>


    </div>
  );
}

export default App;
