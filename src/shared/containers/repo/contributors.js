import {connect} from 'react-redux';

import {Contributors} from '../../components/repo/contributors';
import * as actions from '../../actions';

const mapStateToProps = ({contributors, reposContributorsCount}, {repo}) => ({
  count: reposContributorsCount.find(([repoName]) => repoName === repo.name),
  contributors: contributors[repo.name]
});

export default connect(mapStateToProps, actions)(Contributors);
