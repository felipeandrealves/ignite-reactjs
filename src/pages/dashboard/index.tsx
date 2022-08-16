import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ApexOptions } from "apexcharts";

import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";
import { theme } from "../../styles/theme";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options: ApexOptions = {
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

const series = [{ name: "series1", data: [31, 120, 10, 26, 61, 18, 109] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6 ">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={320}
          alignItems="flex-start"
        >
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>

            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p="8" bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              Inscritos da semana
            </Text>
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
