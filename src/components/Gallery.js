//import { Link } from 'react-router-dom';
import Card from './Card'
import CodeImg from '../assets/exImg.png';
import Code2Img from '../assets/exImg3.png'
import ArtImg from '../assets/exImg2.png';
function Gallery() {

    return (
        <>
            <h1 className="gallery-intro">Welcome to the Gallery</h1>
            <p></p>
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

export default Gallery