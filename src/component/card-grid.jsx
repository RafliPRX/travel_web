import Card from "./card";
import PropTypes from "prop-types";
import "./card-grid.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const CardGrid = ({ className = "" }) => {
  const param = useParams();
  const [activity, setActivity] = useState([]);
  const getActivity = async () => {
    try {
        const response = await axios.get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities-by-category/${param.id}`, {
            headers: {
                apiKey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
                "content-type": "multipart/form-data"
            }
        });
        setActivity(response.data.data);
    } catch (error) {
        console.log(error.response);
    }
  };
  useEffect(() => {
    getActivity();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
  <div>
    <div className={`card-grid ${className}`}>
      {activity.map((activ) => (
        // eslint-disable-next-line react/jsx-key
        <Link to={`/activity-detail/${activ.id}`} >
          <Card title={activ.title} image={activ.imageUrls} date={activ.price} />
        </Link>
      ))}  
    </div>
  </div>
  );
};

CardGrid.propTypes = {
  className: PropTypes.string,
};

export default CardGrid;