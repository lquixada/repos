import {connect} from 'react-redux';

import {Repo} from '../components/repo';

const mapStateToProps = ({repos}, {match}) => ({
  repo: repos[match.params.repo]
});
export default connect(mapStateToProps)(Repo);
