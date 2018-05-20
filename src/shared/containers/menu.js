import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {Menu} from '../components/menu';

const mapStateToProps = ({reposContributorsCount}) => ({reposContributorsCount});
// We need "withRouter" in order to NavLink active state work
export default withRouter(connect(mapStateToProps)(Menu));
