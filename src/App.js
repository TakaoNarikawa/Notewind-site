import React from 'react';
import styled from 'styled-components'
import YouTube from 'react-youtube';

// icon
import logo from './icons/logo.png';
import combinationIcon from './icons/combination.svg'
import unsplitedIcon from './icons/unsplited.svg'
import codeIcon from './icons/code.svg'

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';

function App() {

  const url = "https://apps.apple.com/us/app/notewind/id1482532727";

  const AppWrapper = styled.div`
  text-align: center;
  `
  const HeaderWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  `

  const BodyWrapper = styled.div`
  padding: 10vmin;
  `

  const FooterWrapper = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  `

  const Logo = styled.img`
    height: 40vmin;
  `

  const FeatureIcon = styled.img`
    height: 15vmin;
    padding: 4vmin;
  `

  const H1 = styled.h1`
    padding-top: 4vmin;
  `

  return (
    <AppWrapper>
      <HeaderWrapper>
        <Logo src={logo} className="App-logo" alt="logo" />
        <h1>Notewind</h1>
        <p>
          Any websites turn to your notebook.
        </p>

        <Button
          variant="contained"
          color="secondary"
          href={url}
          startIcon={<ArrowDownward />}
        >
          Download
      </Button>

      </HeaderWrapper>
      <BodyWrapper>
        <YouTube
          videoId="2g811Eo7K8U"
        // opts={}
        // onReady={}
        />
        <H1>
          Combination of Note and Browser
        </H1>
        <FeatureIcon src={combinationIcon} />

        <p>
          This is not only note app, but also web app.
        </p>
        <p>
          You can move to other site. Then you can begin new note.
        </p>

        <H1>
          Unsplit View
        </H1>
        <FeatureIcon src={unsplitedIcon} />
        <p>
          You don't need to convert to PDF anymore.
        </p>
        <p>
          You can write on continuous page.
        </p>

        <H1>
          Native Functions
        </H1>
        <FeatureIcon src={codeIcon} />
        <p>
          Every web browser function
        </p>
        <p>
          such as GIF image and javascript works correctly.
        </p>
      </BodyWrapper>

      <FooterWrapper>
        Copyright © Caprolactam2450 all rights reserved.
      </FooterWrapper>
    </AppWrapper>
  );
}

export default App;
