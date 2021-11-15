import axios from "axios";

// 2fd8304a9dde7783f447c8d0b6c447e2662e14a6a82dc0647a6080521429287f
export function requestGetUsers() {
  return axios.request({
    method: "get",
    url: "https://randomuser.me/api/?results=500",
    Headers: {
       // 'Authorization': 'Bearer 2fd8304a9dde7783f447c8d0b6c447e2662e14a6a82dc0647a6080521429287f',
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