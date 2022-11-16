// Information Management
import Users from "@models/Users.model";

export interface UserDetailInterface {
    id?: number;
    firstName: string;
    lastName: string;
    emailAddress: string;
}

export class UserService {
   async createNewUser(userDetails: UserDetailInterface): Promise<UserDetailInterface> {
    try {
    const newUser = await Users .create({
      firstName: userDetails.firstName,
      lastName:  userDetails.lastName,
      emailAddress: userDetails.emailAddress
    })    
    return newUser;
    } catch (error) {
        throw new Error(error)
    }
   }

   async getUserDetails(userId: number): Promise<Users> {
    try {
        const userDetails = await Users.findByPk(userId);
        return userDetails;
    } catch (error) {
        throw new Error(error)
    }
   }

   async getAllUsersList(): Promise<Users[]> {
    try {
        const allUsers = await Users.findAll();
        return allUsers ;
    } catch (error) {
        throw new Error(error)
    }
   }

   async updateUserDetails(userDetails: UserDetailInterface): Promise<UserDetailInterface> {
    try {
        await Users.update( { firstName: userDetails.firstName, lastName: userDetails.lastName, emailAddress: userDetails.emailAddress}, {where: { id : userDetails.id }});
        return userDetails;
    } catch (error) {
        throw new Error(error)
    }
   }

   async deleteUserById(userId: number): Promise<number> {
    try {
        return await Users.destroy({ where: { id: userId } })
    } catch (error) {
        throw new Error(error)
    }
   }
}