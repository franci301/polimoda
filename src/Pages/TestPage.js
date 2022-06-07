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
// }
// Group4:{ 
//     1420 x 778
//     1440 x 716
//     1440 x 789
// }
// Group5:{
//     1397 x 716
// }
// }

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
            top: '67%',
            width: '40%'
        },
        // 56 --> 70
        {
            left: '27%',
            top: '70%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '64%',
            width: '40%'
        },
        // butterfly room
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
            top: '65%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '65%',
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
            top: '75%',
            width: '40%'
        },
        {
            left: '27%',
            top: '79%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '69%',
            width: '40%'
        },
        // butterfly room
        {
            left: '29%',
            top: '69%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '69%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '69%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '69%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '69%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '69%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '69%',
            width: '40%'
        },
        // nature room
        {
            left: '28%',
            top: '73%',
            width: '40%'
        },
        // final room
        {
            left: '28%',
            top: '73%',
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

    return (
        <div >
            <ResponsiveNav />

            {!(1100 <= width && width <= 1500) || !(700 <= height && height <= 880) ? (
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
                                    {(width <= 820 && width >= 800) || (width <= 320 && width >= 370) ? (
                                        <div id='testContainer' >
                                            <TestComponent styleToSet={group3Styles} />
                                        </div>
                                    ) : (
                                        <div id='testContainer'>
                                            <p>SORRY YOUR DEVICE IS NOT COMPATIBLE -- Please report these number to customer support:Width: {width}Height: {height}</p>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <div id='testContainer'>
                    {(width <= 1440 && width >= 1350) ? (
                        <TestComponent styleToSet={group4Styles} />
                    ) : (
                        <>
                            {width<=1349 && width>= 1100 ?(
                                <TestComponent styleToSet={group5Styles} />
                            ):(
                                <p>SORRY YOUR DEVICE IS NOT COMPATIBLE -- Please report these number to customer support:Width: {width}Height: {height}</p>
                            )}
                        </>

                    )}
                </div>
            )}
            <Footer />
        </div>
    );
}
export default Test;