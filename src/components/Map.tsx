import React, {useEffect} from 'react';
import {MapContainer, TileLayer, Polyline, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/Map.scss';
import {Icon} from "leaflet";
import markerIcon from '../marker.png'
import {thirdRoute} from "../store/rotes";

export const Map: React.FC = () => {


    const customIcon = new Icon({
        iconUrl: markerIcon,
        iconSize: [38, 38]
    })

    return (
        <MapContainer center={[59.84660399, 30.29496392]} zoom={13}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {thirdRoute.map(route => {
                return <Marker position={route.geocode} icon={customIcon}>
                    <Popup>
                        <h2>Маршрут 1</h2>
                        <h3>
                            {route.popUp}
                        </h3>
                    </Popup>
                </Marker>
            })}
        </MapContainer>
    );
}
