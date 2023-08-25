import React from "react";
import { useState } from "react";
import { Map, Marker } from "pigeon-maps";
import "../../../styles/wool/heromap.scss";
// import { Button } from "../pages/Button";

import { Link } from "react-router-dom";
import "../../styles/pages/home.scss";

function HeroMap() {
  const [hue, setHue] = useState(0);
  const color = `hsl(${hue % 360}deg 39% 70%)`;
  return (
    <div className="maphero-container" style={{ paddingTop: "4rem" }}>
      {/* <video src='/videos/video-1.mp4' autoPlay loop muted /> */}
      <h1>Tracking our finest fleeces!</h1>
      <div className="map">
        <Map
          // Alaska Map
          className="actualmap"
          // height={300}
          defaultCenter={[64.160507, -149.0]}
          zoom={4}
          width={704}
          height={600}
        >
          <Marker
            // Anchorage, AK
            width={50}
            anchor={[61.217381, -149.863129]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Anchorage, AK
            width={50}
            anchor={[64.217381, -149.863129]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Anchorage, AK
            width={50}
            anchor={[63.217381, -149.863129]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Anchorage, AK
            width={50}
            anchor={[62.217381, -149.863129]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Tok, AK
            width={50}
            anchor={[63.33593, -142.987701]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Wasilla, AK
            width={50}
            anchor={[61.58139, -149.439438]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Wasilla, AK
            width={50}
            anchor={[62.58139, -149.439438]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Wasilla, AK
            width={50}
            anchor={[63.58139, -149.439438]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
        </Map>
        <Map
          // USA Map
          className="actualmap"
          // height={300}
          defaultCenter={[38.5, -98.0]}
          zoom={4.0}
          width={704}
          height={600}
        >
          {/* <Marker
            // Pinedale, WY
            width={50}
            anchor={[42.867483, -109.853346]}
            color={color}
            onClick={() => setHue(hue + 20)}
          /> */}
          <Marker
            // Concho AZ
            width={50}
            anchor={[34.4753, -109.6059]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Pinole CA
            width={50}
            anchor={[39.0044, -122.2989]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Pinole CA
            width={50}
            anchor={[38.0044, -122.2989]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Pinole CA
            width={50}
            anchor={[37.0044, -122.2989]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Valencia CA
            width={50}
            anchor={[34.4198, -118.5627]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Valencia CA
            width={50}
            anchor={[35.4198, -118.5627]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />

          <Marker
            // Boulder CO
            width={50}
            anchor={[40.015, -105.2705]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Denver CO
            width={50}
            anchor={[39.7392, -104.9903]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Denver CO
            width={50}
            anchor={[40.7392, -104.9903]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Denver CO
            width={50}
            anchor={[38.7392, -104.9903]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Denver CO
            width={50}
            anchor={[37.7392, -104.9903]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Longmont CO
            width={50}
            anchor={[40.1672, -105.1019]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // South Windsor CT
            width={50}
            anchor={[41.849, -72.5718]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Guilford CT
            width={50}
            anchor={[41.2889, -72.6744]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Guilford CT
            width={50}
            anchor={[42.2889, -72.6744]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Waterford CT
            width={50}
            anchor={[41.3542, -72.1648]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Dover FL
            width={50}
            anchor={[27.9942, -82.2195]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // St Pete FL
            width={50}
            anchor={[27.7676, -82.6403]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Venus FL
            width={50}
            anchor={[27.067, -81.3571]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //Algona IA
            width={50}
            anchor={[43.07, -94.233]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Cedar Rapids, IA
            width={50}
            anchor={[41.9779, -91.6656]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Hampton IA
            width={50}
            anchor={[42.7425, -93.2103]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Marshalltown IA
            width={50}
            anchor={[42.0495, -92.908]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Boise ID
            width={50}
            anchor={[43.615, -116.2023]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Fort Wayne IN
            width={50}
            anchor={[41.0793, -85.1394]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Louisville KY
            width={50}
            anchor={[38.2527, -85.7585]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Cape Cod MA
            width={50}
            anchor={[41.6688, -70.2962]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Ithaca MI
            width={50}
            anchor={[43.2917, -84.6075]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Eveleth MN
            width={50}
            anchor={[47.4624, -92.5399]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Moody, MO
            width={50}
            anchor={[36.5295, -91.9893]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Osage Beach MO
            width={50}
            anchor={[38.1503, -92.618]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Mocksville NC
            width={50}
            anchor={[35.894, -80.5614]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Mocksville NC
            width={50}
            anchor={[36.894, -80.5614]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Salem NC
            width={50}
            anchor={[35.6987, -81.697]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Salem NC
            width={50}
            anchor={[36.6987, -81.697]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Dexter NM
            width={50}
            anchor={[33.1973, -104.373]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Arlington OH
            width={50}
            anchor={[40.8937, -83.6502]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //Hillsboro Oh
            width={50}
            anchor={[39.2023, -83.6116]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Corning OH
            width={50}
            anchor={[39.6026, -82.0882]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Corning OH
            width={50}
            anchor={[40.6026, -82.0882]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Corning OH
            width={50}
            anchor={[38.6026, -82.0882]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Smithville OH
            width={50}
            anchor={[40.8623, -81.8618]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Hermiston, OR
            width={50}
            anchor={[45.8404, -119.2895]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Portland OR
            width={50}
            anchor={[45.5152, -122.6784]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //Julian PA
            width={50}
            anchor={[40.8642, -77.9394]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Lansdale PA
            width={50}
            anchor={[40.2415, -75.2838]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Lansdale PA
            width={50}
            anchor={[41.2415, -75.2838]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Lansdale PA
            width={50}
            anchor={[42.2415, -75.2838]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Lansdale PA
            width={50}
            anchor={[44.2415, -75.2838]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //Linden PA
            width={50}
            anchor={[41.2309, -77.1394]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Irene SD
            width={50}
            anchor={[43.0835, -97.157]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Big Sandy TX
            width={50}
            anchor={[32.5838, -95.1088]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //Boyd TX
            width={50}
            anchor={[33.0787, -97.5653]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //Boyd TX
            width={50}
            anchor={[34.0787, -97.5653]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Floresvillet TX
            width={50}
            anchor={[29.1336, -98.1561]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Floresville TX
            width={50}
            anchor={[30.1336, -98.1561]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Lytle TX
            width={50}
            anchor={[29.2333, -98.7964]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Spanish Fork UT
            width={50}
            anchor={[40.115, -111.6549]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Spanish Fork UT
            width={50}
            anchor={[41.115, -111.6549]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Spanish Fork UT
            width={50}
            anchor={[42.115, -111.6549]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Spanish Fork UT
            width={50}
            anchor={[43.115, -111.6549]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Salt Lake City UT
            width={50}
            anchor={[40.7608, -111.891]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Salt Lake City UT
            width={50}
            anchor={[41.7608, -111.891]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Salt Lake City UT
            width={50}
            anchor={[42.7608, -111.891]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            //North Hartland VT
            width={50}
            anchor={[43.5924, -72.3524]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Troy VA
            width={50}
            anchor={[37.9508, -78.2465]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Vancouver, WA
            width={50}
            anchor={[45.628, -122.6739]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Florence WI
            width={50}
            anchor={[45.9224, -88.252]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Waunakee WI
            width={50}
            anchor={[43.1919, -89.4557]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Cheyenne, WY
            width={50}
            anchor={[41.14, -104.8202]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Cheyenne, WY
            width={50}
            anchor={[42.14, -104.9992]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Cheyenne, WY
            width={50}
            anchor={[43.14, -104.9992]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
          <Marker
            // Jackson WY
            width={50}
            anchor={[43.4799, -110.7624]}
            color={color}
            onClick={() => setHue(hue + 20)}
          />
        </Map>
      </div>
    </div>
  );
}

export default HeroMap;
