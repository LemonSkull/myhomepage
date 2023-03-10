import SlideShow from '../components/slideshow';
import YoutubePlayer from '../components/youtube_player';
import './styles.css';
import img1 from "../assets/images/RacingGame/image-1.png";
import img2 from "../assets/images/RacingGame/image-2.png";

export default function RacingGamePage({ imageSlider }) {
    const scaleItem = window.innerWidth < imageSlider.width; // Boolean for checking max width for the slider
    const screenWidth = window.innerWidth - 40; // Current screen width minus margin
    const sliderWidth = scaleItem ? screenWidth : imageSlider.width;
    const sliderHeight = scaleItem ? (imageSlider.height / imageSlider.width) * screenWidth : imageSlider.height;

    const slides = [
        { url: img1, title: "Gameplay1" },
        { url: img2, title: "Gameplay2" },
    ];

    const containerStyles = {
        width: sliderWidth + 'px',
        height: sliderHeight + 'px',
        margin: '0 auto',
        marginBottom: '100px',
    }

    return (
        <form className="main-page">
            <h2 className='main-headline'>Racing Game - Android</h2>
            <div style={containerStyles} >
                <SlideShow autoplay={false} slideImages={slides} imageHeight={sliderHeight + 'px'} />
            </div>
            <div className='margin-group'>
                <h3 className='secondary-headline'>Info</h3>
                <div className='border-lines'>
                    <p>
                        3D racing game for Android and PC with Retro PlayStation 1 vibes
                    </p>
                    <p>Racing game (demo) which is mainly aimed for mobile environment with touchscreen control scheme. Game is made by using Unity engine and car models are self made in Blender.</p>
                </div>
            </div>
            <h3 className='secondary-headline'>Gameplay</h3>
            <div className='youtube-video'>
                <YoutubePlayer className='youtube-video' videoId={"tdy9ZAxmlzs"} />
            </div>
        </form>
    );
}