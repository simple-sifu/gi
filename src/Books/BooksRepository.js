import HttpGateway from "../Shared/HttpGateway.js";
import Observable from "../Shared/Observable.js";

class BooksRepository {
  httpGateway = null;
  programmersModel = new Observable();
  apiUrl = "https://api.logicroom.co/api/tommy.han.cs@gmail.com/";

  constructor() {
    this.httpGateway = new HttpGateway();
  }

  getBooks = async (callback) => {
    this.programmersModel.subscribe(callback);
    await this.loadApiData();
    this.programmersModel.notify();
  };

  loadApiData = async () => {
    const booksDto = await this.httpGateway.get(this.apiUrl + "books");
    this.programmersModel.value = booksDto.result.map((bookDto) => {
      return bookDto;
    });
  };
}

const booksRepository = new BooksRepository();
export default booksRepository;
