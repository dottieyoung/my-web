import Hero from './hero.png';
import Card from './Card';
import CodeImg from './exImg.png';
import Code2Img from './exImg3.png'
import ArtImg from './exImg2.png';

function Home() {

    return (
        <>
            <div className='hero-div'>
                <img src={Hero} className='hero-png' alt='hero'></img>
            </div>
            <div className='contact'>
            </div>
            <div className='card-examples'>
                <Card 
                    title="Untitled Godot Game"
                    type="Code"
                    image={CodeImg}
                    alt="Example game image"
                    description="Mystery-ridden puzzle game set in the Ming Dynasty. Collaboration. WIP."
                />
                <Card 
                    title="'Flowing Catastrophe'"
                    type="Art"
                    image={ArtImg}
                    alt="Example art image"
                    description="Created scene and expression via an original character and storyline."
                />
                <Card 
                    title="Beatha na mara"
                    type="Code"
                    image={Code2Img}
                    alt="Example app image"
                    description="Self-Logging application for aquatic life sightings in Ireland"
                />
            </div>
        </>
    )
}

export default Home