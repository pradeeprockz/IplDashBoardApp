import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  return (
    <div className={`match-card ${matchStatus === 'Won' ? 'won' : 'lost'}`}>
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="competing-team-logo"
      />
      <p className="competing-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className="match-status">Match Status: {matchStatus}</p>
    </div>
  )
}

export default MatchCard
