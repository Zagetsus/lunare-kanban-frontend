import * as faker from 'faker';
import { parseCookies } from 'nookies';
import { CookieAdapter } from '~/app/infra/cache';

const makeSut = (): CookieAdapter => {
  return new CookieAdapter();
};

describe('CookieAdapter', () => {
  test('should call cookieAdapter.set with correct values', () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.random.objectElement<{}>();
    sut.set(key, value);
    const cookies = parseCookies();
    const string = cookies[key];
    expect(JSON.parse(string)).toBe(value);
  });

  test('should call cookieAdapter.get with correct value', () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.random.objectElement<{}>();
    sut.set(key, value);
    const string = sut.get(key);
    expect(JSON.parse(string)).toBe(value);
  });

  test('should call cookieAdapter.get and return undefined', () => {
    const sut = makeSut();
    const key = faker.database.column();
    sut.set(key);
    const obj = sut.get(key);
    expect(obj).toBeUndefined();
  });
});
