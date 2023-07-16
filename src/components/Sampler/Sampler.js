import React from "react";
import "./Sampler.css";
import Button from "../Button/Button";

export default function Sampler() {
  return (
    <div className='sampler-outer-wrapper'>
      <div className='sampler-inner-wrapper'>
        <Button sample='work-it' className='red' title='Work It' />
        <Button className='red' title='Make It' />
        <Button className='purple' title='Do It' />
        <Button className='purple' title='Makes Us' />
        <Button className='blue' title='Harder' />
        <Button className='blue' title='Better' />
        <Button className='teal' title='Faster' />
        <Button className='teal' title='Stronger' />
        <Button className='green' title='More Than' />
        <Button className='green' title='Hour' />
        <Button className='yellow' title='Our' />
        <Button className='yellow' title='Never' />
        <Button className='orange' title='Ever' />
        <Button className='orange' title='After' />
        <Button className='orange-red' title='Work Is' />
        <Button className='orange-red' title='Over' />
      </div>
    </div>
  );
}
