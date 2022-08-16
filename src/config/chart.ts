import { ApexOptions } from "apexcharts";

import { theme } from "../styles/theme";

export const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-08-01T00:00:00.000Z",
      "2022-08-02T00:00:00.000Z",
      "2022-08-03T00:00:00.000Z",
      "2022-08-04T00:00:00.000Z",
      "2022-08-05T00:00:00.000Z",
      "2022-08-06T00:00:00.000Z",
      "2022-08-07T00:00:00.000Z",
    ],
  },

  fill: {
    opacity: 0.5,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

export const series = [
  { name: "series1", data: [31, 120, 10, 26, 61, 18, 109] },
];
