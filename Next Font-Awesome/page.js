
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the Font Awesome CSS styles
import './fontawesome'; // Import your Font Awesome configuration

function Home() {
    return (
        <div>
            <h1>My Next.js App</h1>
            <FontAwesomeIcon icon={faCoffee} />
            <FontAwesomeIcon icon={faPaperPlane} /> 
        </div>
    );
}

export default Home;
