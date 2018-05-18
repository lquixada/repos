import {connect} from 'react-redux';
import {withRouter} from 'react-router';

import {Menu} from '../components/menu';
import {totalContributorsDesc} from '../helpers';

const mapStateToProps = ({contributors}) => ({
  repos: Object.keys(contributors)
    .map((key) => ({
      name: key,
      contributors_count: contributors[key],
    }))
    .sort(totalContributorsDesc)
});

export default withRouter(connect(mapStateToProps)(Menu));
