import { Link } from 'react-router-dom';

export default function Button({ children, type, to }) {
    return (
        <Link
            to={to}
            className="m-2 border p-3 w-28 text-slate-200 rounded-lg bg-primary hover:bg-hover transition-colors flex justify-center items-center"
            type={type || ''}
        >
            {children}
        </Link>
    );
}
