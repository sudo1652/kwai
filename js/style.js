import { useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button id="myBtn" onClick={openModal}>Open Modal</button>

            {isOpen && (
                <div id="myModal" className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>×</span>
                        <p>Some text in the Modal..</p>
                    </div>
                </div>
            )}
        </div>
    );
}
