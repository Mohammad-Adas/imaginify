"use server";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { clerkClient } from "@clerk/clerk-sdk-node"; // Import Clerk server client
// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  try {
    await connectToDatabase();

    let user = await User.findOne({ clerkId: userId });

    if (!user) {
      console.warn(`User with clerkId ${userId} not found. Creating new user record.`);

      // Fetch the user details from Clerk using the server SDK
      const clerkUser = await clerkClient.users.getUser(userId);

      // Extract required fields
      const email = clerkUser.emailAddresses?.[0]?.emailAddress || "";
      // Use clerkUser.username if available, otherwise derive from first and last name
      const username =
          clerkUser.username ||
          (clerkUser.firstName ? `${clerkUser.firstName}${clerkUser.lastName ? " " + clerkUser.lastName : ""}` : "");
      const photo = clerkUser.profileImageUrl || "";

      // Validate that all required fields are present. You can adjust this logic as needed.
      if (!email || !username || !photo) {
        throw new Error(
            `Missing required fields from Clerk for user creation. email: ${email}, username: ${username}, photo: ${photo}`
        );
      }

      // Create the new user with all required fields and any default values (e.g., creditBalance)
      user = await User.create({ clerkId: userId, email, username, photo, creditBalance: 10 });
    }

    return JSON.parse(JSON.stringify(user));
  } catch (error) {
    handleError(error);
  }
}


// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");
    
    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee }},
      { new: true }
    )

    if(!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}