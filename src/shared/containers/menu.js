import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {List} from 'immutable';

import {Menu} from '../components/menu';

const mapStateToProps = ({reposContributorsCount, repo}, {match}) => ({
  reposContributorsCount: reposContributorsCount.map((item) => {
    const repoName = item.get(0);
    const count = item.get(1);
    const isLoading = repo.getIn([repoName, 'isLoading']);

    return List.of(repoName, count, isLoading);
  })
});
// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps)(Menu));
