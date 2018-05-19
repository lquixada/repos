import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {Menu} from '../components/menu';

const mapStateToProps = ({reposContributorsCount}) => ({reposContributorsCount});
export default withRouter(connect(mapStateToProps)(Menu));
