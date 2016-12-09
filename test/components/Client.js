import test from 'ava';
import React from 'react';
import { shallow } from 'enzyme';
import Client from '../../src/components/Client';

test('Client voted', t => {
  const wrapper = shallow(<Client nickname="John Doe" vote="13" />);
  t.true(wrapper.find('.client').hasClass('voted'));
});

test('Client did not vote', t => {
  const wrapper = shallow(<Client nickname="John Doe" />);
  t.false(wrapper.find('.client').hasClass('voted'));
});