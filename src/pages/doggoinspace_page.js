import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/DoggoInSpace/image-1.png";
import img2 from "../assets/images/DoggoInSpace/image-2.png";

export default function DoggoInSpacePage({ imageSlider }) {
    const scaleItem = window.innerWidth < imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth - 40; // Current screen width minus margin
    const sliderWidth = scaleItem ? screenWidth : imageSlider.width;
    const sliderHeight = scaleItem ? (imageSlider.height / imageSlider.width) * screenWidth : imageSlider.height;

    const slides = [
        { url: img1, title: "Menu" },
        { url: img2, title: "Gameplay1" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Doggo in Space</h2>
            <div style={containerStyles} >
                <SlideShow autoplay={false} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                        Space exploration where your goal is to survive in earth's exosphere as long as possible
                    </p>
                    <p>Flappy bird styled gameplay with the spice of space elements. This is endless runner where your job is to keep going as long as possible. High score is based on time you spend in space without crashing.
                        Project aimed for mobile devices and on "itch.io" (browser). Made in Unity.</p>
                </div>
                <div className='border-lines'>
                    <p>Test the game on your browser:</p>
                    <a href="https://jarwes.itch.io/doggoinspace2" title='itch.io'>Play now</a>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"cOuAjDFyc20"} />
            </div>
        </form>
    );
}