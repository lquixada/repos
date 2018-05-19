import {connect} from 'react-redux';

import {Contributors} from '../../components/repo/contributors';
import * as actions from '../../actions';

const mapStateToProps = ({contributors, contributorsCount}, {repo}) => ({
  contributorsCount: contributorsCount[repo.name],
  contributors: contributors[repo.name]
});

export default connect(mapStateToProps, actions)(Contributors);
