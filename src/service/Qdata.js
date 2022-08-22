export default class QdataService {
  constructor(http) {
    this.http = http;
    
  }
  
  async incrementByIdAndType(id, type) {
    return this.http.fetch(`/Qdata/${id}/${type}`, {
      method: 'PUT',
    });
  }
  async incrementMBTI(mbti) {
    return this.http.fetch(`/Qdata/hello/${mbti}`, {
      method: 'PUT',
    });
  }
  async getQdataById(id) {
    return this.http.fetch(`/Qdata/${id}`, {
      method: 'GET',
    });
  }
  async getMBTI() {
    return this.http.fetch(`/Qdata/getmbti/all`, {
      method: 'GET',
    });
  }
}




//   async signup(username, password, name, email, url) {
//     const data = await this.http.fetch('/auth/signup', {
//       method: 'POST',
//       body: JSON.stringify({
//         username,
//         password,
//         name,
//         email,
//         url,
//       }),
//     });
//     this.tokenStorage.saveToken(data.token);
//     return data;
//   }

//   async login(username, password) {
//     const data = await this.http.fetch('/auth/login', {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//     });
//     this.tokenStorage.saveToken(data.token);
//     return data;
//   }

//   async me() {
//     const token = this.tokenStorage.getToken();
//     return this.http.fetch('/auth/me', {
//       method: 'GET',
//       headers: { Authorization: `Bearer ${token}` },
//     });
//   }

//   async logout() {
//     this.tokenStorage.clearToken();
//   }
// }
