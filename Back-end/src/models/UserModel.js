class UserModel {
  constructor() {
    this.data = ['item1', 'item2', 'item3'];
  }

  getAllData() {
    return this.data;
  }
}

module.exports = UserModel;