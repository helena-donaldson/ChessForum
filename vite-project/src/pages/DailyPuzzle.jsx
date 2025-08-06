import { useState, useEffect } from 'react'

function DailyPuzzle(){

    const [gameID, setGameID] = useState(null)
    const [showGame, setShowGame] = useState(false)

    useEffect(() => {
        const fetchDailyData = async () => {
          const response = await fetch("https://lichess.org/api/puzzle/daily")
          const json = await response.json()
          setGameID(json.game.id)
        }
        fetchDailyData().catch(console.error)
        // setAverageYearPublished()
      }, [])

    function changeShowGame() {
        if(showGame){
            setShowGame(false)
        }else{
            setShowGame(true)
        }
    }

    return (
        <div >
            <div>
                <h1>Daily Puzzle Challenge</h1>
                <iframe
                src="https://lichess.org/training/frame?theme=brown&bg=dark"
                style={{ width: '400px', aspectRatio: '10 / 11' }}
                allowTransparency="true"
                frameBorder="0"
                />
                <br>
                </br>
                {!showGame &&
                <button onClick={changeShowGame}>Show Full Game</button>
                }
                <br></br>
                {showGame &&
                <div>
                <h1>Full Game</h1>
                <iframe
                src={`https://lichess.org/embed/${gameID}?theme=auto&bg=auto`}
                width="600"
                height="397"
                frameborder="0"
                />
                <br></br>
                <button onClick={changeShowGame}>Hide Full Game</button>
                </div>}
            </div>

        </div>
    )
}

export default DailyPuzzle