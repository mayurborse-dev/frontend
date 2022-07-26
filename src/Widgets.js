import React from 'react';
import { Info } from '@mui/icons-material';
import { FiberManualRecord } from '@mui/icons-material';
import './Widgets.css';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widgets__articleLeft'>
                <FiberManualRecord />
            </div>
            <div className='widgets__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>Linkedin News</h2>
            <Info />
        </div>
        {newsArticle("Linkedin-clone","Top news - 9099 readers")}
        {newsArticle("COVID - 19","Top news - 886 readers")}
        {newsArticle("Tesla hits new highs","Cars & Auto - 300 readers")}
        {newsArticle("Bitcoin Breaks $22k","Crypto - 8023 readers")}
        {newsArticle("Is Redux too good?","Code - 123 readers")}
    </div>
  );
}

export default Widgets;