const PREFIX = 'diy_teacher_resources-';

export const setKeyTrue = (key: string) => {
  sessionStorage.setItem(`${PREFIX}${key}`, '1');
};

export const removeKey = (key: string) => {
  sessionStorage.removeItem(`${PREFIX}${key}`);
};

export const isKeyTrue = (key: string): boolean => {
  return !!sessionStorage.getItem(`${PREFIX}${key}`);
};
