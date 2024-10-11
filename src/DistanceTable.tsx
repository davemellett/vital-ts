import { FC } from "react";

import { club } from "./clubs";
import "./DistanceTable.css";
import { useSelector } from "react-redux";
import { RootState } from "./store";

type DistanceTableProps = {
  setClub: (club: club) => null;
};

export const DistanceTable: FC<DistanceTableProps> = ({
  setClub,
}): JSX.Element => {
  const allTeams: club[] = useSelector((state: RootState) => state.teams);

  const sortTeams = (a: club, b: club) => {
    const result: number = (a.distances ?? 0) - (b.distances ?? 0);
    return result;
  };

  return (
    <div className="distance-table">
      <h2>Total Distance Travelled</h2>
      <p>
        In one season (2024-25)
        <br />
        (Miles, as the crow flies)
      </p>
      <table>
        <tbody>
          {allTeams.length &&
            allTeams.sort(sortTeams).map((club) => {
              const d = club.distances ?? 0;
              return (
                <tr key={club.name}>
                  <td className="club-link" onClick={() => setClub(club)}>
                    {club.name}
                  </td>
                  <td>{Math.round(d * 100) / 100}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
