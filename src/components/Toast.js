import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ToastStyle from 'styles/toast';
import { hideToast } from 'redux/ducks/toast';

function Toast({ toast, hideToast }) {
  let activeShow = false;

  useEffect(() => {
    if (toast.show && !activeShow) {
      // eslint-disable-next-line
      activeShow = true;

      setTimeout(() => {
        hideToast();
        activeShow = false;
      }, 3000);
    }
  }, [toast.show, hideToast, activeShow]);

  return (
    <ToastStyle data-component="toast" show={toast.show} status={toast.status}>
      <p>{toast.message}</p>
    </ToastStyle>
  );
}

const mapStateToProps = states => ({
  toast: states.toast
});

const mapDispatchToProps = dispatch => bindActionCreators({ hideToast }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toast);
