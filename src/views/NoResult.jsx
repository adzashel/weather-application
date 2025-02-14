import noResult from '../../public/icons/no-result.svg'
const NoResult = ({ search }) => {
  return (
    <div className="weather-container">
    <img src={ noResult } alt="icon" className='nores-img'/>
    <p className='para'>No City with name  { search }</p>
  </div>
  )
}

export default NoResult;
