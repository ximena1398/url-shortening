import React from 'react';
import { Header } from './Components/Header/Header';
import { createRoot } from "react-dom/client";
import { Text } from './Components/Text/Text';
import '../src/index.css';
import { Button } from './Components/Button/Button';
import { AddUrl } from './Components/AddUrl/AddUrl';
import { ReactComponent as ImgBackgroundTable } from '../src/images/bg-shorten-desktop.svg';
import { ReactComponent as Img } from '../src/images/illustration-working.svg';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <div className='div-general'>
      <Header />
      <div className='div'>
        <div className='content'>
          <h1 className='text-title'>More than just shorter links</h1>
          <p className='main-text'>Buil your brand's recognition and get detailed insights on how your links are performing</p>
          <Button textButton='Get Started' sizeFont="3vh" borderRadius='28px' padding='8px 20px' />
        </div>
        <div className='div-img'>
          <Img />
        </div>
      </div>
      <div className='div-url-main'>
        <ImgBackgroundTable className='background-url' />
        <div className='div-url'>
          <AddUrl />
        </div>
      </div>
    </div>
  </React.StrictMode>,
);
