import { ReactDOM } from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
    useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);

    return ReactDOM.createPortal(
        <div>
            <div 
                onClick={onClose} 
                className="fixed inset-0 bg-gray-300 opacity-80">
            </div>
            <div classname="fixed inset-40 p-10 bg-white">
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