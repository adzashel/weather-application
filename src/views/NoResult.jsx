import noResult from '../icons/no-result.svg'
const NoResult = ({ search }) => {
  return (
    <div className="weather-container">
    <img src={ noResult } alt="icon" />
    <p>No City with name  { search }</p>
  </div>
  )
}

export default NoResult
