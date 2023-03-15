import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { PicturesActions } from './Redux/Pictures';
import MainNavigation from './Shared/MainNavigation';
import Landing from './Components/Landing';
import PictureList from './Components/PictureList';

function App() {
  const dispatch = useDispatch()
  const getImages = async () => {
    const response = await fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_AUTH_KEY}`);
    const data = await response.json()
    dispatch(PicturesActions.AddPictures(data))
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div className="App">
      <MainNavigation/>
      <main>
        <Landing/>
        <PictureList/>
      </main>
    </div>
  );
}

export default App;
