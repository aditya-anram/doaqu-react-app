import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import images from "../assets/images/images.jpg";
import { MDBBtn } from 'mdb-react-ui-kit';
import HomeCards from '../../components/Cards/HomeCards';

function Search() {

    const { kata } = useParams();

    const [doa, setDoa] = useState([]);
    const [nodata, setnodata] = useState("");

    useEffect(() => {
        getSearchDoa();
        //eslint-disable-next-line
    }, []);

    const getSearchDoa = async () => {
        try {
            const response = await axios.get(`https://doa-doa-api-ahmadramadhan.fly.dev/api/doa/${kata}`);
            setDoa(response.data);
        } catch (error) {
            console.log("Pencarian Tidak Ditemukan.");
            setnodata("Data tidak ditemukan.");
        }
        
    };

    return (
        <div>
             <div className="container-details">
             <div><MDBBtn><Link style={{ color: '#FFF'}} to="/">Kembali Ke Home </Link></MDBBtn></div>
                <div className="details-box">
                {
                (doa.id!=null) ? (
                    <div>
                    <div className="hasil-pencarian">Hasil Pencarian : </div>
                        <div>
                            <HomeCards images={images} title={doa.doa}
                                button={`/details/${doa.id}`}
                                />
                        </div>
                    </div>
                ) : (<div className="no-data">{nodata}</div>)
                }
                </div>
             </div>
        </div>
    )
}

export default Search;
