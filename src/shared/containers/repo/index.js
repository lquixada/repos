import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {Repo} from '../../components/repo';
import * as actions from '../../actions';

const mapStateToProps = ({repo}, props) => ({
  repo: repo[props.match.params.repo]
});
export default withRouter(connect(mapStateToProps, actions)(Repo));
