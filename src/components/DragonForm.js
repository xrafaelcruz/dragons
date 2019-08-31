import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import DragonForm, { Form } from 'styles/dragonForm';
import Button from 'styles/button';
import { Input, Label } from 'styles/form';
import Border, { Background, BorderTop, BorderBottom } from 'styles/border';

import { getDragon } from 'redux/ducks/dragon';

function DragonList(props) {
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    props.getDragon(props.match.params.id);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (props.dragon) {
      setName(props.dragon.name);
      setType(props.dragon.type);
    }
  }, [props.dragon]);

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <DragonForm data-component="dragon-list">
      <Border>
        <BorderTop />
        <Background>
          <Form onSubmit={handleSubmit}>
            <Label>Name</Label>
            <Input type="text" value={name} onChange={e => setName(e.target.value)} />

            <Label>Type</Label>
            <Input type="text" value={type} onChange={e => setType(e.target.value)} />

            <Button type="submit">Submit</Button>
          </Form>
        </Background>
        <BorderBottom />
      </Border>
    </DragonForm>
  );
}

const mapStateToProps = states => ({
  dragon: states.dragon.dragon
});

const mapDispatchToProps = dispatch => bindActionCreators({ getDragon }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(DragonList);
