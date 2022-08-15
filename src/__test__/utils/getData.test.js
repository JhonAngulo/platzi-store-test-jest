import getData from '../../utils/getData';

describe('Test Fetch apis', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('llamar una Api y retornar datos', () => {
    fetchMock.mockResponseOnce(JSON.stringify({ data: '12345' }));

    // eslint-disable-next-line arrow-parens
    getData('https://google.com').then(response => {
      expect(response.data).toEqual('12345');
    });

    expect(fetchMock.mock.calls[0][0]).toEqual('https://google.com');
  });
});
