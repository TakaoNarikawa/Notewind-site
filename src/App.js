import React from 'react';
import styled from 'styled-components'

import Content from './Content.js'

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Button from '@material-ui/core/Button';
import { style } from '@material-ui/system';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import { Input } from '@material-ui/core';

function App(props) {
  const handleChange = event => {
    props.history.push('/Notewind-site/' + event.target.value)
  };

  const AppBarWrapper = styled.div`
  `

  const SelectBoxWrapper = styled.div`
    margin-left: auto;
  `

  const StyledSelect = styled(Select)`
    width: 100px;
  `

  return (
    <AppBarWrapper >
      <AppBar
        position='absolute'
        style={{ background: 'transparent', boxShadow: 'none' }} // styledComponent適応できず
      >
        <Toolbar>

          <SelectBoxWrapper>
            <FormControl>
              <StyledSelect
                value={props.lang}
                onChange={handleChange}
                style={{ color: 'white' }}
              >
                <MenuItem value={'en'}>English</MenuItem>
                <MenuItem value={'jp'}>日本語</MenuItem>
              </StyledSelect>
            </FormControl>
          </SelectBoxWrapper>

        </Toolbar>
      </AppBar>

      <Content
        lang={props.lang}
      />
    </AppBarWrapper >
  );
}

export default App;
