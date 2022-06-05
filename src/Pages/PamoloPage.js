import ResponsiveNav from '../Layouts/responsiveNav.js';
import Footer from '../Layouts/footer.js';
import BlogShop from '../Layouts/BlogShop.js';
import topImg from '../Assets/Images/blog-images/Meet Palomo Spain.png';
import pamolo from '../Assets/Images/blog-images/2nd ARTICLE - Palomo Spain (Red Floral Maxi Kaftan) 6554€.jpeg';
import pamolo1 from '../Assets/Images/blog-images/2nd ARTICLE - Palomo Spain (Red Floral Cargo Trousers) 454€.jpeg';
import pamolo2 from '../Assets/Images/blog-images/2nd ARTICLE - Palomo Spain (Blue Psico Romeo Jacket) 454€.jpeg';
import pamolo3 from '../Assets/Images/blog-images/2nd ARTICLE - Palomo Spain (Aitor Blue Shirt) 353€.jpeg';
import pamolo4 from '../Assets/Images/blog-images/2nd ARTICLE - Meet Palomo Spain.jpg';
import pamolo5 from '../Assets/Images/blog-images/2nd ARTICLE - Meet Palomo Spain.webp';
import pamolo6 from '../Assets/Images/blog-images/2nd ARTICLE - Meet Palomo Spain.jpeg';
import pamolo7 from '../Assets/Images/blog-images/2nd ARTICLE - Meet Palomo Spain(1).webp';
import '../Assets/css/blogscss.css';

