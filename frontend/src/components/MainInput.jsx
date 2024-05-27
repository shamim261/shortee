import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Form from './Form';

export default function MainInput() {
    const [url, setUrl] = useState('');
    const [error, setError] = useState();
    const [submitting, setSubmitting] = useState(false);
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const navigate = useNavigate();

    async function submitHandler(e) {
        console.log(userInfo);
        e.preventDefault();
        setSubmitting(true);
        let updatedUrl = url;

        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            updatedUrl = `http://${url}`;
        }

        if (!userInfo) {
            localStorage.setItem('tempURL', updatedUrl);
            navigate('/auth');
        }
        try {
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/urls`,
                {
                    url: updatedUrl,
                },
                {
                    headers: {
                        authorization: `Bearer ${userInfo.token}`,
                    },
                }
            );
            if (data.success) {
                toast.success('URL Created Successfully! Redirecting to Dashboard...', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else if (data.errors) {
                setError();

                Object.keys(data.errors).map((fname) => setError(fname));
            }
        } catch (err) {
            setError(err);
        }
    }
    return (
        <>
            <div className="">
                <ToastContainer />
                <Form onSubmit={submitHandler}>
                    <input
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                        type="text"
                        className="p-4 w-20 text-lg md:p-6 m-4 rounded-l-xl md:placeholder:text-lg focus:outline-none"
                        placeholder="Enter your URL"
                    />
                    <button
                        disabled={submitting}
                        className="p-4 md:py-6 bg-primary hover:bg-hover transition-colors uppercase font-bold text-slate-100 -ml-4 rounded-r-xl md:text-lg disabled:bg-[#b2aed9]"
                    >
                        Shorten URL
                    </button>
                </Form>
                <span className="text-red-600 ">{error ? `Invalid URL` : ''}</span>
            </div>
        </>
    );
}
