import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import images from "../assets/images/images.jpg";
import { MDBBtn } from 'mdb-react-ui-kit';

function Home() {

    const { id } = useParams();

    const [details, setDetails] = useState([]);

    useEffect(() => {
        getDetailsDoa();
        //eslint-disable-next-line
    }, []);

    const getDetailsDoa = async () => {
        const response = await axios.get(`https://doa-doa-api-ahmadramadhan.fly.dev/api/${id}`);
        setDetails(response.data);
    };

    return (
        <div className="container-details">
            <div><MDBBtn><Link style={{ color: '#FFF'}} to="/">Kembali Ke Home </Link></MDBBtn></div>

            <div className="details-box">
            {
                details.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="list-doa">{item.doa}</div>
                            <div className="list-images">
                            <img width="200rem" src={images} alt={"images"}/>
                            </div>
                            <div className="list-ayat">{item.ayat}</div>
                            <div className="list-latin">{item.latin}</div>
                            <div className="list-artinya"><span>Artinya : </span>{item.artinya}</div>
                        </div>
                    )
                })
            }
            </div>
            
        </div>
    )
}

export default Home;