function PamoloPage() {
    return (
        <div>
            <ResponsiveNav />
            <div id='pamolo-container'>
                <div id='title-div'>
                    <h1 id='blog-title'>
                        THE IMPORTANCE OF BEING WHO YOU ARE
                    </h1>
                    <h1 id='second-title'>INTERVIEW WITH ALEJANDRO GÓMEZ PALOMO, THE DESIGNER OF PALOMO SPAIN</h1>
                </div>
                <div className='d-flex flex-column align-items-start' id='author-container'>
                    <p>
                        BY ANGELA DI PEDE
                    </p>
                    <p>
                        APRIL 26, 2022
                    </p>
                </div>
                <p id='first-p'>We had an open conversation with the designer of the brand Palomo Spain, Alejandro Gòmez Palomo. We talked about his main sources of inspiration, identity and the sensual
                    aesthetic of the brand.
                </p>
                <div className='d-flex flex-lg-row flex-column' id='single-div'>
                    <div className='d-flex flex-column' id='top-p-container'>
                        <div>
                            <h6>What is the process when you have to create a new collection?</h6>
                            <p>“When I’m making collections I try to put stories together. Although I don’t automatically think of what people might identify as ‘wearable’, I think I blend the amount of showpieces and pieces that can actually sell pretty well. More and more, I practice the exercise of bringing accessible, comfortable pieces that we can find in everyone’s wardrobe.”</p>
                        </div>
                        <div>
                            <h6>Where do fantasy and reality intersect?</h6>
                            <p>“I think a lot of people, including myself, live in that exact world in-between fantasy and reality. Most of the times I am surrounded by others that inspire me, that I want to see, that understand me. It’s only when I go on the street that I’m suddenly confronted with how different lives can be and how different people’s perceptions are. That’s the moment I realize there are people that don’t get the way we dress, don’t value what we do, and don’t understand our concept. For me, that’s always quite a shock.”</p>
                        </div>
                        <div>
                            <h6>With your eclectic clothes and your very idyllic work environment, do you feel like your fantasy ultimately is the better reality?</h6>
                            <p>“In my opinion the world I live in is quite ideal. What I do is treated as completely normal as everybody has the same mind-set. I think people should focus on their own problems and goals more instead of trying to criticize others. That’s what I hate the most, judgment and prejudices. Everyone should be free to fully embrace what he or she truly loves to do.”</p>
                        </div>
                    </div>
                    <img src={topImg} alt="" id='top-img' />
                </div>
                <div id='middle-p' className='div-padding'>
                    <h6>One of the main sources of inspiration in your work is definitely Spanish culture. Can you tell us something about the Spanish heritage present in your brand?</h6>
                    <p>“I believe being one hundred percent Spanish-made adds value to my brand,” he explains. “I am proud of the industry in my home country and want to make people realize just how much artisanal and industrial activity we master here. Spain has a strong essence, it is more authentic to me. It’s a small act of bravery, rebellion even. It is the light, the spirit of the people, this marvelous energy that allows me to feel inspired. I couldn’t do what I do if I didn’t have my hometown, family and environment around me all the time. Moreover, I can pick ideas, images and inspiration from many places. But coherently analyzing everything and converting it into my new collections, that only happens in Posadas.”</p>
                </div>
                <div className='d-flex flex-row' id='double-imgs'>
                    <img src={pamolo7} alt="" />
                    <img src={pamolo4} alt="" />
                </div>
                <div id='specific-div' className='div-padding'>
                    <h6>As you said before, the expression of identity is one of the key elements of your work in Palomo Spain. Can you tell us what exactly is the identity for you?</h6>
                    <p>“First of all, I hate when people describe my brand as “gender-bending” or “androgynous”. It’s not that I don't identify with those terms —I just find it embarrassing to even have to define ‘man’ and ‘woman’ in the first place. My brand is about freedom and dismissing convention,” - says the 30-year-old. “Freedom is deciding how or who we want to be. It’s also choosing to dress as we like and how to portray ourselves. This is about way more than gender conventions,” he adds. “It is about being yourself, enjoying yourself, and being fabulous.”</p>
                </div>
                <div className='div-padding'>
                    <h6>Do you want to break taboos?</h6>
                    <p>“I’m not trying to think of it as taboo. I propose this liberty because I see it as something that couldn’t be any more normal. I hope a vast majority of people feel the same way—if not now, very soon! Even when it comes to castings for a show or a shoot, we tend to select boys who are much more than “models”, we never look at the physical only,” he explains. “We need boys with attitude, who believe in what they’re doing and interpret the character that’s wearing my clothes, we need to feel a connection with them. It’s a bond created by sharing our concept of beauty, comfort and many times a sense of humor as well.” </p>
                </div>
                <img src={pamolo5} alt="" id='single-img-bottom' />
                <div className='div-padding'>
                    <h6>The majority of your customers are male. In your opinion when exactly did it become so cool for men not to care about the common idea of masculinity? Why do masculinity and indifference to appearance go hand in hand?</h6>
                    <p>“Not long ago, extravagant garments carried connotations of power: in the seventeenth century, Louis XIV tottered around in stacked heels, tumbling ruffs, and towering wigs. Half a century ago, even Sean Connery rocked a thigh-skimming, terry cloth romper… For me masculinity does not depend on the clothes you wear. It is a matter of attitude, as we all should know by now. It is how you act, how you walk, how you talk!” exclaims the designer. “I find it so old-fashioned that we still discuss it in such conventional terms.”</p>
                </div>
                <div className='div-padding'>
                    <h6>What makes your brand the perfect fit for the lover archetype?</h6>
                    <p>“My brand is the perfect balance between sensuality and art, having as a main source of inspiration the Renaissance-style depictions of nudity.” said the designer. “I think we all explore sexuality. What people identify as playing with gender conventions, I do in such a natural way that I don’t even think of it. I find ambiguity funny and sexy, and exploring the feminine side of boys can be very interesting. In other words sensuality is definitely the core of Palomo Spain and that is why I consider it to be the perfect pick for the lover archetype.”</p>
                </div>
                <div className='div-padding'>
                    <h6>What is the connection between fashion and sensuality? How can clothes achieve to evoke these feelings?</h6>
                    <p>“It’s a mix of the clothes per se but also the mind-set of the wearer. I had this idea of what someone would put on to get attention, to be a bit provocative. It was all about boys going looking for other boys, seductiveness, and also the power of virginity. Something that is so alluring yet kind of forbidden, very fragile and delicate.”</p>
                </div>
                <div>
                    <img src={pamolo6} alt="" id='last-img-bottom' />
                </div>
                <h5 id='last-h5'>CHECK THE ITEMS SELECTED BY ARKX’S EDITORS FROM PALOMO SPAIN, THE FASHION BRAND THAT BLURS THE LINE BETWEEN FEMININITY AND MASCULINITY COMBINING COSTUME HERITAGE WITH SPANISH CRAFTSMANSHIP AND ESSENCE.</h5>
                <h2 id='shop-vitelli' className='d-flex flex-row justify-content-start'>SHOP PALOMO SPAIN</h2>
                <div id='pamolo-blog-shop'>
                    <BlogShop obj={[[pamolo, pamolo1, pamolo2, pamolo3], ['Pamolo Spain'], ['Red Floral Maxi Kaftan', 'Red Floral Cargo Trousers', 'Blue Psico Romeo Jacket', 'Aitor Blue Shirt'], ['6554€', '454€', '454€', '353€']]} />
                </div>
            </div>
            <Footer />
        </div>
    )
}
export default PamoloPage;