import { afterAll, beforeAll, jest } from '@jest/globals';

beforeAll(() => {
  console.log('Setting up backend tests...');
});

afterAll(() => {
  console.log('Cleaning up backend tests...');
});

jest.setTimeout(10000);
