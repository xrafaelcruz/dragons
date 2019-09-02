import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import moment from 'moment'

import DragonForm, { Form } from 'styles/dragonForm';
import Button from 'styles/button';

import { getDragon, updateDragon, createDragon } from 'redux/ducks/dragon';

import Border from 'components/Border';
import Input from 'components/Input';

function DragonList(props) {
  const [submited, setSubmited] = useState(false);
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [createdAt, setCreatedAt] = useState('');

  useEffect(() => {
    if (props.match.params.id) {
      props.getDragon(props.match.params.id);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (props.dragon && props.update) {
      setName(props.dragon.name);
      setType(props.dragon.type);
      setCreatedAt(moment(props.dragon.createdAt).calendar());
    }
  }, [props.dragon, props.update]);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmited(true);

    if (name && type) {
      setSubmited(false);

      if (props.update) {
        props.updateDragon({ ...props.dragon, name, type });
      } else {
        props.createDragon({ name, type});
      }
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

          { props.update &&
            <Input
              label="Created At"
              input={{
                value: createdAt,
                type: 'text',
                disabled: true
              }}
            />
          }

          <Button type="submit">Submit</Button>
        </Form>
      </Border>
    </DragonForm>
  );
}

const mapStateToProps = states => ({
  dragon: states.dragon.dragon
});

const mapDispatchToProps = dispatch => bindActionCreators({ getDragon, updateDragon, createDragon }, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  withRouter
)(DragonList);
