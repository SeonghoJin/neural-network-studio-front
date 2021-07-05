export default new class {
  NODE_ENV : string;

  DB_HOST : string;

  constructor() {
    this.NODE_ENV = process.env.NODE_ENV || 'development';
    this.DB_HOST = process.env.REACT_APP_DB_HOST || 'localhost:3000';
  }
}();
