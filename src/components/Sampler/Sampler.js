import React from "react";
import "./Sampler.css";
import Button from "../Button/Button";

// import image
import punk from "../../assets/images/punk.gif";

// import audio files
import after from "../../assets/audio/after.wav";
import better from "../../assets/audio/better.wav";
import do_it from "../../assets/audio/do_it.wav";
import ever from "../../assets/audio/ever.wav";
import faster from "../../assets/audio/faster.wav";
import harder from "../../assets/audio/harder.wav";
import hour from "../../assets/audio/hour.wav";
import make_it from "../../assets/audio/make_it.wav";
import makes_us from "../../assets/audio/makes_us.wav";
import more_than from "../../assets/audio/more_than.wav";
import never from "../../assets/audio/never.wav";
import our from "../../assets/audio/our.wav";
import over from "../../assets/audio/over.wav";
import stronger from "../../assets/audio/stronger.wav";
import work_is from "../../assets/audio/work_is.wav";
import work_it from "../../assets/audio/work_it.wav";

export default function Sampler() {
  return (
    <div className='sampler-outer-wrapper'>
      <div className='sampler-inner-wrapper'>
        <img className='punk-img' src={punk} alt='daft punk gif' />
        <Button sample={work_it} color='red' className='red' title='Work It' />
        <Button sample={make_it} className='red' title='Make It' />
        <Button sample={do_it} className='purple' title='Do It' />
        <Button sample={makes_us} className='purple' title='Makes Us' />
        <Button sample={harder} className='blue' title='Harder' />
        <Button sample={better} className='blue' title='Better' />
        <Button sample={faster} className='teal' title='Faster' />
        <Button sample={stronger} className='teal' title='Stronger' />
        <Button sample={more_than} className='green' title='More Than' />
        <Button sample={hour} className='green' title='Hour' />
        <Button sample={our} className='yellow' title='Our' />
        <Button sample={never} className='yellow' title='Never' />
        <Button sample={ever} className='orange' title='Ever' />
        <Button sample={after} className='orange' title='After' />
        <Button sample={work_is} className='orange-red' title='Work Is' />
        <Button sample={over} className='orange-red' title='Over' />
      </div>
    </div>
  );
}
