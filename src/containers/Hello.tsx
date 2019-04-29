import Hello from '../components/Hello/';
import * as actions from '../store/actions/';
import { Test } from '../store/types/index';
import { connect } from 'react-redux';

export function mapStateToProps({ number, name,userInfo }: Test) {
  return {
    number,
    name,
    userInfo
  }
}

export default connect(mapStateToProps, { ...actions })(Hello);