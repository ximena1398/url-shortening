import "./App.css"
import React from 'react';

import { ReactComponent as ImgBackgroundTable } from '../../images/bg-shorten-desktop.svg';
import { ReactComponent as IconGraphic1 } from '../../images/icon-brand-recognition.svg';
import { ReactComponent as IconGraphic2 } from '../../images/icon-detailed-records.svg';
import { ReactComponent as IconGraphic3 } from '../../images/icon-fully-customizable.svg';
import { ReactComponent as Img } from '../../images/illustration-working.svg';
import { ReactComponent as BackgroundInf } from '../../images/bg-boost-desktop.svg';
import { useSelector } from 'react-redux';
import { ContainerUrl } from "../../Components/ContainerUrl/ContainerUrl";
import { Button } from "../../Components/Button/Button";
import { AddUrl } from "../../Components/AddUrl/AddUrl";
import { Header } from "../../Components/Header/Header";
import { Text } from "../../Components/Text/Text";
import { CardStatistics } from "../../Components/CardStatistics/CardStatistics";

export const App = () => {
    const { shortLinks, longLinks } = useSelector(state => state.Link)
    console.log(longLinks)
    return (
        <>
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

            </div>
            <div className='div-gray'>
                <div className='div-shorten'>
                    <div className='div-url-main'>
                        <ImgBackgroundTable className='background-url' />
                        <div className='div-url'>
                            <AddUrl />
                        </div>
                    </div>
                    <ContainerUrl short={"aaa"} long={"aa"}></ContainerUrl>
                    {shortLinks.map((d, i) => (
                        <ContainerUrl key={i} short={d.short} long={d.long} />
                    ))}
                </div>
                <div className="div-text-secundary">
                    <h1 className='title-p'>Advanced Statistics</h1>
                    <p className='text-secundary'>Track how your links are performing across the web with our advanced statics dashboard.</p>
                </div>
                <div className="cards">
                    <CardStatistics icon={<IconGraphic1 />} title={"Brand Recognition"} description={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."} classCss="square-1" />
                    <CardStatistics icon={<IconGraphic2 />} title={"Detailed Records"} description={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."} classCss="square-2" />
                    <CardStatistics icon={<IconGraphic3 />} title={"Fully Customizable"} description={"Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."} classCss="square-3" />
                </div>
                <div className="div-end">
                    <BackgroundInf />
                    <div className="div-end-2">
                        <h1 className='title-end'>Boost your links today</h1>
                        <Button className="buttom-end" textButton='Get Started' sizeFont="3vh" borderRadius='28px' padding='8px 20px' />
                    </div>
                </div>
                <div className="div-end-dark">
                    <div>
                        <h1>Shortly</h1>
                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}