export const createComplete = post => ({
  type: 'POST@CREATE_COMPLETE',
  data: post
});

export const findAllComplete = data => ({
  type: 'POST@FINDALL_COMPLETE',
  data
});
