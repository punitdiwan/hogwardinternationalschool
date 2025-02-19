import React from 'react'
import useSWR from 'swr';
import axios from 'axios';
import "./css/Gallery.css"

const fetcher = async (url) => {
    const response = await axios.get(url);
    return response.data;
};
const Gallery = () => {
    const API_ENDPOINT = 'https://cms.maitretech.com/hogwartsinternationalhighschool/items/gallery?fields=*.*.*';
    const { data, error } = useSWR(API_ENDPOINT, fetcher);

    if (error) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Error loading data</div>;
    }

    if (!data) {
        return <div style={{ textAlign: 'center', marginTop: '20px' }}>Loading...</div>;
    }

    const images = data.data;
    console.log("images", images);


    return (
        <>

            <div className="container-fluid">
                <h2 className="text-center text-uppercase py-5">Gallery</h2>

                <div className="container-fluid">
                    {/*  <div className="first">

                        <div className="one">
                            <img src="./images1/abc.jpeg" alt="" />
                        </div>
                        <div className="one">
                            <img src="./images1/a6.JPG" alt="" />
                        </div>
                        <div className="one">
                            <img src="./images1/DSC_2198.JPG" alt="" />
                        </div><div className="one">
                            <img src="./images1/swim.jpeg" alt="" />
                        </div>

                        <div className="one">
                            <img src="./images1/DSC_2160.JPG" alt="" />
                        </div>
                        <div className="one">
                            <img src="./images1/g2.webp" alt="" />
                        </div><div className="one">
                            <img src="./images1/nn1.jpeg" alt="" />
                        </div><div className="one">
                            <img src="./images1/good.jpeg" alt="" />
                        </div>
                        <div className="one">
                            <img src="./images1/c2.webp" alt="" />
                        </div>
                        <div className="one">
                            <img src="./images1/nn.jpeg" alt="" />
                        </div><div className="one">
                            <img src="./images1/g7.webp" alt="" />
                        </div><div className="one">
                            <img src="./images1/army.webp" alt="" />
                        </div>
                    </div>  */}

                    <div className="first">
                        {images.map((item, i) => (
                            <div key={item.id || i} className="one">
                                <img
                                    src={item?.images?.data?.full_url?.replace('http://', 'https://')}
                                    className="mt-3 imght"
                                    alt={`item ${i}`}
                                />
                            </div>
                        ))}
                    </div>

                </div>




            </div>
        </>
    )
}

export default Gallery