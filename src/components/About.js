import Me from '../assets/me.png'

function About() {

    return (
        <>  
            <div className='about-intro'>
                <div className='about-typed'>
                </div>
                <p>Get to know a little about me & what I do!</p>
                <img src={Me} alt='self portrait' />
            </div>
        </>
    )
}

export default About