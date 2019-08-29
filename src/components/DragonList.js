import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { ButtonMedium } from 'styles/button';
import DragonListStyle, { BorderTop, BorderBottom, Footer, ButtonsWrapper, Button } from 'styles/dragonList';

import logo from 'assets/dragon.png';

import { getDragonList } from 'redux/ducks/dragon';

function DragonList(props) {
  useEffect(() => {
    props.getDragonList();
    // eslint-disable-next-line
  }, []);

  function handleRemoveDragon(id) {}

  function handleUpdateDragon(id) {}

  if (props.dragonList) {
    return (
      <DragonListStyle data-component="dragon-list">
        <BorderTop />
        <ul>
          {props.dragonList.map((dragon, i) => (
            <li key={i}>
              <img src={logo} alt="Dragon Logo" />
              <Footer>
                <strong>{dragon.name}</strong>
                <p>{dragon.type} dragon</p>
              </Footer>
              <ButtonsWrapper>
                <ButtonMedium type="button" onClick={() => handleRemoveDragon(dragon.id)} color={'#34332c'}>
                  Remove
                </ButtonMedium>

                <ButtonMedium type="button" onClick={() => handleUpdateDragon(dragon.id)} color={'#90897f'}>
                  Update
                </ButtonMedium>
              </ButtonsWrapper>
            </li>
          ))}
        </ul>
        <BorderBottom />
      </DragonListStyle>
    );
  }

  return null;
}

const mapStateToProps = states => ({
  dragonList: states.dragon.list
});

const mapDispatchToProps = dispatch => bindActionCreators({ getDragonList }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(DragonList);
