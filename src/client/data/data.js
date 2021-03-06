export const data = {
  datasets: [
    {
      label: "Past prospective",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(179,181,198,1)",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      label: "Current prospective",
      backgroundColor: "rgba(47,79,79,0.2)",
      borderColor: "rgba(47,79,79,1)",
      pointBackgroundColor: "rgba(47,79,79,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(47,79,79,1)",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      label: "Future prospective",
      backgroundColor: "rgba(218,165,32,0.2)",
      borderColor: "rgba(218,165,32,1)",
      pointBackgroundColor: "rgba(218,165,32,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(218,165,32,1)",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
  ]
};

export const chartOptions = {
  // maintainAspectRatio: true,
  // responsive: true,
  // aspectRation: 2,
  scale: {
    ticks: {
      beginAtZero: true,
      min: 0,
      max: 100,
      stepSize: 10
    }
  }
};
