import posts from '../../app/reducer/posts';

module('reducer/posts', () => {
  test('it has a default state', (assert) => {
    const oldState = [];
    const action = {};
    const expectedState = [];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@CREATE_COMPLETE: it can add an item to an empty array', (assert) => {
    const oldState = [];
    const action = { type: 'POST@CREATE_COMPLETE', data: { _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' } };
    const expectedState = [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@CREATE_COMPLETE: it can add an item to an existing array', (assert) => {
    const oldState = [{ _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];
    const action = { type: 'POST@CREATE_COMPLETE', data: { _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' } };
    const expectedState = [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }, { _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@FINDALL_COMPLETE: it can findall with an empty state', (assert) => {
    const oldState = [];
    const action = { type: 'POST@FINDALL_COMPLETE', data: [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }] };
    const expectedState = [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@FINDALL_COMPLETE: it can findall with a non-empty state', (assert) => {
    const oldState = [{ _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];
    const action = { type: 'POST@FINDALL_COMPLETE', data: [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }] };
    const expectedState = [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }, { _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@DESTROY_COMPLETE: it can delete the only post', (assert) => {
    const oldState = [{ _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];
    const action = { type: 'POST@DESTROY_COMPLETE', data: { _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' } };
    const expectedState = [];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@DESTROY_COMPLETE: it can delete one of many', (assert) => {
    const oldState = [{ _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }, { _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }];
    const action = { type: 'POST@DESTROY_COMPLETE', data: { _id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' } };
    const expectedState = [{ _id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });
});
