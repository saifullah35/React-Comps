import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {
    const [ showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>
                Here is an important agreement for you to accept
            </p>
        </Modal>
    );

    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Praesent ac placerat libero. Fusce mattis varius dapibus. 
                Nam mi nisl, venenatis non auctor et, posuere quis tellus. 
                Nullam tristique, nibh vitae fermentum facilisis, erat leo volutpat ex, 
                sit amet suscipit massa nunc eget est. Nunc accumsan iaculis posuere. 
                Suspendisse et gravida nibh, at efficitur odio. Aenean sit amet quam leo. 
                Etiam quis nisi eget felis feugiat tempor vel a augue. Cras ullamcorper diam 
                ac quam luctus lobortis. Phasellus sagittis molestie augue, a pellentesque ex 
                iaculis non. Morbi libero nulla, porta non felis eu, laoreet pretium magna.
            </p>

        </div>
    );
}

export default ModalPage;