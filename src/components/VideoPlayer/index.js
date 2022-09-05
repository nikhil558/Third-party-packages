import {Chrono} from 'react-chrono'
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import 'reactjs-popup/dist/index.css'
import './index.css'

const barData = [
  {
    group_name: 'Group A',
    boys: 200,
    girls: 400,
  },
  {
    group_name: 'Group B',
    boys: 3000,
    girls: 500,
  },
  {
    group_name: 'Group C',
    boys: 1000,
    girls: 1500,
  },
  {
    group_name: 'Group D',
    boys: 700,
    girls: 1200,
  },
]

const pieData = [
  {
    count: 809680,
    language: 'Telugu',
  },
  {
    count: 4555697,
    language: 'Hindi',
  },
  {
    count: 12345657,
    language: 'English',
  },
]

const chronoItems = [
  {
    title: 'May 1940',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
    media: {
      source: {
        url: 'https://www.youtube.com/embed/-oiyeioIg2A',
        type: 'mp4',
      },
      type: 'VIDEO',
      name: 'Pearl Harbor',
    },
  },
  {
    title: 'May 1939',
    cardTitle: 'Dunkirk',
    cardSubtitle: 'Men of the British Expeditionary Force.',
    cardDetailedText:
      'On 10 May 1940, Hitler began his long-awaited offensive in the west by invading neutral Holland and attacking northern France.',
  },
]

const overlayStyles = {
  backgroundColor: '#fecba6',
}

const VideoPlayer = () => {
  const DataFormatter = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="video-container">
      <h1 className="heading">Video Player</h1>
      <div className="responsive-container">
        <ReactPlayer url="https://www.youtube.com/watch?v=VHDKxkiyai8" />
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <BarChart
          data={barData}
          margin={{
            top: 5,
          }}
        >
          <XAxis
            dataKey="group_name"
            tick={{
              stroke: 'grey',
              strokeWidth: 1,
            }}
          />
          <YAxis
            tickFormatter={DataFormatter}
            tick={{
              stroke: 'gray',
              strokeWidth: 0,
            }}
          />
          <Legend
            wrapperStyle={{
              padding: 30,
              marginLeft: 30,
            }}
            iconType="wye"
            layout="horizontal"
            verticalAlign="top"
            align="left"
          />
          <Bar dataKey="boys" name="Boys" fill="#1f77b4" barSize="20%" />
          <Bar dataKey="girls" name="Girls" fill="#fd7f0e" barSize="20%" />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            cx="30%"
            cy="40%"
            data={pieData}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="count"
          >
            <Cell name="Telugu" fill="#fecba6" />
            <Cell name="Hindi" fill="#b3d23f" />
            <Cell name="English" fill="#a44c9e" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="chrono-container">
        <Chrono
          mode="VERTICAL"
          items={chronoItems}
          slideShow
          theme={{
            primary: 'black',
            secondary: 'green',
            cardBgColor: 'lightblue',
            cardForeColor: 'gray',
            titleColor: 'red',
          }}
          buttonTexts={{
            first: 'Jump to First',
            last: 'Jump to Last',
            next: 'Next',
            previous: 'Previous',
          }}
          enableOutline
        >
          <div className="chrono-icons">
            <img
              src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
              alt="image1"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/csk-logo-img.png"
              alt="image2"
            />
          </div>
        </Chrono>
      </div>
      <div className="popup-container">
        <Popup
          trigger={open => (
            <button className="trigger-button" type="button">
              Trigger - {open ? 'Opened' : 'Closed'}
            </button>
          )}
          on={['hover', 'focus']}
          overlayStyle={overlayStyles}
          closeOnDocumentClick
        >
          {close => (
            <>
              <div>
                <p>React is a popular and widely used programming language</p>
              </div>
              <button
                type="button"
                className="trigger-button"
                onClick={() => close()}
              >
                Close
              </button>
            </>
          )}
        </Popup>
      </div>
    </div>
  )
}

export default VideoPlayer
