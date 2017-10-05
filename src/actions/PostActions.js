
export const POST_NEW = 'POST_NEW';
export const POST_DELETE = 'POST_DELETE';

export function add(content) {
  if (!content) {
    return;
  }

  return {
    type: POST_NEW,
    payload: content,
  };
}

export function remove(index) {
  return {
    type: POST_DELETE,
    payload: index,
  };
}
