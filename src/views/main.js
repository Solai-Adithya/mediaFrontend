import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { DriveFolderUploadOutlined } from '@mui/icons-material';
import MobileMain from './mobilemain';
import DesktopMain from './desktopmain';
import ScrollButton from '../components/scrollButton';


class Main extends React.Component {
    constructor(props) {
      super(props)
      this.state = { matches: window.matchMedia("(min-width: 768px)").matches };
    }
  
    componentDidMount() {
      const handler = e => this.setState({matches: e.matches});
      window.matchMedia("(min-width: 1000px)").addEventListener('change', handler);
    }
    render() {
      return (
        <div style={{marginTop:'120px',borderRadius:'10px'}}>
       
        {this.state.matches && (<DesktopMain/>)}
        {!this.state.matches && (<MobileMain/>)}
        
        
        <ScrollButton/>
        </div>
      );
    }
  }
  
  export default Main;

