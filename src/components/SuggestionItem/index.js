import './index.css'

const SearchItem = props => {
  const {item, inputChange} = props
  const {id, suggestion} = item
  const onChange = () => {
    inputChange(id)
  }
  return (
    <li className="list">
      <div className="searchItem">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
          onClick={onChange}
        />
      </div>
    </li>
  )
}
export default SearchItem
