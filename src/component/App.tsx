import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// -----------------------------------------------------------------------
// Types
// -----------------------------------------------------------------------

/** @internal */
/** @private */
export interface AppProps {
  name: string;
}

const App = () => {
  return (
    <div>Pizza</div>
  );
};

function mapStateToProps(state: any, ownProps: any): Partial<AppProps> {
  return {
    name: 'fred',
  };
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
