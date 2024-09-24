import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {Link} from 'react-router-dom'
import './index.css'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.fetchTeamsData()
  }

  fetchTeamsData = async () => {
    const teamsApiUrl = 'https://apis.ccbp.in/ipl'
    const response = await fetch(teamsApiUrl)
    const data = await response.json()

    const updatedTeamsList = data.teams.map(team => ({
      id: team.id,
      name: team.name,
      teamImageUrl: team.team_image_url,
    }))

    this.setState({
      teamsList: updatedTeamsList,
      isLoading: false,
    })
  }

  renderTeamsList = () => {
    const {teamsList} = this.state

    return (
      <div className="home-container">
        <div className="ipl-dashboard-heading-container">
          <ul className="teams-list">
            {teamsList.map(team => (
              <li key={team.id} className="team-item">
                <Link to={`/team-matches/${team.id}`} className="team-link">
                  <div className="team-item-content">
                    <img
                      src={team.teamImageUrl}
                      alt={team.name}
                      className="team-logo"
                    />
                    <p className="team-name">{team.name}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="Oval" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
            {this.renderTeamsList()}
          </>
        )}
      </div>
    )
  }
}

export default Home
