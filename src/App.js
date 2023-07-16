import "./App.css";
import Button from "./components/Button/Button";

// import image
import punk from "../src/assets/images/punk.gif";

// import audio files
import after from "../src/assets/audio/after.wav";
import better from "../src/assets/audio/better.wav";
import do_it from "../src/assets/audio/do_it.wav";
import ever from "../src/assets/audio/ever.wav";
import faster from "../src/assets/audio/faster.wav";
import harder from "../src/assets/audio/harder.wav";
import hour from "../src/assets/audio/hour.wav";
import make_it from "../src/assets/audio/make_it.wav";
import makes_us from "../src/assets/audio/makes_us.wav";
import more_than from "../src/assets/audio/more_than.wav";
import never from "../src/assets/audio/never.wav";
import our from "../src/assets/audio/our.wav";
import over from "../src/assets/audio/over.wav";
import stronger from "../src/assets/audio/stronger.wav";
import work_is from "../src/assets/audio/work_is.wav";
import work_it from "../src/assets/audio/work_it.wav";

function App() {
  return (
    <div className='App'>
      <div className='sampler-outer-wrapper'>
        <div className='sampler-inner-wrapper'>
          <img className='punk-img' src={punk} alt='daft punk gif' />
          <Button
            sample={work_it}
            color='red'
            className='red'
            title='Work It'
          />
          <Button
            sample={make_it}
            color='red'
            className='red'
            title='Make It'
          />
          <Button
            sample={do_it}
            color='purple'
            className='purple'
            title='Do It'
          />
          <Button
            sample={makes_us}
            color='purple'
            className='purple'
            title='Makes Us'
          />
          <Button
            sample={harder}
            color='blue'
            className='blue'
            title='Harder'
          />
          <Button
            sample={better}
            color='blue'
            className='blue'
            title='Better'
          />
          <Button
            sample={faster}
            color='teal'
            className='teal'
            title='Faster'
          />
          <Button
            sample={stronger}
            color='teal'
            className='teal'
            title='Stronger'
          />
          <Button
            sample={more_than}
            color='green'
            className='green'
            title='More Than'
          />
          <Button
            //
            sample={hour}
            color='green'
            className='green'
            title='Hour'
          />
          <Button
            //
            sample={our}
            color='yellow'
            className='yellow'
            title='Our'
          />
          <Button
            sample={never}
            color='yellow'
            className='yellow'
            title='Never'
          />
          <Button
            sample={ever}
            color='orange'
            className='orange'
            title='Ever'
          />
          <Button
            sample={after}
            color='orange'
            className='orange'
            title='After'
          />
          <Button
            sample={work_is}
            color='orangered'
            className='orange-red'
            title='Work Is'
          />
          <Button
            sample={over}
            color='orange'
            className='orange-red'
            title='Over'
          />
        </div>
      </div>
    </div>
  );
}

export default App;
