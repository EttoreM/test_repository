import { APIClient } from "./APIClient.js";
import axios from "axios";

export class BoredAPIClient extends APIClient {

  constructor() {
    super('http://bored.api.lewagon.com/api/activity');
  }

  constructUrl(_requestType, _param='') {

    let url;

    switch(_requestType) {
      case('random'):
        return this.baseUrl;

      case('key'):
        return this.baseUrl + `?key=${_param}`;

      case('type'):
        return this.baseUrl + `?type=${_param}`;

      default:
        throw Error("Unknown request");
    }

  }

  async getEvent(_requestType, _param) {
    const url = this.constructUrl(_requestType, _param);
    console.log(url)
    const resp = await axios.get(url);
    return resp.data;
  }
}