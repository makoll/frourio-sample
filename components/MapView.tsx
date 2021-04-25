import Chart from 'react-google-charts'

const MapView = () => {
  const options = {
    region: 'world',
    legend: 'none',
    colorAxis: {
      maxValue: 1,
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
  const googleChartsData: GoogleChartsData[] = [
    ['Country', 'Value', { role: 'tooltip', p: { html: true } }],
    ['US', 3, ''],
    ['JP', 100, `is living`],
    ['TW', 4, `is lived`]
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
