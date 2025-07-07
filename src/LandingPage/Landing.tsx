import "./landing.css";
import "./landingPage.css"
import urodziny from '../assets/audio/urodziny.mp3'
import {useEffect, useState} from "react";

import stolat from '../assets/img/stolat.png';
import kwiaty from '../assets/img/kwiaty.jpeg';
import kasiakasia from '../assets/img/kasiakasia.png';
import ptasiemleczko from '../assets/img/ptasie-mleczko.png';
import thirtyFour from '../assets/img/34.png';
import zozole from '../assets/img/zozole.png';
import kawka from '../assets/img/kawka.png';
import toffifee from '../assets/img/tofifee.png'

export const LandingPage = () => {
    const [played, setPlayed] = useState(false);
    const [toffifeeClicked, setToffifeeClicked] = useState(false);
    const [kawkaNumber, setKawkaNumber] = useState(1);
    const [showBelowFold, setShowBelowFold] = useState(false);
    const [dupkasClicked, setDupkasClicked] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            changeKawka()
        }, 1000);

        return () => clearInterval(interval);
    }, [kawkaNumber]);

    const handlePlay = (bool) => {
        const timeout = bool ? 5000 : 0;
        setPlayed(bool);
        setTimeout(() => {
            setShowBelowFold(bool);
        }, timeout);
    };

    const changeKawka = () => {
        if (kawkaNumber < 10) {
            setKawkaNumber((oldKawka) =>  oldKawka + 1)
        } else {
            setKawkaNumber(() => 1)
        }
    }

    const hiddenDupka = (i: number) => {
        return i > dupkasClicked ? 'hidden' : ''
    }

    const handleDupka = (i: number) => {
        console.log(i)
        console.log(dupkasClicked)
        if (i > dupkasClicked) {
            setDupkasClicked(i);
        }
    }

    return (
        <div className="landing-layout">
            <audio className={`audio-player${played ? ' hidden' : ''}`} controls autoPlay loop onPlay={() => handlePlay(true)} onPause={() => handlePlay(false)}>
                <source src={urodziny} />
            </audio>
            <div className={`landing-page${!played ? ' hidden' : ''}`}>
                <div className="frame">
                    <div className="images-wrapper">
                        <img src={stolat} className="stolat-image" />
                        <img src={kwiaty} className="kwiaty-image" />
                        <img src={thirtyFour} className="thirty-four-image" />
                        <img src={kasiakasia} className="kasia-kasia-image"/>
                        <img src={ptasiemleczko} className="ptasie-mleczko-image" />
                        <img src={zozole} className="zozole-image" />
                        <img src={kawka} className={`kawka-image kawka-${kawkaNumber}`} />
                        <img src={toffifee} className={`toffifee-image${!played ? ' hidden' : ''} ${toffifeeClicked ? 'clicked' : ''}`} onClick={() => setToffifeeClicked(true)}/>
                        <div className="toffifee-back">
                            <div className="dupka" onClick={() => handleDupka(1)}>dupka</div>
                            <div className={`dupka ${hiddenDupka(1)}`} onClick={() => handleDupka(2)}>dupka</div>
                            <div className={`dupka ${hiddenDupka(2)}`} onClick={() => handleDupka(3)}>ale</div>
                            <div className={`dupka ${hiddenDupka(3)}`} onClick={() => handleDupka(4)}>kupka</div>
                            <div className={`dupka ${hiddenDupka(4)}`}>.pl</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}