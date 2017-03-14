const createComplete = post => ({
  type: 'POST@CREATE_COMPLETE',
  data: post
});

const destroyComplete = post => ({
  type: 'POST@DESTROY_COMPLETE',
  data: post
});

const findAllComplete = data => ({
  type: 'POST@FINDALL_COMPLETE',
  data
});

const findOneComplete = data => ({
  type: 'POST@FINDONE_COMPLETE',
  data
});

export function create(formData) {
  return dispatch => fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt', {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  }).then(res => res.json())
      .then((post) => {
        dispatch(createComplete(post));
      });
}

export function findAll() {
  return dispatch => fetch('https://tiny-tn.herokuapp.com/collections/image-board-rt')
    .then(res => res.json())
    .then((posts) => {
      dispatch(findAllComplete(posts));
    });
}

export function findOne(id) {
  return dispatch => fetch(`https://tiny-tn.herokuapp.com/collections/image-board-rt/${id}`)
    .then(res => res.json())
    .then((post) => {
      dispatch(findOneComplete(post));
    });
}

export function destroy(post) {
  return dispatch => fetch(`https://tiny-tn.herokuapp.com/collections/image-board-rt/${post._id}`, {
    method: 'DELETE'
  }).then(() => {
    dispatch(destroyComplete(post));
  });
}
