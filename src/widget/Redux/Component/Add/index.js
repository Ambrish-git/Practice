import { connect } from 'react-redux';
import { addCounter,getData } from '../../Action/action';
import AddCounter from './component.jsx';
import { bindActionCreators } from 'redux';
function mapStateToProps(state){
    return {
      ... state,
    };
  }
function mapDispatchToProps(dispatch) {
    // return { addCounter: ()=>dispatch(addCounter() ),
    //     getData:()=>dispatch(getData()) }
    // above code is equivalent to below line
        return bindActionCreators({ addCounter,getData},dispatch);
  }
  export default connect(mapStateToProps,mapDispatchToProps)(AddCounter);