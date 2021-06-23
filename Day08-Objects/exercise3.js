console.log("EXERCISE LEVEL 3");

//Create an object literal called personAccount.
//It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods.
//Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

const personAccount = {
  firstName: "Lorena",
  lastName: "Trujillo",
  incomes: {
    description: "Incomes -June",
    incomes: [500, 450, 300],
  },
  expenses: {
    description: "Expenses - June",
    expenses: [345, 600, 100],
  },
  totalIncome: function () {
    return this.incomes.incomes.reduce((a, b) => a + b);
  },
  totalExpense: function () {
    return this.expenses.expenses.reduce((a, b) => a + b);
  },
  addIncome: function (value) {
    this.incomes.incomes.push(value);
  },
  addExpense: function (value) {
    this.expenses.expenses.push(value);
  },
  accountBalance: function () {
    return this.totalIncome() - this.totalExpense();
  },
};

console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
personAccount.addIncome(50);
personAccount.addExpense(100);
console.log(personAccount.totalIncome());
console.log(personAccount.totalExpense());
console.log(personAccount.accountBalance());

const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application

function signUp(userData) {
  for (let user of users) {
    if (userData.email === user.email) {
      return "You have an account";
    }
  }
  users.push(userData);
}

signUp({
  _id: "ghderc",
  username: "Lorena",
  email: "lorena@lorena.com",
  password: "123333",
  createdAt: "08/01/2020 10:00 AM",
  isLoggedIn: false,
});

//The products array has three elements and each of them has six properties.
//a. Create a function called rateProduct which rates the product
//b. Create a function called averageRating which calculate the average rating of a product

//Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      {
        userId: "fg12cy",
        rate: 5,
      },
      {
        userId: "zwf8md",
        rate: 4.5,
      },
    ],
    likes: [],
    rateProduct: function (userId, rate) {
      this.ratings.push({
        userId,
        rate,
      });
    },
    averageRating: function () {
      return (
        this.ratings.map((rating) => rating.rate).reduce((a, b) => a + b) /
        this.ratings.length
      );
    },
    likeProduct: function (userId) {
      let exists = this.likes.indexOf(userId);
      if (exists === -1) {
        this.likes.push(userId);
      } else {
        this.likes.splice(exists, 1);
      }
    },
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
    rateProduct: function (id, rate) {
      this.ratings.push({
        id,
        rate,
      });
    },
    averageRating: function () {
      return (
        this.ratings.map((rating) => rating.rate).reduce((a, b) => a + b) /
        this.ratings.length
      );
    },
    likeProduct: function (userId) {
      let exists = this.likes.indexOf(userId);
      if (exists === -1) {
        this.likes.push(userId);
      } else {
        this.likes.splice(exists, 1);
      }
    },
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [
      {
        userId: "fg12cy",
        rate: 5,
      },
    ],
    likes: ["fg12cy"],
    rateProduct: function (id, rate) {
      this.ratings.push({
        id,
        rate,
      });
    },
    averageRating: function () {
      return (
        this.ratings.map((rating) => rating.rate).reduce((a, b) => a + b) /
        this.ratings.length
      );
    },
    likeProduct: function (userId) {
      let exists = this.likes.indexOf(userId);
      if (exists === -1) {
        this.likes.push(userId);
      } else {
        this.likes.splice(exists, 1);
      }
    },
  },
];
