const user = {
    name: "Hayes",
    id: 0,
};

console.log(user.name);

interface User {
    name: string;
    id: number;
  }
   
  class UserAccount {
    name: string;
    id: number;
   
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
    }
  }
   
  const user2: User = new UserAccount("Murphy", 1);

console.log(user2.name)