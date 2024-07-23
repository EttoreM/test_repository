import axios from "axios";

export class APIClient {
  constructor(_baseUrl) {
    if (this.constructor === APIClient) {
      throw Error("Abstract class");
    }
    this.baseUrl = _baseUrl;
  }

  async getEvent(_url) {
    throw Error("You need to implement this");
    // const resp = await axios.get(_url);
    // return resp.data;
  }
}