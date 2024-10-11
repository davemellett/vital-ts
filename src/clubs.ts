type coords = {
  north: number;
  east: number;
};

export type club = {
  id?: number;
  name: string;
  coords: coords;
  ground?: string;
  distances?: number;
};

export const clubData: club[] = [
  {
    id: 1,
    name: "Liverpool",
    ground: "Anfield",
    coords: {
      north: 53.430833,
      east: -2.960833,
    },
  },
  {
    id: 2,
    name: "Everton",
    ground: "Goodison Park",
    coords: {
      north: 53.438889,
      east: -2.966389,
    },
  },
  {
    id: 3,
    name: "Manchester City",
    ground: "Etihad Stadium",
    coords: {
      north: 53.438056,
      east: -2.200278,
    },
  },
  {
    id: 4,
    name: "Manchester Utd",
    ground: "Old Trafford",
    coords: {
      north: 53.463056,
      east: -2.291389,
    },
  },
  {
    name: "Newcastle Utd",
    ground: "St, James' Park",
    coords: {
      north: 54.975556,
      east: -1.621667,
    },
  },
  {
    name: "Aston Villa",
    ground: "Villa Park",
    coords: {
      north: 52.509167,
      east: -1.884722,
    },
  },
  {
    name: "Leicester City",
    ground: "King Power Stadium",
    coords: {
      north: 52.626611,
      east: -1.140556,
    },
  },
  {
    name: "Wolverhampton Wanderers",
    ground: "Molineux Stadium",
    coords: {
      north: 52.590278,
      east: -2.130278,
    },
  },
  {
    name: "Tottenham Hotspur",
    ground: "Tottenham Hotspur Stadium",
    coords: {
      north: 51.604722,
      east: -0.066389,
    },
  },
  {
    name: "Chelsea",
    ground: "Stamford Bridge",
    coords: {
      north: 51.481667,
      east: -0.191111,
    },
  },
  {
    name: "Crystal Palace",
    ground: "Selhurst Park",
    coords: {
      north: 51.398333,
      east: -0.085556,
    },
  },
  {
    name: "Southampton",
    ground: "St. Mary's Stadium",
    coords: {
      north: 50.905833,
      east: -1.391111,
    },
  },
  {
    name: "Ipswich Town",
    ground: "Portman Road",
    coords: {
      north: 52.055,
      east: 1.144722,
    },
  },
  {
    name: "West Ham United",
    ground: "London Stadium",
    coords: {
      north: 51.538611,
      east: -0.016389,
    },
  },
  {
    name: "Arsenal",
    ground: "Emirates Stadium",
    coords: {
      north: 51.555,
      east: -0.108611,
    },
  },
  {
    name: "Bournemouth",
    ground: "Vitality Stadium",
    coords: {
      north: 50.735278,
      east: -1.838333,
    },
  },
  {
    name: "Brentford",
    ground: "Gtech Community Stadium",
    coords: {
      north: 51.490825,
      east: -0.2887,
    },
  },
  {
    name: "Brighton & Hove Albion",
    ground: "American Express Stadium",
    coords: {
      north: 50.861822,
      east: -0.083278,
    },
  },
  {
    name: "Fulham",
    ground: "Craven Cottage",
    coords: {
      north: 51.475,
      east: -0.221677,
    },
  },
  {
    name: "Nottingham Forest",
    ground: "City Ground",
    coords: {
      north: 52.94,
      east: -1.132778,
    },
  },
];
