import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from 'next/dynamic'
import { Header } from "../components/Header";
import { SideBar } from "../components/SideBar/SideBar";

const Chart = dynamic(() => import('react-apexcharts'), {
    ssr: false
})

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        foreColor: theme.colors.gray[500]

    },
    grid: {
        show: false
    },
    dataLabel: {
        enabled: false
    },
    tooltip: {
        enabled: false
    },
    xaxis: {
        type: 'datetime',
        axisBorder: {
            color: theme.colors.gray[600]
        },
        axisTicks: {
            color: theme.colors.gray[600]
        },
        categories: [
            '2021-08-03T00:00:00.000Z',
            '2021-08-04T00:00:00.000Z',
            '2021-08-09T00:00:00.000Z',
            '2021-08-19T00:00:00.000Z'

        ]
    },
    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3


        }
    }
}

const series = [
    {
        name: 'series1',
        data: [31, 30, 20, 10]
    }
]


export default function Dashboard() {
    return (
        <>
            <Flex direction="column" h="100vh">
                <Header />

                <Flex 
                w="100%" 
                my="6" 
                maxWidth={1480}
                mx="auto"
                px="6"
                >

                    <SideBar />

                    <SimpleGrid flex="1" gap="4" minChildWidth="360px" alignItems="flex-start">
                        <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        pb="4"
                        >
                            <Text fontSize="lg" mb="4" >Subscribers of the week</Text>
                            <Chart
                            options={options}
                            series={series}
                            type="area" 
                            height={160} />
                        </Box>
                        <Box
                        p={["6","8"]}
                        bg="gray.800"
                        borderRadius={8}
                        >
                            <Text fontSize="lg" mb="4" >Open rate</Text>
                            <Chart
                            options={options}
                            series={series}
                            type="area" 
                            height={160} />
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
            
        </>
        
    )
}