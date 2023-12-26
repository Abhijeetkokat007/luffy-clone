import logo from './logo.svg';
import './App.css';
import mainimg from './images/main image.png'
import icon from './images/icon no back.png'
import whiteetg from './images/white eth (1).png'
import graph from './images/graph.png'
import holders from './images/holders png (1).png'
import mcap from './images/mcap png (1).png'
import owner from './images/owner png (1).png'
import time from './images/time.png'
function App() {
  return (
    <div className="App d-flex">
      <div>
        <button className='btn-swap'>SWAP</button>
        <button className='btn-swap'>CHART</button>
        <br /><br /><br /><br /><br />
        <div className='left-comtainer'>
          <img src={icon} alt='icon ' className='img-icon' />
          <h3 className='heding-vertical'>LUFFY</h3>
          <img src={mainimg} alt='main img' className='img-mainimage' />
          <div className='chield-left-container'>

            <p className='left-text1'> MONKEY D. LUFFY</p>
            <p className='left-text2'>The Rubber Banded Rascal </p>
            <p className='left-text3'> DEAD </p>
          </div>
        </div>

      </div>
      <div>
        <div className='right-comtainer'>
          <h1 className='right-heading'> METRIC DATA </h1> <hr />
          <div className='display-flex mb-minus'>
            <div className='right-chield-comtainer'>
              <p className='right-text1 ms-20 '> DOUBLOONS VALUE </p>
              <p className='right-text2 mt-minus ms-20 mb-minus'> $ 0.00000147 </p>
              <hr />
              <p className='right-text1  ms-20'> TIDAL SHIFTS </p>
              <p className='right-text2 mt-minus ms-20'> 0.00% </p>
              <button className='btn-viewgraph mb-minus'>VIEW GRAPH</button> <br /> <br />
              <div className='right-chield1-comtainer'>
                <p className='right-text1 ms-20 '> SUNKER TREASURE </p>
                <p className='right-text2 mt-minus ms-20'> 0.13 ETH </p>
                <img src={whiteetg} alt='whiteetg' className='img-whiteetg' />
              </div>
            </div>
            <div>
              <img src={graph} alt='graph' className='img-graph' />
            </div>
          </div>
          <br />  <br />
          <div className='display-flex'>
            <div>
              <img src={time} alt='whiteetg' className='img-time' />
            </div>
            <div className='card-container'>
              <div className='right-chield1-comtainer width-270'>
                <p className='right-text1 ms-20 '> SUNKER TREASURE </p>
                <p className='right-text2 mt-minus ms-20'> 0.13 ETH </p>
                <img src={mcap} alt='whiteetg' className='img-whiteetg' />
              </div>

              <div className='right-chield1-comtainer width-270'>
                <p className='right-text1 ms-20 '> SUNKER TREASURE </p>
                <p className='right-text2 mt-minus ms-20'> 0.13 ETH </p>
                <img src={holders} alt='whiteetg' className='img-whiteetg' />
              </div>

              <div className='right-chield1-comtainer width-270'>
                <p className='right-text1 ms-20 '> SUNKER TREASURE </p>
                <p className='right-text2 mt-minus ms-20'> 0.13 ETH </p>
                <img src={owner} alt='whiteetg' className='img-whiteetg' />
              </div>

              <div className='right-chield1-comtainer width-270'>
                <p className='right-text1 ms-20 '> SUNKER TREASURE </p>
                <p className='right-text2 mt-minus ms-20'> 0.13 ETH </p>
                <img src={whiteetg} alt='whiteetg' className='img-whiteetg' />
              </div>

            </div>

          </div>

          <div className='right-chield1-comtainer bg-purple width-320 booty-container'>
            <div className='bg-black'>
              <p className='right-text1  '> Crew's Share  </p>
              <p className='right-text2 mt-minus '> 1,234,567 </p>
            </div>
            <div>
              <p className='right-text2 s '> CLAIMABLE</p>
            </div>

            <div className='bg-black'>
              <p className='right-text1   '> Bounty Hervest </p>
              <p className='right-text2 mt-minus '>0.174 </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;
