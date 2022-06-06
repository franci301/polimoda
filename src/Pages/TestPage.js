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
            top: '52%',
            width: '40%'
        },
        {
            left: '28%',
            top: '52%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '45%',
            width: '40%'
        },
        // butterfly room
        {
            left: '29%',
            top: '53%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '53%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '53%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '53%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '53%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '53%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '53%',
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
            top: '45%',
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
        // first room start here
        {
            left: '32.5%',
            top: '52%',
            width: '40%'
        },
        {
            left: '27%',
            top: '56%',
            width: '40%'
        },
        // colourfull grid room
        {
            left: '29%',
            top: '49%',
            width: '40%'
        },
        // butterfly room
        {
            left: '29%',
            top: '56%',
            width: '40%'
        },
        // desert/ tree room
        {
            left: '28%',
            top: '56%',
            width: '40%'
        },
        // green panel room
        {
            left: '28%',
            top: '56%',
            width: '40%'
        },
        // barbed wire room
        {
            left: '28%',
            top: '56%',
            width: '40%'
        },
        // blue doorway
        {
            left: '28%',
            top: '56%',
            width: '40%'
        },
        // metal room
        {
            left: '28%',
            top: '56%',
            width: '40%'
        },
        // statues on right room
        {
            left: '28%',
            top: '56%',
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
            top: '56%',
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
            top: '49%',
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

    return (
        <div >
            <ResponsiveNav />
            {!(1178 <= width && width <= 1500) || !(700 <= height && height <= 880) ? (
                <>
                    {(width <= 414 && width >= 400) || (width <= 720 && width >= 700) ? (
                        <>{width > height ? (
                            <><TestComponent styleToSet={group1Styles} /></>
                        ) : (
                            <div id='testContainer'>
                                <p>ROTATE DEVICE</p>
                            </div>
                        )}</>
                    ) : (
                        <div id='testContainer'>
                            {(width <= 778 && width >= 750) || (width <= 399 && width >= 360) ? (
                                <>{width > height ? (
                                    <><TestComponent styleToSet={group2Styles} /></>
                                ) : (
                                    <div id='testContainer'>
                                        <p>ROTATE DEVICE</p>
                                    </div>
                                )}</>
                            ) : (
                                <div id='testContainer'>
                                    {(width <= 820 && width >= 800) || (width <= 320 && width >= 370) ? (
                                        <><TestComponent styleToSet={group3Styles} /></>
                                    ) : (
                                        <div id='testContainer'>
                                        <p>ROTATE DEVICE</p>
                                    </div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </>
            ) : (
                <>here 4</>
            )}
            <Footer />
        </div>
    );
}
export default Test;