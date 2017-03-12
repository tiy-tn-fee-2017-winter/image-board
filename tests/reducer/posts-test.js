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
    const action = { type: 'POST@CREATE_COMPLETE', data: { id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' } };
    const expectedState = [{ id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@CREATE_COMPLETE: it can add an item to an existing array', (assert) => {
    const oldState = [{ id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];
    const action = { type: 'POST@CREATE_COMPLETE', data: { id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' } };
    const expectedState = [{ id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }, { id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@FINDALL_COMPLETE: it can findall with an empty state', (assert) => {
    const oldState = [];
    const action = { type: 'POST@FINDALL_COMPLETE', data: [{ id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }] };
    const expectedState = [{ id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });

  test('POST@FINDALL_COMPLETE: it can findall with a non-empty state', (assert) => {
    const oldState = [{ id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];
    const action = { type: 'POST@FINDALL_COMPLETE', data: [{ id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }] };
    const expectedState = [{ id: 2, url: 'http://placecage.com/200/200', caption: 'Cage' }, { id: 1, url: 'http://placecera.com/200/200', caption: 'Cera' }];

    assert.deepEqual(posts(oldState, action), expectedState);
  });
});
