import { useEffect, useState } from "react"
import Card_view from "../admin_component/CardView"
import Sidebar from "../admin_component/Sidebar"
import './User.css';
import axios from "axios";
import { useParams } from "react-router-dom";


const Admin = () => {
    const [token, setToken] = useState(null);
    const [user, setUser] = useState([]);
    const [error, setError] = useState(null);
    const getUser = async () => {
        try {
            const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user`, {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    "content-type": "multipart/form-data",
                    Authorization: `Bearer ${token}` 
                }
            });
            setUser(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.log(error.response);
            setError(error.response.message);
        }    
    };
    const changeUserRole = async (id) => {
        const payload = {
            role: "admin"
        };
              try {
            const response = await axios.post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-user-role/${id}`, payload, {
                headers: {
                    apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                    "content-type": "application/json",
                    Authorization: `Bearer ${token}` 
                }
            });
            window.location.reload();
            console.log(response.message);        
        } catch (error) {
            console.log(error.response);
            setError(error.response.message);
        }    
    };
    useEffect(() => {
        const storeToken = localStorage.getItem("token");
        setToken(storeToken)
        setTimeout(() => {
            getUser();            
        }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    console.log(token);
    return (
        <>
            <Sidebar/>
            {error && <h2>{error}</h2>}
            <div className="card-container2"> 
            {user.map((User) => (
                // eslint-disable-next-line react/jsx-key
              <Card_view nama={User.name} email={User.email} role={User.role} Image={User.profilePictureUrl} role_func={() => changeUserRole(User.id)} />
            ))}
            </div>
        </>
    )
}

export default Admin