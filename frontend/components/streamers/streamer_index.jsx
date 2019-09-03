import React from 'react';
import { Route, Link } from 'react-router-dom';
import StreamIndexItem from './stream_index_item';

class StreamerIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchOneGame(this.props.match.params.gameId)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.gameId !== this.props.match.params.gameId) {
            this.props.fetchOneGame(this.props.match.params.gameId);
        }
      }

    render () {

        let streamz = this.props.streamers.map(streamer => <li><StreamIndexItem key={streamer.id} streamer={streamer} /></li>)

        return (
            <>
                <div className="streamers-index-container">
                    <div className="content-container-for-streamer-index">
                        <div className="thumbnail-image"><img className="thumbnail-image" src={this.props.game.photoUrl} alt={this.props.game.title} height="173" width="130"/></div>
                        <div className="title-streamers-viewers-count">
                            <p>{this.props.game.title}</p>

                        </div>
                    </div>

                    <div className="fake-ad-container">
                        <div className="fake-advertisement">
                            <p>This is going to be a fake ad</p>        
                        </div>
                    </div>

                    <div className="list-of-streamers">
                        <ul>
                            { streamz }
                        </ul>

                    </div>
                </div>
            </>
        )
    }
}

export default StreamerIndex;

// Still need to add follower count and viewer count for each title within the index container