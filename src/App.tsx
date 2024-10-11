import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./App.css";
import Map from "./Map";
import { DistanceTable } from "./DistanceTable";
import { club, clubData } from "./clubs";
import { addClub, resetClubs, setClubDistances } from "./teams/teamsSlice";
import { RootState } from "./store";
import { distance, point } from "@turf/turf";

const App: FC = () => {
  const [linesOn, setLinesOn] = useState(false);
  const [club, setClub] = useState<club>();

  const dispatch = useDispatch();
  const allTeams: club[] = useSelector((state: RootState) => state.teams);

  const toggleLines = () => {
    setLinesOn(!linesOn);
  };
  const setAClub = (newClub: club): null => {
    if (club?.name === newClub.name) {
      setClub(undefined);
    } else {
      setClub(newClub);
    }
    return null;
  };

  const calculateDistances = (clubs: club[]) => {
    clubs.forEach((a) => {
      const from = point([a.coords.north, a.coords.east]);
      let totalDistance = 0;
      clubs.forEach((b) => {
        if (a.name !== b.name) {
          //calc distance
          const to = point([b.coords.north, b.coords.east]);
          const miles = distance(from, to, { units: "miles" });
          totalDistance += miles;
        }
      });
      //a.distances = totalDistance;
      dispatch(setClubDistances({ club: a, distance: totalDistance }));
    });
    //return allTeams.sort((a, b) => (a.distances ?? 0) - (b.distances ?? 0));
  };

  useEffect(() => {
    dispatch(resetClubs());
    clubData.forEach((club) => {
      dispatch(addClub(club));
    });
    calculateDistances(allTeams);
  });

  return (
    <>
      {/* <h1>Premier League clubs</h1> */}
      <div className="content">
        <Map drawLines={linesOn} clubLines={club}></Map>
        <div>
          <DistanceTable setClub={setAClub} />
          <button onClick={toggleLines}>Lines</button>
        </div>
      </div>
    </>
  );
};

export default App;
