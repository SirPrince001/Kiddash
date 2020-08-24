class Response {
  constructor(data, status) {
    this.data = data, 
    this.status = status;
  }
}

class ResponseError extends Error {
  constructor(status,message) {
    super(message);
    this.status = status;
  }
}

module.exports = {
  Response,
  ResponseError,
};
