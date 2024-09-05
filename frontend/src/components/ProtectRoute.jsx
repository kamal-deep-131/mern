import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectRoute = ({ children }) => {
    const user = localStorage.getItem("user");
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

    return children;
};

export default ProtectRoute;
