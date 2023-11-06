import { ReactDOM } from "react-dom";

function Modal({ onClose, children, actionBar }) {
    return ReactDOM.createPortal(
        <div>
            <div 
                onClick={onClose} 
                className="absolute inset-0 bg-gray-300 opacity-80">
            </div>
            <div classname="absolute inset-40 p-10 bg-white">
                <div classname="flex flex-col justify-between h-full">
                    {children}
                    <div classname="flex justify-end">{actionBar}</div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')
    );
}

export default Modal;