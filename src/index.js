import _ from 'lodash';
import React from "react";
import ReactDOM from "react-dom";
import YTsearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetails from "./components/video_details";

//API Key from youtube
import { API_KEY } from "./config";



class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos:[],
            selectedVideo: null,
        };


    this.videoSearch('javascript');

    }

    videoSearch(term){
        YTsearch({
            key:API_KEY,
            term: term
        },(videos)=>{
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    render(){
        const videoSearch = _.debounce((term)=>{this.videoSearch(term)},400)

        return(
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <SearchBar onSearchTermChange = {videoSearch}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <VideoDetails video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-md-4">
                        <VideoList
                            onVideoSelect = {videoUrl => this.setState({selectedVideo:videoUrl})}
                            videoList = {this.state.videos}/>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector(".container"))
