import React from 'react';
import styled from 'styled-components'
import YouTube from 'react-youtube';
import LocalizedStrings from 'react-localization';

// icon
import logo from './icons/logo.png';
import combinationIcon from './icons/combination.svg'
import unsplitedIcon from './icons/unsplited.svg'
import codeIcon from './icons/code.svg'

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import { style } from '@material-ui/system';

function Content(props) {

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

    const StyledYouTube = styled(YouTube)`
    max-width: 80vw
  `

    let strings = new LocalizedStrings({
        en: {
            top: "Any websites turn to your notebook.",
            download: "Download",
            title1: "Combination of Note and Browser",
            desc1: "This is not only note app, but also web app.",
            desc2: "You can move to other site. Then you can begin new note.",
            title2: "Unsplit View",
            desc3: "You don't need to convert to PDF anymore.",
            desc4: "You can write on continuous page directly.",
            title3: "Native Functions",
            desc5: "Every web browser function",
            desc6: "such as GIF image and javascript works correctly."
        },
        jp: {
            top: "どんなウェブサイトでも、あなたのノートに。",
            download: "ダウンロード",
            title1: "ノートとブラウザの組み合わせ",
            desc1: "これは単なるノートではありません、ブラウザアプリでもあります。",
            desc2: "他のサイトに移動することができ、移動先でノートを作成することもできます。",
            title2: "連続した表示",
            desc3: "ノートを取るために、もうウェブサイトをPDFに変換する必要はありません。",
            desc4: "ひとつに繋がったノートに直接メモを書き込むことができます。",
            title3: "ネイティブ機能",
            desc5: "GIF画像やjavascriptなど、",
            desc6: "ウェブサイト本来の機能をすべてノート上で使うことができます。"
        },
    });

    strings.setLanguage(props.lang);

    return (
        <AppWrapper>
            <HeaderWrapper>
                <Logo src={logo} className="App-logo" alt="logo" />
                <h1>Notewind</h1>
                <p>
                    {strings.top}
                </p>

                <Button
                    variant="contained"
                    color="secondary"
                    href={url}
                    startIcon={<ArrowDownward />}
                >
                    {strings.download}
                </Button>

            </HeaderWrapper>
            <BodyWrapper>
                <StyledYouTube
                    videoId="NKWGgBCmu6A"
                // opts={}
                // onReady={}
                />
                <H1>
                    {strings.title1}
                </H1>
                <FeatureIcon src={combinationIcon} />

                <p>
                    {strings.desc1}
                </p>
                <p>
                    {strings.desc2}
                </p>

                <H1>
                    {strings.title2}
                </H1>
                <FeatureIcon src={unsplitedIcon} />
                <p>
                    {strings.desc3}
                </p>
                <p>
                    {strings.desc4}
                </p>

                <H1>
                    {strings.title3}
                </H1>
                <FeatureIcon src={codeIcon} />
                <p>
                    {strings.desc5}
                </p>
                <p>
                    {strings.desc6}
                </p>
            </BodyWrapper>

            <FooterWrapper>
                Copyright © Caprolactam2450 all rights reserved.
      </FooterWrapper>
        </AppWrapper>
    );
}

export default Content;
