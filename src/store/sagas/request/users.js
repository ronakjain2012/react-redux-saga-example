import axios from "axios";

export function requestGetUsers() {
  return axios.request({
    method: "get",
    url: "https://randomuser.me/api/?results=500",
    Headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  });
}

export function requestGetSingleUser(ID) {
  console.log('req',ID);
  return axios.request({
    method: "get",
    url: "https://randomuser.me/api/?results=1",
    Headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
  });
}