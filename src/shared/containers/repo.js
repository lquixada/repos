import {connect} from 'react-redux';

import {Repo} from '../components/repo';

const mapStateToProps = ({repos}, {match}) => ({
  repo: repos.find((repo) => repo.name === match.params.repo)
});
export default connect(mapStateToProps)(Repo);
