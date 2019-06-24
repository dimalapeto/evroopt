import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import MainLayout from './components/MainLayout';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faVk, faFacebook, faInstagram, faOdnoklassniki, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
library.add(fab, faVk, faFacebook, faInstagram, faOdnoklassniki, faTwitter, faYoutube, faSearch)

function App() {
  return (
    <div id="wrapper">

        <Header />
        <MainLayout />
        <Footer />

    </div>
)
}

export default App