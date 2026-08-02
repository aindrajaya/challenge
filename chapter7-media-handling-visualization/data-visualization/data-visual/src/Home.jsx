import React from 'react'
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const state = {
  labels: ['Avansa', 'Innova', 'Terios','Ford', 'SMK'],
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: [65, 30, 20, 51, 86]
    }
  ]
}

const Home = () => {
  return (
    <div style={{width : `500px`, height : `500px`}}>
        <Pie
        options={{
            title:{
            display:true,
            text:'Average Rainfall per month',
            fontSize:20
            },
            legend:{
            display:true,
            position:'right'
            }
        }}
        data={state}
        />
    </div>
  )
}

export default Home