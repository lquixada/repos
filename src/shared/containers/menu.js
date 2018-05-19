import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {Menu} from '../components/menu';
import {totalContributorsDesc} from '../helpers';

const mapStateToProps = ({contributorsCount}) => ({
  repos: Object.keys(contributorsCount)
    .map((key) => ({
      name: key,
      contributors_count: contributorsCount[key],
    }))
    .sort(totalContributorsDesc)
});

export default withRouter(connect(mapStateToProps)(Menu));
