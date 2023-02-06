const canvasElement = document.getElementById("spending-chart");

let data = [15.0, 30.0, 52.36, 31.07, 20.0, 40.0, 27.0].map((num) =>
  num.toFixed(2)
);

const titleTooltip = (tootipItem) => {
  return "";
};

const labelTooltop = (tooltipItem) => {
  console.log(tooltipItem);
  return `$${data[tooltipItem.dataIndex]}`;
};

const mouseHover = (event, chartElement) => {
  event.native.target.style.cursor =
    chartElement.length === 1 ? "pointer" : "default";
};

const redBackground = "hsl(10, 79%, 65%)";
const blueBackground = "hsl(186, 34%, 60%)";
const redBackgroundHover = "hsl(10, 55%, 81%)";
const blueBackgroundHover = "hsl(187, 38%, 76%)";

const config = {
  type: "bar",
  data: {
    labels: ["mon", "tue", "wed", "thu", "fri", "sat", "sun"],
    datasets: [
      {
        label: "Amount",
        data: data,
        backgroundColor: [
          redBackground,
          redBackground,
          blueBackground,
          redBackground,
          redBackground,
          redBackground,
          redBackground,
        ],
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        hoverBackgroundColor: [
          redBackgroundHover,
          redBackgroundHover,
          blueBackgroundHover,
          redBackgroundHover,
          redBackgroundHover,
          redBackgroundHover,
          redBackgroundHover,
        ],
      },
    ],
  },
  options: {
    responsive: true,
    onHover: mouseHover,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        caretSize: 0,
        displayColors: false,
        titleMarginBottom: 0,
        padding: 10,
        callbacks: {
          title: titleTooltip,
          label: labelTooltop,
        },
        backgroundColor: "hsl(25, 47%, 15%)",
        xAlign: "center",
        yAlign: "bottom",
      },
    },
    scales: {
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "hsl(28, 10%, 53%)",
        },
      },
      y: {
        display: false,
        beginAtZero: true,
        grace: "30%",
      },
    },
  },
};

const cookieChart = new Chart(canvasElement, config);
