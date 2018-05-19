import {connect} from 'react-redux';

import {Repo} from '../../components/repo';
import * as actions from '../../actions';

const mapStateToProps = ({repo}, {match}) => ({
  repo: repo[match.params.repo]
});
export default connect(mapStateToProps, actions)(Repo);
