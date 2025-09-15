import Hero from './hero.png';
import Card from './Card';
import CodeImg from './exImg.png';
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
                    title="Collaborative Godot W.I.P. Game"
                    type="Code"
                    image={CodeImg}
                    alt="Example game image"
                    description="Mystery-ridden puzzle game set in the Ming Dynasty. CSP + Godot Engine."
                />
                <Card 
                    title="'Flowing Catastrophe'"
                    type="Art"
                    image={ArtImg}
                    alt="Example art image"
                    description="Created scene and expression via an original character and storyline."
                />
                <Card 
                    title="Collaborative Godot W.I.P. Game"
                    type="Code"
                    image={CodeImg}
                    alt="Example game image"
                    description="Mystery-ridden puzzle game set in the Ming Dynasty"
                />
            </div>
        </>
    )
}

export default Home