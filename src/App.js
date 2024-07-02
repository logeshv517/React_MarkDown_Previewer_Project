import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TextBlock from './textBlock';
import './App.css';
import TextBlock2 from './textblock2';
import Example_img_1 from './Example_img_1';
import Example_img_2 from './Example_img_2';
import TextBlock3 from './testblock3';
import Markdown from './MarkDown_Previewer';
import Terminal from './Terminal';
import Footer from './Footer';
import MyComponent from './AppHead';

function App() {
  return (
    <div className="App">
      <Parallax pages={6} style={{ top: '0', left: '0' }} class="animation">
        <ParallaxLayer offset={0} speed={0.25}>
          <div class="animation_layer parallax" id="logo">
          <div id='toopic'>
            <div id='top1'>
            <div id='m'>M</div>
            <div id='p'>ARK</div>
            <div id='d'>D</div>
            <div id='o'>OWN</div>
            </div>
            <div id='top2'>
              <div id='l'>L</div>
              <div id='a'>ANGUAGE</div>
            </div>
          </div>
          {/* <MyComponent/> */}
          <ParallaxLayer offset={0} speed={0.36}>
            <div id='buttons'>
            <MyComponent/>
            </div>
          </ParallaxLayer>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.25}>
          <div class="animation_layer parallax" id="artback"></div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.3502336666}>
          <div class="animation_layer parallax" id="mountain"></div>
        </ParallaxLayer>
       
        <ParallaxLayer offset={2} speed={0.25} >
          <TextBlock />
          {/* <div className='eg_1' id='eg_11'></div> */}
        {/* </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.2} > */}
          <Example_img_1/>
        {/* </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.25} > */}
        <TextBlock2/>
        </ParallaxLayer>
        <ParallaxLayer offset={3} speed={0.35} >
          <Example_img_2/>
          <TextBlock3/>
        {/* </ParallaxLayer>
        <ParallaxLayer offset={5} speed={0.2} > */}
        <div style={{paddingTop:"8vh"}}>
         <Markdown/>
         <Footer/>
          </div>
        {/* </ParallaxLayer>
        <ParallaxLayer offset={6} speed={0.365} > */}
        
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;