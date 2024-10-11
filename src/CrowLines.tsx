import { LatLngExpression } from "leaflet";
import { club, clubData } from "./clubs";
import { FC } from "react";
import { Polyline } from "react-leaflet";

type CrowLinesProps = {
  club: club;
};

const CrowLines: FC<CrowLinesProps> = ({ club: club }): JSX.Element => {
  const from: LatLngExpression = [club.coords.north, club.coords.east];
  const positions: LatLngExpression[][] = [];
  clubData.map((toClub: club) => {
    //Draw line
    const to: LatLngExpression = [toClub.coords.north, toClub.coords.east];
    positions.push([from, to]);
  });
  return (
    <Polyline
      key={club.name}
      positions={positions}
      pathOptions={{ weight: 1 }}
    />
  );
};

export default CrowLines;
