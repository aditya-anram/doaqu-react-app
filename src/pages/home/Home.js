import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import images from "../assets/images/images.jpg";
import HomeCards from "../../components/Cards/HomeCards";
import { MDBInput } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

function Home() {

    const [doa, setDoa] = useState([]);
    const [kata, setKata] = useState("");
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        getAllDoa();
    }, []);

    const getAllDoa = async () => {
        const response = await axios.get(`https://doa-doa-api-ahmadramadhan.fly.dev/api/`);
        setDoa(response.data);
        setIsActive(true);
    };

    const handleCari = (event) => {
        event.preventDefault();
        setKata(event.target.value);
    };


    return (
        <>
        <div style={{marginBottom: '3rem'}}>
            
            <div className="pencarian">
                
                <MDBInput value={kata} onChange={(event) => handleCari(event)} style={{backgroundColor: 'white'}} size="lg" label='Cari' type='text' />

            {
                (kata!=="")?(<MDBBtn className="mx-3"><Link style={{ color: '#FFF' }} to={`search/${kata}`}>Cari</Link></MDBBtn>) : (<MDBBtn style={{pointerEvents: 'none', opacity: 0.7 }} className="mx-3"><Link style={{ color: '#FFF' }} to={`search/${kata}`}>Cari</Link></MDBBtn>)
            }

            </div>
            
            

            {/* {
                doa.map((item, index) => {
                    return(
                        <ul key={index}>
                            <img width="100px" src={images} alt={"images"}/>
                            <li>{item.doa}</li>
                            <Link to={`/details/${item.id}`}>Details</Link>
                        </ul>
                    )
                })
            } */}
            <div style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'center'}}>
                {
                doa.map((item, index) => {
                        return(
                            <ul style={{padding: 0, margin: 5 }} key={index}>
                                <HomeCards images={images} title={item.doa}
                                button={`/details/${item.id}`}
                                />
                            </ul>
                        )
                    })
                }
            </div>  
        </div>

        {
            (isActive) ? (<div className="footer">DoaQu</div>) : (false)
        }

        </>
      
    )
}

export default Home;
