// Map component
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import "./Map.css";
import { club } from "./clubs";
import ClubMarker from "./ClubMarker";
import CrowLines from "./CrowLines";
import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store";

type MapProps = {
  drawLines: boolean;
  clubLines: club | undefined;
};

const Map: FC<MapProps> = ({ drawLines, clubLines }): JSX.Element => {
  const allTeams: club[] = useSelector((state: RootState) => state.teams);

  return (
    <MapContainer center={[53, -1.884722]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {allTeams.map((m: club) => (
        <ClubMarker key={m.name} club={m} />
      ))}
      {drawLines
        ? allTeams.map((a: club) => <CrowLines key={a.name} club={a} />)
        : clubLines && <CrowLines club={clubLines} />}
    </MapContainer>
  );
};

export default Map;
