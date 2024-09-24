import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchDetails

  return (
    <div className="latest-match-container">
      <h2 className="latest-match-heading">Latest Match</h2>
      <div className="latest-match-details-container">
        <div className="competing-team-container">
          <img
            src={competingTeamLogo}
            alt={`latest match ${competingTeam}`}
            className="competing-team-logo"
          />
          <p className="competing-team">{competingTeam}</p>
        </div>
        <div className="match-details">
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-result">{result}</p>
        </div>
        <p className="match-innings">First Innings: {firstInnings}</p>
        <p className="match-innings">Second Innings: {secondInnings}</p>
        <p className="match-man-of-the-match">
          Man of the Match: {manOfTheMatch}
        </p>
        <p className="match-umpires">Umpires: {umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
