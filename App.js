/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, View} from 'react-native';
import YTSearch from 'youtube-api-search';
import AppHeader from './components/AppHeader';
import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const API_KEY = 'AIzaSyBU-6fLqU6uq4LKbKb7TzziPXbCJ5ULhoE';

type Props = {};
export default class App extends Component<Props> {
  state = {
    loading: false,
    videos: []
  }

  onPressSearch = term => {
    this.searchYT(term);
  }

  searchYT = term => {
    this.setState({ loading: true });
    YTSearch({ key: API_KEY, term }, videos => {
      console.log(videos);
      this.setState({ 
        loading: false,
        videos
      });
    });
  }

  render() {
    const { loading, videos } = this.state;
       
    return (
      <View style={{ flex: 1, backgroundColor: '#ddd' }}>
        <AppHeader headerText='Simple YouTube Search'/>
        <SearchBar 
          loading={loading}
          onPressSearch={this.onPressSearch} 
        />        
        <VideoList videos={videos} />
      </View>
    );
  }
}

