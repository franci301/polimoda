import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import TestComponent from '../Layouts/testComponent.jsx';
import { useState, useLayoutEffect } from 'react';
import '../Assets/css/testPage.css';

// groups{
// Group1:{ 
// 712 x 414
// 707 x 414
// },
// Group2:{
// 750 x 390
// 778 x 364
//  potentially 800 x 361
// }
// Group3:{
// 800 x 331
// 800 x 361
// 812 x 375 
// }
// Group4:{ 
//     1420 x 778
//     1440 x 716
//     1440 x 789
// }
// Group5:{
//     1397 x 716
// }
// Group6:{
//     1940x1100
// }
// Group7:{
//     724x292
// }
// Group8:{
//     796 x 414
// }
// Group9:{
//     896x313
// }
// Group10:{
//     844x390
//     895x414
//     736 x 414
//     667 x 375
// }
// Group11:{
//     844 x 307
// }
// }
// 428 x 926
// 1920 x 994 cody browser width and height

function Test() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        function updateSize() {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);


    const group1Styles = [
        {
            left: '29%',
            top: '49%',
            width: '40%',
        },
        {
            left: '32.5%',
            top: '67%',
            width: '40%'
        },
        {
            left: '28%',
            top: '66%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '60%',
            width: '40%'
        },
        // butterfly room
        {
            left: '29%',
            top: '68%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '68%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '68%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '68%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '68%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '68%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '68%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '60%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '60%',
            width: '40%'
        }

    ]
    const group2Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '55%',
            width: '40%',
        },
        // first room start here 52 -> 67
        {
            left: '32.5%',
            top: '57%',
            width: '40%'
        },
        // 56 --> 70
        {
            left: '27%',
            top: '60%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '54%',
            width: '40%'
        },
        // butterfly room
        {
            left: '29%',
            top: '61%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '55%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '55%',
            width: '40%'
        }

    ]
    const group3Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here
        {
            left: '32.5%',
            top: '60%',
            width: '40%'
        },
        {
            left: '27%',
            top: '69%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '59%',
            width: '40%'
        },
        // butterfly room
        {
            left: '29%',
            top: '59%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '59%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '59%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '59%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '59%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '59%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '59%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '53%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '53%',
            width: '40%'
        }

    ]
    const group4Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -26
        {
            left: '32.5%',
            top: '45%',
            width: '40%'
        },
        {
            left: '27%',
            top: '54%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '44%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '49%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '49%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '49%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '49%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '49%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '49%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '49%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '45%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '48%',
            width: '40%'
        }

    ]
    const group5Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '38%',
            width: '40%'
        },
        {
            left: '27%',
            top: '38%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '36%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '41%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '37%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '37%',
            width: '40%'
        }

    ]
    const group6Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '45%',
            width: '40%'
        },
        {
            left: '27%',
            top: '45%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '36%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '41%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '41%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '37%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '37%',
            width: '40%'
        }

    ]
    const group7Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '75%',
            width: '40%'
        },
        {
            left: '27%',
            top: '75%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '66%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '81%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '81%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '81%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '81%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '81%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '81%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '81%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '70%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '70%',
            width: '40%'
        }

    ]
    const group8Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '55%',
            width: '40%'
        },
        {
            left: '27%',
            top: '55%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '46%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '61%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '50%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '50%',
            width: '40%'
        }

    ]
    const group9Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '55%',
            width: '40%'
        },
        {
            left: '27%',
            top: '55%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '46%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '61%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '50%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '50%',
            width: '40%'
        }

    ]
    const group10Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '55%',
            width: '40%'
        },
        {
            left: '27%',
            top: '60%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '50%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '61%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '50%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '50%',
            width: '40%'
        }

    ]
    const group11Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '65%',
            width: '40%'
        },
        {
            left: '27%',
            top: '75%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '61%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '71%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '71%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '71%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '71%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '71%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '71%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '71%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '70%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '70%',
            width: '40%'
        }

    ]
    const group12Styles = [
        // this is the archetypes of power styling
        {
            left: '27.5%',
            top: '60%',
            width: '40%',
        },
        // first room start here -33
        {
            left: '32.5%',
            top: '70%',
            width: '40%'
        },
        {
            left: '27%',
            top: '80%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '69%',
            width: '40%'
        },
        // butterfly room - 15
        {
            left: '29%',
            top: '61%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '61%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '60%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '60%',
            width: '40%'
        }

    ]

    return (
        <div >
            <ResponsiveNav />
            {!(1100 <= width && width <= 1940) || !(700 <= height && height <= 1140) ? (
                <>
                    {(width <= 414 && width >= 400) || (width <= 720 && width >= 700) ? (
                        <>{width > height ? (
                            <div id='testContainer' >
                                <TestComponent styleToSet={group1Styles} />
                            </div>
                        ) : (
                            <div id='testContainer'>
                                <p>ROTATE DEVICE</p>
                            </div>
                        )}</>
                    ) : (
                        <div id='testContainer' >
                            {(width <= 778 && width >= 750) || (width <= 399 && width >= 360) ? (
                                <>{width > height ? (
                                    <div id='testContainer'>
                                        <TestComponent styleToSet={group2Styles} />
                                    </div>
                                ) : (
                                    <div id='testContainer'>
                                        <p>ROTATE DEVICE</p>
                                    </div>
                                )}</>
                            ) : (
                                <div id='testContainer' >
                                    {(width <= 820 && width >= 800) || (width <= 320 && width >= 375) ? (
                                        <>
                                            {width > height ? (
                                                <div id='testContainer' >
                                                    <TestComponent styleToSet={group3Styles} />
                                                </div>

                                            ) : (
                                                <div id='testContainer'>
                                                    <p>ROTATE DEVICE</p>
                                                </div>
                                            )}
                                        </>
                                    ) : (
                                        <div id='testContainer'>
                                            {width <= 735 && width >= 701 || (width <= 300 && width >= 280) ? (
                                                <>
                                                    {width > height ? (
                                                        <div id='testContainer' >
                                                            <TestComponent styleToSet={group7Styles} />
                                                        </div>

                                                    ) : (
                                                        <div id='testContainer'>
                                                            <p>ROTATE DEVICE</p>
                                                        </div>
                                                    )}
                                                </>
                                            ) : (
                                                <div id='testContainer'>
                                                    {(width <= 900 && width >= 897) || (width <= 420 && width >= 400) ? (
                                                        <>
                                                            {width > height ? (
                                                                <div id='testContainer' >
                                                                    <TestComponent styleToSet={group7Styles} />
                                                                </div>
                                                            ) : (
                                                                <div id='testContainer'>
                                                                    <p>ROTATE DEVICE</p>
                                                                </div>
                                                            )}
                                                        </>
                                                    ) : (
                                                        <>
                                                            {(width >= 820 && width <= 840) || (width <= 315 && width >= 320) ? (
                                                                <>
                                                                    {width > height ? (
                                                                        <div id='testContainer' >
                                                                            <TestComponent styleToSet={group3Styles} />
                                                                        </div>

                                                                    ) : (
                                                                        <div id='testContainer'>
                                                                            <p>ROTATE DEVICE</p>
                                                                        </div>
                                                                    )}
                                                                </>
                                                            ) : (
                                                                <>
                                                                    {(width >= 780 && width <= 799) || (width <= 420 && width >= 410) ? (
                                                                        <>
                                                                            {width > height ? (
                                                                                <div id='testContainer' >
                                                                                    <TestComponent styleToSet={group8Styles} />
                                                                                </div>
                                                                            ) : (
                                                                                <div id='testContainer'>
                                                                                    <p>ROTATE DEVICE</p>
                                                                                </div>
                                                                            )}
                                                                        </>
                                                                    ) : (<>
                                                                        {(width === 896) || (width <= 340 && width >= 331) ? (
                                                                            <>
                                                                                {width === 414 || height === 414 ? (
                                                                                    <>
                                                                                        {width > height ? (
                                                                                            <div id='testContainer'>
                                                                                                <TestComponent styleToSet={group12Styles} />
                                                                                            </div>
                                                                                        ) : (
                                                                                            <div id='testContainer'>
                                                                                                <p>ROTATE DEVICE</p>
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        {width > height ? (
                                                                                            <div id='testContainer'>
                                                                                                <TestComponent styleToSet={group9Styles} />
                                                                                            </div>
                                                                                        ) : (
                                                                                            <div id='testContainer'>
                                                                                                <p>ROTATE DEVICE</p>
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                )}
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                {(width >= 920 && width <= 930) || (width <= 435 && width >= 420) ? (
                                                                                    <>
                                                                                        {width > height ? (
                                                                                            <div id='testContainer'>
                                                                                                <TestComponent styleToSet={group9Styles} />
                                                                                            </div>
                                                                                        ) : (
                                                                                            <div id='testContainer'>
                                                                                                <p>ROTATE DEVICE</p>
                                                                                            </div>
                                                                                        )}
                                                                                    </>
                                                                                ) : (
                                                                                    <>
                                                                                        {(width >= 840 && width <= 850) || (width <= 400 && width >= 380) ? (
                                                                                            <>
                                                                                                {width === 844 && height >= 300 && height <= 315 ? (
                                                                                                    <>
                                                                                                        {width > height ? (
                                                                                                            <div id='testContainer'>
                                                                                                                <TestComponent styleToSet={group10Styles} />
                                                                                                            </div>
                                                                                                        ) : (
                                                                                                            <div id='testContainer'>
                                                                                                                <p>ROTATE DEVICE</p>
                                                                                                            </div>
                                                                                                        )}
                                                                                                    </>
                                                                                                ) : (
                                                                                                    <>
                                                                                                        {width > height ? (
                                                                                                            <div id='testContainer'>
                                                                                                                <TestComponent styleToSet={group11Styles} />
                                                                                                            </div>
                                                                                                        ) : (
                                                                                                            <div id='testContainer'>
                                                                                                                <p>ROTATE DEVICE</p>
                                                                                                            </div>
                                                                                                        )}
                                                                                                    </>
                                                                                                )}
                                                                                            </>
                                                                                        ) : (
                                                                                            <>
                                                                                                {(width >= 894 && width <= 897) || width === 414 ? (
                                                                                                    <>
                                                                                                        {width > height ? (
                                                                                                            <div id='testContainer'>
                                                                                                                <TestComponent styleToSet={group10Styles} />
                                                                                                            </div>
                                                                                                        ) : (
                                                                                                            <div id='testContainer'>
                                                                                                                <p>ROTATE DEVICE</p>
                                                                                                            </div>
                                                                                                        )}</>
                                                                                                ) : (
                                                                                                    <>
                                                                                                        {(width === 736 || width === 414) ? (
                                                                                                            <>
                                                                                                                {width > height ? (
                                                                                                                    <div id='testContainer'>
                                                                                                                        <TestComponent styleToSet={group10Styles} />
                                                                                                                    </div>
                                                                                                                ) : (
                                                                                                                    <div id='testContainer'>
                                                                                                                        <p>ROTATE DEVICE</p>
                                                                                                                    </div>
                                                                                                                )}</>
                                                                                                        ) : (
                                                                                                            <>
                                                                                                                {width === 667 || width === 375 ? (
                                                                                                                    <>
                                                                                                                        {width > height ? (
                                                                                                                            <div id='testContainer'>
                                                                                                                                <TestComponent styleToSet={group10Styles} />
                                                                                                                            </div>
                                                                                                                        ) : (
                                                                                                                            <div id='testContainer'>
                                                                                                                                <p>ROTATE DEVICE</p>
                                                                                                                            </div>
                                                                                                                        )}</>
                                                                                                                ) : (
                                                                                                                    <>
                                                                                                                        {width === 844 || width === 307 ? (
                                                                                                                            <>
                                                                                                                                {width > height ? (
                                                                                                                                    <div id='testContainer'>
                                                                                                                                        <TestComponent styleToSet={group11Styles} />
                                                                                                                                    </div>
                                                                                                                                ) : (
                                                                                                                                    <div id='testContainer'>
                                                                                                                                        <p>ROTATE DEVICE</p>
                                                                                                                                    </div>
                                                                                                                                )}</>
                                                                                                                        ) : (
                                                                                                                            <p>SORRY YOUR DEVICE IS NOT COMPATIBLE -- Please report these number to customer support: Width: {width} Height: {height}</p>
                                                                                                                        )}</>
                                                                                                                )}
                                                                                                            </>
                                                                                                        )}
                                                                                                    </>
                                                                                                )}
                                                                                            </>
                                                                                        )}
                                                                                    </>
                                                                                )}
                                                                            </>
                                                                        )}
                                                                    </>
                                                                    )}
                                                                </>
                                                            )}
                                                        </>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )
                    }
                </>
            ) : (
                <div id='testContainer'>
                    {(width <= 1440 && width >= 1367) ? (
                        <TestComponent styleToSet={group4Styles} />
                    ) : (
                        <>
                            {width <= 1349 && width >= 1100 ? (
                                <TestComponent styleToSet={group5Styles} />
                            ) : (
                                <>
                                    {width <= 1940 && width >= 1900 ? (
                                        <TestComponent styleToSet={group6Styles} />
                                    ) : (
                                        <p>SORRY YOUR DEVICE IS NOT COMPATIBLE -- Please report these number to customer support: Width: {width} Height: {height}</p>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </div>
            )}
            <Footer />
        </div >
    );
}
export default Test;