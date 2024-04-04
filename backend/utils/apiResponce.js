class ApiRasponce {
  constructor(stauscode, message, data, succsess=true) {
    this.stauscode = stauscode;
    this.message = message;
    this.data = data;
    this.succsess = succsess
  }
}
export { ApiRasponce };
