import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import logo from 'assets/dragon.png';

import { H2 } from 'styles/heading';
import { ButtonMedium } from 'styles/button';
import DragonListStyle, { BorderTop, BorderBottom, Footer, ButtonsWrapper } from 'styles/dragonList';

import Modal from 'components/Modal';

import { getDragonList, deleteDragon } from 'redux/ducks/dragon';

function DragonList(props) {
  const [selectedDragon, setSelectedDragon] = useState(false);
  const [openedModal, setOpenedModal] = useState(false);

  useEffect(() => {
    props.getDragonList();
    // eslint-disable-next-line
  }, []);

  function handleDeleteDragon(id) {
    props.deleteDragon(id);
    setOpenedModal(false);
  }

  function handleUpdateDragon(id) {}

  function handleOpenModal(dragon) {
    setSelectedDragon(dragon);
    setOpenedModal(true);
  }

  function handleCloseModal() {
    setOpenedModal(false);
  }

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
                <ButtonMedium type="button" onClick={() => handleOpenModal(dragon)} color={'#34332c'}>
                  Delete
                </ButtonMedium>

                <ButtonMedium type="button" onClick={() => handleUpdateDragon(dragon.id)} color={'#90897f'}>
                  Update
                </ButtonMedium>
              </ButtonsWrapper>
            </li>
          ))}
        </ul>
        <BorderBottom />

        {selectedDragon && (
          <Modal opened={openedModal} closeEvent={handleCloseModal}>
            <H2>Want to delete the dragon?</H2>

            <ButtonsWrapper width={'120px'}>
              <ButtonMedium type="button" onClick={() => handleDeleteDragon(selectedDragon.id)} color={'#34332c'}>
                Yes
              </ButtonMedium>

              <ButtonMedium type="button" onClick={handleCloseModal} color={'#90897f'}>
                No
              </ButtonMedium>
            </ButtonsWrapper>
          </Modal>
        )}
      </DragonListStyle>
    );
  }

  return null;
}

const mapStateToProps = states => ({
  dragonList: states.dragon.list
});

const mapDispatchToProps = dispatch => bindActionCreators({ getDragonList, deleteDragon }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(DragonList);
