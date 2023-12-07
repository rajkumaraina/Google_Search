import {Component} from 'react'

import './index.css'

import SearchItem from '../SuggestionItem'

const suggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {suggestion: suggestionsList, searchInput: ''}

  search = event => {
    this.setState({searchInput: event.target.value})
  }

  inputChange = id => {
    const {suggestion} = this.state
    const item = suggestion.filter(each => each.id === id)
    const final = item[0].suggestion
    this.setState({searchInput: final})
  }

  render() {
    const {suggestion, searchInput} = this.state
    const filterList = suggestion.filter(each => {
      const name = each.suggestion.toLowerCase()
      return name.includes(searchInput)
    })

    return (
      <div className="mainContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png "
          alt="google logo"
          className="img"
        />
        <div className="insideContainer">
          <div className="staticSearch">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchImg"
            />
            <input
              type="search"
              className="input"
              onChange={this.search}
              placeholder="Search Google"
              value={searchInput}
            />
          </div>
          <div className="listContainer">
            <ul className="unordered">
              {filterList.map(eachItem => (
                <SearchItem
                  item={eachItem}
                  key={eachItem.id}
                  inputChange={this.inputChange}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
