import {connect} from 'react-redux';

import {Menu} from '../components/menu';

const mapStateToProps = ({contributors}) => ({
  repos: Object.keys(contributors)
    .map((key) => ({
      name: key,
      contributors_count: contributors[key],
    }))
    .sort((a, b) => b.contributors_count - a.contributors_count)
});
export default connect(mapStateToProps)(Menu);
