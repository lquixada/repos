import {connect} from 'react-redux';

import {Repo} from '../components/repo';

const mapStateToProps = ({repos}) => ({repos});
export default connect(mapStateToProps)(Repo);
