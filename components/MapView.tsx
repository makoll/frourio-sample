import Chart from 'react-google-charts'
import { Stay } from '~/server/types'

const MapView = ({ stays }: { stays: Stay[] }) => {
  const options = {
    region: 'world',
    legend: 'none',
    colorAxis: {
      maxValue: 20,
      minValue: 0,
      colors: ['white', '#DBFFDB', '#CCEDD2', '#CCEDCC', '#BEEDBE']
    },
    backgroundColor: '#90C0E0'
  }
  type GoogleChartsHeader = [
    string,
    string,
    { role: string; p: { html: boolean } }
  ]
  type GoogleChartsData = GoogleChartsHeader | [string, number, string]
  const chartDataDetails: [string, number, string][] = stays.map((stay) => [
    stay.name,
    stay.count,
    `count: ${stay.count}`
  ])
  const googleChartsData: GoogleChartsData[] = [
    ['Country', 'Value', { role: 'tooltip', p: { html: true } }],
    ...chartDataDetails
  ]
  return (
    <Chart
      // chartEvents={[
      //   {
      //     eventName: 'select',
      //     callback: selectAreaOnMapHandler
      //   }
      // ]}
      chartType="GeoChart"
      height={`${window.innerHeight / 2}px`}
      width={`${window.innerWidth - 300}px`}
      options={options}
      data={googleChartsData}
    />
  )
}

export default MapView
