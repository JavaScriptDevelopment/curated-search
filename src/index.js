import _ from 'lodash';
import React, {Component} from "react";
import ReactDOM from "react-dom";
import SearchBar from './components/searchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/videoList';
import VideoDetail from './components/videoDetails';

const API_KEY = ' ';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
    

        this.videoSearch('');
    }

