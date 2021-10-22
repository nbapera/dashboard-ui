import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import ReactApexChart from 'react-apexcharts'
import Card from '../components/card/Card'
import { FaShoppingCart, FaDollarSign, FaUser, FaEye } from 'react-icons/fa'
import './Dashboard.css'

const LineChart = {
    series: [{
        name: 'Orders',
        data: [40, 70, 20, 80, 36, 80, 30, 70, 60]
    }, {
        name: 'Deliveries',
        data: [60, 40, 70, 40, 80, 16, 60, 20, 51]
    }],
    options: {
        chart: {
            background: '#121212'
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        },
        theme: {
            mode: 'dark'
        }
    }
}

const PieChart = {
    series: [65, 22, 13],
    options: {
        colors: ['#6ab04c', '#2980b9', '#ffa600'],
        chart: {
            width: 380,
            type: 'pie',
        },
        labels: ['Windows', 'MacOS', 'Linux'],
        responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    }
};

var ColumnChart = {
    series: [{
        name: 'Windows',
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
    }, {
        name: 'MacOS',
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
    }, {
        name: 'Linux',
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
    }],
    options: {
        chart: {
            type: 'bar',
            height: 350,
            background: '#121212'
        },
        colors: ['#6ab04c', '#2980b9', '#ffa600'],
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent']
        },
        xaxis: {
            categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        },
        yaxis: {
            title: {
                text: 'Thousands'
            }
        },
        grid: {
            show: false
        },
        fill: {
            opacity: 1
        },
        theme: { mode: 'dark' },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + "K"
                }
            }
        }
    },
};

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <Header />
            <div className="content">
                <div className="cards">
                    <div className="cards-line">
                        <Card icon={<FaDollarSign />} number="1.2M$" title="Balance" />
                        <Card icon={<FaShoppingCart />} number="240K" title="Orders" />
                    </div>
                    <div className="cards-line">
                        <Card icon={<FaUser />} number="267K" title="Users" />
                        <Card icon={<FaEye />} number="3.7M" title="Monthy Visits" />
                    </div>
                </div>
                <div className="chart">
                    <ReactApexChart series={LineChart.series} options={LineChart.options} type="line" height={'350px'} />
                </div>
            </div>
            <div className="users">
                <div className="user-list">
                    <ReactApexChart series={ColumnChart.series} options={ColumnChart.options} type="bar" height={'100%'} />
                </div>
                <div className="orders">
                    <ReactApexChart series={PieChart.series} options={PieChart.options} type="pie" height={'350px'} />
                </div>
            </div>
        </div>
    )
}

export default Dashboard
