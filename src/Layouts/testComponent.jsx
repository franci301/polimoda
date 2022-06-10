import util from '../Assets/maths/logistics.js';
import Creator from '../Assets/Images/arch-images/The Creator 1.jpg';
import Explorer from '../Assets/Images/arch-images/The Explorer 1.jpg';
import Hero from '../Assets/Images/arch-images/The Hero 1.jpg';
import Innocent from '../Assets/Images/arch-images/The Innocent.jpg';
import Outlaw from '../Assets/Images/arch-images/The Outlaw.jpg';
import Ruler from '../Assets/Images/arch-images/The Ruler.jpg';
import Caregiver from '../Assets/Images/arch-images/The Caregiver.jpg';
import Everyman from '../Assets/Images/arch-images/The Everyman.jpg';
import Jester from '../Assets/Images/arch-images/The Jester 1.jpg';
import Magician from '../Assets/Images/arch-images/The Magician.jpg';
import Sage from '../Assets/Images/arch-images/The Sage.jpg';
import Lover from '../Assets/Images/arch-images/The Lover.jpg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from "../firebase/firebase-config";
import { updateDoc, doc } from 'firebase/firestore';
import getArchetypes from '../firebase/getArchetypes.js';
import caregiverRender from '../Assets/Images/renders/caregiver render.jpg';
import loverRender from '../Assets/Images/renders/lover render.jpg';
import explorerRender from '../Assets/Images/renders/explorer with rocks.jpg';
import innocentRender from '../Assets/Images/renders/innocent 23.jpg';
import jesterRender from '../Assets/Images/renders/jester.jpg';
import magicianRender from '../Assets/Images/renders/magician finale_.jpg';
import outlawRender from '../Assets/Images/renders/outlaw. lucejpg.jpg';
import rulerRender from '../Assets/Images/renders/ruler_.jpg';
import sageRender from '../Assets/Images/renders/sage.jpg';
import heroRender from '../Assets/Images/renders/hero.jpg';
import creatorRender from '../Assets/Images/renders/Creator .jpg';
import everymanRender from '../Assets/Images/renders/everyman 1.jpg';
import startRoom from '../Assets/Images/renders/stanza.jpeg';
import '../Assets/css/testPage.css';

var answerArr = [
    // 6, 6, 3,
    // 5, 4, 2,
    // 1, 1, 4,
    // 5, 4, 1,
    // 6, 5, 5,
    // 1, 4, 1,
    // 4, 1, 1,
    // 3, 5, 1,
    // 6, 6, 5,
    // 0, 3, 0,
    // 1, 1, 2,
    // 4, 1, 0
];

