import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function MessageForm() {
    const form = useRef();
    const [messageStatus, setMessageStatus] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_EMAILJS_YOUR_SERVICE_ID, process.env.REACT_APP_EMAILJS_YOUR_TEMPLATE_ID, form.current, process.env.REACT_APP_EMAILJS_YOUR_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text);
                setMessageStatus('Message sent');
                setIsModalOpen(true);
            }, (error) => {
                console.log(error.text);
                setMessageStatus('Error');
                setIsModalOpen(true);
            });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessageStatus(null);
        form.current.reset();
    };

    return (
        <div>
            <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block mb-1 font-medium">
                        Name:
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email:
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="w-full px-3 py-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block mb-1 font-medium">
                        Message:
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        className="w-full px-3 py-2 border rounded"
                        required
                    ></textarea>
                </div>
                <button
                    type="submit"
                    value="Send"
                    className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-2 py-2 rounded-md ml-8 hover:bg-blue-600"
                >
                    SEND MESSAGE
                </button>
                {/* {messageStatus && (
                <div className={`text-center mt-4 ${messageStatus === 'Message sent' ? 'text-green-500' : 'text-red-500'}`}>
                {messageStatus}
                </div>
            )} */}
            </form>

            {isModalOpen && (
                <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow">
                        <p className={`text-center ${messageStatus === 'Message sent' ? 'text-green-500' : 'text-red-500'}`}>
                            {messageStatus}
                        </p>
                        <button
                            className="block mx-auto mt-4 bg-blue-500 text-white px-4 py-2 rounded"
                            onClick={closeModal}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default MessageForm;
