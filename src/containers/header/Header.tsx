import Paper from '@material-ui/core/Paper';
import * as React from 'react';

import NavBar from "./navBar/NavBar";

class Header extends React.Component {

  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
                <Paper>
                    <NavBar/>
            </Paper>

    );
  }
}

export default Header;
