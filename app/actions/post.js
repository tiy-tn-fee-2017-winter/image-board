const createComplete = post => ({
  type: 'POST@CREATE_COMPLETE',
  data: post
});

const findAllComplete = data => ({
  type: 'POST@FINDALL_COMPLETE',
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