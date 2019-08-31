import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import DragonForm, { Form } from 'styles/dragonForm';
import Button from 'styles/button';

import { getDragon, updateDragon } from 'redux/ducks/dragon';

import Border from 'components/Border';
import Input from 'components/Input';

function DragonList(props) {
  const [submited, setSubmited] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');

  useEffect(() => {
    if (props.match.params.id) {
      props.getDragon(props.match.params.id);
    }
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

    setSubmited(true);

    if (name && type) {
      setSubmited(false);

      const newDragon = {
        ...props.dragon,
        name,
        type
      };

      if (props.update) {
        props.updateDragon(newDragon);
      } else {
      }
    } else {
    }
  }

  return (
    <DragonForm data-component="dragon-list">
      <Border>
        <Form onSubmit={handleSubmit}>
          <Input
            label="Name"
            input={{
              value: name,
              type: 'text',
              onChange: e => setName(e.target.value)
            }}
            error={submited && !name ? 'required' : ''}
          />

          <Input
            label="Type"
            input={{
              value: type,
              type: 'text',
              onChange: e => setType(e.target.value)
            }}
            error={submited && !type ? 'required' : ''}
          />

          <Button type="submit">Submit</Button>
        </Form>
      </Border>
    </DragonForm>
  );
}

const mapStateToProps = states => ({
  dragon: states.dragon.dragon
});

const mapDispatchToProps = dispatch => bindActionCreators({ getDragon, updateDragon }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(DragonList);
