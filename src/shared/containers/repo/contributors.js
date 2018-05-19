import {connect} from 'react-redux';

import {Contributors} from '../../components/repo/contributors';
import * as actions from '../../actions';

const mapStateToProps = ({contributors, reposContributorsCount}, {repoName}) => ({
  // REMEMBER: "reposContributorsCount" has the following
  // scheme [[repoName1, count1], [repoName2, count2]]
  count: reposContributorsCount.find(([repo]) => repo === repoName),
  contributors: contributors[repoName]
});

export default connect(mapStateToProps, actions)(Contributors);