function TestComponent({styleToSet}) {
    const questions = [
        'When I spend some time hanging out with my friends or relatives for a coffee, I often show empathy towards them when listening to their perspectives and feelings.'
        , 'Whenever I decide to go on vacation and travel with some of my friends to places that we have never visited, I am usually perceived as a guide supporting them.'
        , 'Since I have become more aware of the importance of self-care and personal dedication, I tend to put myself first.'
        , 'Whether I am at school, college, university, or job, if I need to work in teams, I usually take on leadership roles.'
        , 'As soon as I wake up, I follow the schedule and activities I have planned for the day to keep things organized, in control, on time, and feel responsible while doing them.'
        , 'Sometimes, both in the working environment and in my private life, I might be perceived as intimidating by people surrounding me.'
        , 'During my art & craft classes or courses that require imagination, I often consider myself a non-conformist, usually driven by the desire for self-expression and artistry.'
        , 'When I find myself in a crowd, I do not feel comfortable if people around me are not as authentic and unique as I am.'
        , 'If I find myself in places that allow me to research and experiment (e.g. a laboratory), I seek to design, develop and come up with innovative, imaginative and out-of-the-ordinary objects or processes.'
        , 'When visiting my grandparents, I like to go over my family history and look at old photos, and this often makes me feel nostalgic.'
        , 'Among the different leisure activities that I entertain myself with, I enjoy volunteering for the causes I care about the most, since it is something that makes me happy and cheerful.'
        , 'When I argue with my friend, I am usually the first one to forgive, even if sometimes it is not my fault, to always maintain a peaceful environment with the people I care the most.'
        , 'I often read, go to libraries and attend conventions of all kinds of topics, as I long for new knowledge and am interested in inner knowing and understanding of the external world.'
        , 'During dinners together in company, I often bring the discussion to captivating philosophical conversations, enriching my wisdom and highly cultured knowledge.'
        , 'Whenever I find myself surrounded by people that think through emotional feelings, I try to influence them to rely more on rational thoughts.'
        , 'When looking for job opportunities, I seek to find a job that allows me to change my place of living after a short period of time, always staying optimistic and enthusiastic for what will come next.'
        , 'Every day, in front of different decisions (e.g. new experiences & activities), I try to undertake all of them to obtain a more fulfilling, challenging and daring life.'
        , 'During my free time, I prefer to practice solitary pursuits or individual sports (e.g. kayaking, skiing, biking or running).'
        , 'In social gatherings, I often tend to create discussions revolving around social taboos, and my goal is to break them.'
        , 'I often find myself amid manifestations with the aim of revolting, trying to destroy what is not working in society or an old ‘way of thinking’ to make room for something new.'
        , 'I often find myself needing to prove my vision of the world through a disruptive and radical way.'
        , 'I am often perceived as someone living in his own world of fantasy, trying to satisfy all of my dreams and desires, yet understanding my place in this world.'
        , 'Whenever I face inner or external difficulties, I often look for spiritual guidance that can help me change my attitudes and behaviors before thinking about changing the world.'
        , 'I use my knowledge as a way to transform the world and people’s minds.'
        , 'Whenever I see a person being in an uncomfortable situation (being bullied or intimidated), I always try to help.'
        , 'Whenever I am with my siblings or friends, I advise them to take concrete measures, which might lead to remarkable progress and positive results.'
        , 'I live by values that persevere and promote my courage to act in any given situation or activity, aspiring to the soul of an athlete, never giving up and being accountable for every action and decision taken.'
        , 'I consider myself quite indecisive, which makes it preferable when others in the group decide which activities to do.'
        , 'I have always been driven by the possibility of attending summer camps, as it leads to a feeling of belonging and family.'
        , "Whenever I am attending a party or a social event, I don't like to be the center of attention and I usually talk only to people that I already know."
        , "In middle and high school, during a class, I was considered the person to be the center of everybody else's attention, constantly talking and trying to make my classmates laugh."
        , "If someone asks me for some tips to live one's own life, I tell him to live and enjoy it to the fullest, not taking it too seriously, experiencing all emotions to the maximum, and capturing the playfulness."
        , "Despite facing difficulties and issues in my life, I still want to be seen as a joyful and cheerful person."
        , "No matter where I go to study or work, I always make sure to keep in touch and be deeply connected with my group of friends from high school."
        , "In different circumstances, my behaviors are often determined by my emotions rather than me managing my emotions to control certain attitudes."
        , "I like feeling desired and attracting people when I go out."]

    const [value, setValue] = useState(0);
    const [counter, setCounter] = useState(0);
    const [imgStyles, setStyles] = useState(styleToSet[0]);


    const [question, setQuestion] = useState('');
    const [text, setText] = useState('');
    const [roomCounter, setRoomCounter] = useState(1);
    const [roomImg, setImg] = useState(caregiverRender);
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);
    const navigate = useNavigate();
    const archetypes = [
        "Caregiver", "Ruler", "Creator", "Innocent",
        "Sage", "Explorer", "Outlaw",
        "Magician", "Hero", "Everyman", "Jester", "Lover"
    ];
    const images = {
        Creator, Explorer, Hero, Innocent, Outlaw, Ruler, Caregiver, Everyman, Jester, Magician, Sage, Lover
    }
    const roomImgs = [caregiverRender, rulerRender, creatorRender, innocentRender, sageRender, explorerRender, outlawRender, magicianRender, heroRender, everymanRender, jesterRender, loverRender]
    let archetypesToPush = [];
    let archetypesImages = [];

    // her resolution for the monitor (13 inches)
    async function resultsPage() {
        // console.log(answerArr, ' before shift');
        answerArr.shift();
        // console.log(answerArr, ' after shift');
        const archetypesValues = util.showPercentages(answerArr);
        // console.log(archetypesValues)
        for (let index = 0; index < archetypesValues.length; index++) {
            let img = images[archetypes[archetypesValues[index][0]]];
            let archetype = archetypes[archetypesValues[index][0]];
            archetypesToPush.push(archetype);
            archetypesImages.push(img);
        }
        let descriptionArr = [];
        for (let i = 0; i < archetypesToPush.length; i++) {
            let description = await getArchetypes(archetypesToPush[i]);
            descriptionArr.push(description);
        }
        const archetypeOrder = util.master(answerArr);
        if (!localStorage.getItem('userLogin')) {
            localStorage.setItem('testResults', JSON.stringify([archetypesToPush, descriptionArr, archetypesImages, archetypeOrder]));
            navigate('/RegisterPage/*')
        } else {
            const obj = localStorage.getItem('userLogin');
            const user = JSON.parse(obj);
            const userCollectionRef = doc(db, "users", user.user.uid);
            await updateDoc(userCollectionRef, {
                archetypesValue: archetypesToPush,
                archetypesImage: archetypesImages,
                archetypeDescription: descriptionArr,
                archetypeOrder: archetypeOrder
            });
            answerArr = [];
            navigate('/MyProfile/*')
            // ,{state:{answerArr}}
        }
    }
    // once the page loads, check to see if the user is logged in.
    // if they are then alert them that re doing the test will overwrite their previous results
    function increment() {
        // console.log(counter,questions.length)
        if (counter >= questions.length) {
            resultsPage();
        } else {
            if (value !== -1) {
                answerArr.push(value);
                setText('');
                setValue(-1); // comment out to test quiz without answers
                setQuestion(questions[counter]);
                setCounter(counter + 1);
                var radios = document.getElementsByName('choice');
                for (let index = 0; index < radios.length; index++) {
                    radios[index].checked = false;
                }
                if (counter === 0) {
                    setStyles(styleToSet[1])
                }
                if (counter % 3 === 0 && counter !== 0) {
                    // setRoomId(room + 1)
                    setRoomCounter(roomCounter + 1)
                    setImg(roomImgs[roomCounter])
                    setStyles(styleToSet[roomCounter+1])
                }
            } else {
                setText("Please select an option");
            }
        }
    }

    return (
        <><div>
            {counter === 0 ? (
                <img src={startRoom} alt="" />
            ) : (
                <img src={roomImg} alt="" />
            )}
            <div id='questions-container' style={imgStyles}>
                <div id='testCenterDiv'>
                    {counter === questions.length + 1 ? (
                        <div>End Of Quiz</div>
                    ) : (
                        <h6>{question}</h6>
                    )}
                </div>
                <div>
                    <div className='d-flex flex-col justify-content-center' id='choiceDiv' >
                        {question === '' || counter > questions.length ? (
                            null
                        ) : (
                            <div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(0) }} />
                                    <label>Dont Identify</label>
                                </div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(1) }} />
                                    <label>1</label>
                                </div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(2) }} />
                                    <label>2</label>
                                </div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(3) }} />
                                    <label>Neutral</label>
                                </div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(4) }} />
                                    <label>4</label>
                                </div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(5) }} />
                                    <label>5</label>
                                </div>
                                <div id='test'>
                                    <input type="radio" name="choice" value="0" onChange={(event) => { setValue(6) }} />
                                    <label>Strongly Identify</label>
                                </div>
                            </div>
                        )}
                    </div>
                    <p className="text-danger">{text}</p>
                </div>
            </div>
            {question === '' ? (
                <div id='start-div'>
                    <p>Archetypes of Power Discovery is a Jungian Archetypes based personality test, designed to help you better understand yourself and your identity, as well as your source of power to achieve stylistic power personalization. By spending approximately 5-7 minutes to complete Archetypes of Power Discovery, you will become aware of your 3 dominant archetypes and a personalized product offering based on all the twelve archetypes, suitable for your personality. <br /> <br /> Click on the glass door to explore your inner world.  </p>
                    <div id='door-parent' onClick={increment}>
                        &nbsp;
                    </div>
                </div>
            ) : (
                <div id='door-parent' onClick={increment}>
                    <div id='door'>
                        &nbsp;
                    </div>
                </div>
            )}        
        </div></>
    )
}
export default TestComponent;