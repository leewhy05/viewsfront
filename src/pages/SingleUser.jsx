import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import UpdateModal from '../component/UpdateModals'
const SingleUser = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const {userId} = useParams();
  const navigate = useNavigate();

  let getData = async () => {
    try {
      setIsLoading(true);

      let dataGotten = await axios.get(
        `https://create-user.onrender.com/api/user/${userId}`
      );
      console.log(dataGotten.data.user);
      setData(dataGotten.data.user);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:8080/api/user/${userId}`);
      navigate("/AllUser");
    } catch (error) {}
  };

  useEffect(() => {
    getData();
    document.title = `User | ${data.name}`;
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
      <h2 className="container">
        {isLoading && <Spinner animation="border" />}
      </h2>

      <main className="container pt-5 mt-5 d-flex justify-content-center align-items-center">
        <div className=" w-100 text-center">
          <h2>NAME:  {data.name} </h2>
          <h2>EMAIL:  {data.email} </h2>
          <h2>PROFESSIONAL:  {data.profession} </h2>
          <h2>GENDER:  {data.gender} </h2>
          <div className="d-flex gap-5 justify-content-center ">
            <UpdateModal/>
            
            <button
              className="btn btn-danger "
              onClick={() => handleDelete(data._id)}
            >
              DeleteUser
            </button>
          </div>
        </div>
      </main>
    </>
  );
};

export default SingleUser;