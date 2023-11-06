import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from '../components/Button';

function ButtonPage () {
    const handleClick = () => {};

    return (
        <div>
            <div>
                <Button success rounded outline className="mb-5" onClick={handleClick}>
                    <GoBell />
                    Click me!!
                </Button>
            </div>
            <div>
                <Button danger outline onMouseEnter={handleClick}>
                    <GoCloudDownload />
                    Buy now!
                </Button>
            </div>
            <div>
                <Button warning onMouseLeave={handleClick}>
                    <GoDatabase />
                    See Deal!
                </Button>
            </div>
            <div>
                <Button secondary outline>
                    Hide ads!
                </Button>
            </div>
            <div>
                <Button primary rounded>
                    Something
                </Button>
            </div>
        </div>
    );
}

export default ButtonPage;