import { camelCase, isArray, isPlainObject } from 'lodash';

interface ObjProps {
  [index: string]: any;
}

export function camelizeKeys<T>(obj: ObjProps): T {
  if (isPlainObject(obj)) {
    const newObj = {};
    Object.keys(obj).forEach(key => {
      const values = isArray(obj[key])
        ? obj[key].map((i: any) => camelizeKeys(i))
        : obj[key];
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      return (newObj[camelCase(key)] = camelizeKeys(values));
    });
    return newObj as T;
  } else if (isArray(obj)) obj.map(i => camelizeKeys(i));
  return obj as T;
}
