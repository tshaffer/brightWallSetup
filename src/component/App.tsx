import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  startup,
} from '../controller';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export interface AppProps {
  name: string;
  onStartup: () => any;
}

const App = (props: AppProps) => {

  console.log('App invoked');

  // Equivalent to old componentDidMount
  React.useEffect(props.onStartup, []);

  return (
    <div>Pizza</div>
  );
};

function mapStateToProps(state: any, ownProps: any): Partial<AppProps> {
  return {
    name: 'Fred',
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    onStartup: startup,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
