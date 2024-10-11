import { Marker, Popup } from "react-leaflet";
import { club } from "./clubs";
import { FC } from "react";
import "./ClubMarker.css";

type ClubMarkerProps = {
  club: club;
};

const ClubMarker: FC<ClubMarkerProps> = ({ club }): JSX.Element => {
  const { name, coords, ground } = club;
  return (
    <Marker position={[coords.north, coords.east]}>
      <Popup>
        <strong>{name}t</strong> <br /> {coords.north}, {coords.east}
        <br />
        {ground}
      </Popup>
    </Marker>
  );
};

export default ClubMarker;
