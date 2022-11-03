import React, { useState, useEffect } from 'react';
import NabVar from './NavBar';
import '../App.css';

const apiKey = process.env.REACT_APP_NASA_KEY;
const NasaPhoto = () => {
    const [fotoData, setFotoData] = useState(null);

    useEffect(() => {
        fetchFoto();
        async function fetchFoto() {
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();
            setFotoData(data)
        }
    }, [])

    if (!fotoData) return <div />

    return (
        <>
            <NabVar />
            <div className='row mx-0 text-center row justify-content-center col-md-12 container-photo '>
                <div className='col-xs-12-container col-sm-6 col-md-6-w-50  col-lg-6-w-75  col-lg-6 container d-flex align-items-center '>
                    {fotoData.media_type === 'image' ? (
                        <img src={fotoData.url} alt={fotoData.title} className='col-md-6-w-100 col-sm-12  col-lg-6-w-75 container-fluid' />) : (
                        <iframe
                            title='space-video'
                            src={fotoData.url}
                            frameBorder='0'
                            gesture='media'
                            allow='encrypted-media'
                            allowFullScreen
                            className='img-video'
                        />
                    )}
                </div>
                <div className=' conta-datos col-xs-12-  col-sm-6  col-md-6  col-lg-6-container container col-xs-px-5'>
                    <h1 className=' h3  col-sm-h4 text-white py-3 text-date'>{fotoData.title}</h1>
                    <p className='text-white text-justify text-date'>{fotoData.date}</p>
                    <p className='text-white text-justify explanation'>{fotoData.explanation}</p>
                </div>
            </div>
        </>
    );
}

export default NasaPhoto;