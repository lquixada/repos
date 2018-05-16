import {connect} from 'react-redux';

import Menu from '../components/menu';

const mapStateToProps = ({repos}) => ({repos});
export default connect(mapStateToProps)(Menu);
