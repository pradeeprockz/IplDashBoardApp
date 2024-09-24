import {useHistory} from 'react-router-dom'
import './index.css'

const TeamCard = ({team}) => {
  const history = useHistory()

  const handleClick = () => {
    history.push(`/team-matches/${team.id}`)
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className="team-card"
      onClick={handleClick}
      onKeyPress={e => {
        if (e.key === 'Enter') {
          handleClick()
        }
      }}
      aria-label={`View matches of ${team.name}`}
    >
      <img
        src={team.team_image_url}
        alt={`${team.name}`}
        className="team-logo"
      />
      <h2 className="team-name">{team.name}</h2>
    </div>
  )
}

export default TeamCard
