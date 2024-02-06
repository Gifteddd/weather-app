import React from "react";
import { YMaps, Map } from "@pbe/react-yandex-maps";
import "../styles/Geolocation.css";

function Geolocation (props) {
    return (
        <div>
            <YMaps>
                <div className={"map"}>
                    Данная геолокация {props.data.name}
                    <div className={"map-container"}>
                        <Map state={{ center: [props.data.lat, props.data.lon], zoom: 8}} />
                    </div>
                </div>
            </YMaps>
        </div>
    )
}

export default Geolocation;