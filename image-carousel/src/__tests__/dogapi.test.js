import fetchMock from 'jest-fetch-mock';
import { getDogs } from '../dogapi'; // Replace with the correct path

// Mocking the fetch function
fetchMock.enableMocks();

describe('getDogs function', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches dogs and returns the correct result', async () => {
    const mockResponse = {
      data: {
        children: [
          {
            data: {
              title: 'Dog 1',
              preview: {
                images: [
                  {
                    resolutions: [
                      { url: 'https://example.com/dog1.jpg' },
                      // Add more resolutions as needed
                    ],
                  },
                ],
              },
            },
          },
          // Add more children as needed
        ],
      },
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const result = await getDogs(2); // Adjust the length as needed

    expect(result).toEqual([
      { title: 'Dog 1', url: 'https://example.com/dog1.jpg' },
      // Add more expected results based on the mockResponse
    ]);

    // Ensure that fetch was called with the correct URL
    expect(fetchMock).toHaveBeenCalledWith(
      'https://img.cdn4dd.com/s/managed/interview/tps-dogs/api.json'
    );

    // Ensure that fetch was called only once
    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
