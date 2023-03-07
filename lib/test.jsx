//used with jest to test if our call to openai is working properly
const { main } = require('./openai.jsx');

// Define a mock request object
const request = {
  body: {
    animal: "Lion"
  }
};

// Define a mock response object with methods for handling the response
const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe('main function', () => {
  it('should return a valid response when called with a valid request', async () => {
    await main(request, response);
    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.json).toHaveBeenCalledWith({ result: expect.any(String) });
  });

  it('should return an error response when called with an invalid request', async () => {
    const invalidRequest = { body: { animal: "" } };
    await main(invalidRequest, response);
    expect(response.status).toHaveBeenCalledWith(400);
    expect(response.json).toHaveBeenCalledWith({ error: expect.any(Object) });
  });
});
