import { connectDB } from "@/lib/mongodb";
import Group from "@/(models)/Group";
import type { NextAuthOptions, DefaultSession, DefaultUser, Product } from "next-auth";
import credentials from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { type DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Product extends DefaultUser {
    product_title: string,
    product_description: string,
    product_image: string,
    product_price: string,
    product_available: string,
    product_show: string,
    createdAt: string,
    updatedAt: string
  }

  interface Filters extends DefaultUser {
    use_my_location: boolean,
    latitude: string,
    longitude: string
  }
  
  interface Session extends DefaultSession {
    user: {
      email: any;
      name: string;
      _id: string;
      password: string;
      isFarmer: boolean,
      favoriteFarmers: [],
      agree_to_legal: boolean,
      agree_to_privacy_policy: boolean,
      createdAt: string,
      updatedAt: string,

      first_name: string,
      last_name: string,
      farm_name: string,
      farm_about: string,
      address_street: string,
      address_road: string,
      address_city: string,
      address_state: string,
      address_zip: string,
      phone: string,
      website: string,
      facebook: string,
      instagram: string,
      products: [Product],
      latitude: string,
      longitude: string,
      distance: number,
      geometry: object,
      image: {
        name: string,
        size: number,
        key: string,
        serverData: object,
        url: string,
        appUrl: string,
        customId: string,
        type: string,
      },
      filters: Filters,

      __v: number,
      resetPasswordToken: string,
      resetPasswordTokenExpirationDate: Date
    };
  }

  interface User extends DefaultUser {
    username: string; // the user will now have the property
    _id: string;
    email: string;
    password: string;
    isFarmer: boolean,
    favoriteFarmers: [],
    agree_to_legal: boolean,
    agree_to_privacy_policy: boolean,

    first_name: string,
    last_name: string,
    farm_name: string,
    farm_about: string,
    address_road: string,
    address_street: string,
    address_city: string,
    address_state: string,
    address_zip: string,
    phone: string,
    website: string,
    facebook: string,
    instagram: string,
    products: [Product],
    latitude: string,
    longitude: string,
    distance: number,
    geometry: object,
    image: {
      name: string,
      size: number,
      key: string,
      serverData: object,
      url: string,
      appUrl: string,
      customId: string,
      type: string,
    },
    filters: Filters,

    createdAt: string,
    updatedAt: string,
    __v: number,
    resetPasswordToken: string,
    resetPasswordTokenExpirationDate: Date
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    username: string; // also my jwt will have the property, I can access this property within the JWT using the getToken() helper
    _id: string;
    email: string;
    password: string;
    isFarmer: boolean,
    favoriteFarmers: [],
    agree_to_legal: boolean,
    agree_to_privacy_policy: boolean,

    first_name: string,
    last_name: string,
    farm_name: string,
    farm_about: string,
    address_road: string,
    address_street: string,
    address_city: string,
    address_state: string,
    address_zip: string,
    phone: string,
    website: string,
    facebook: string,
    instagram: string,
    products: [Product],
    latitude: string,
    longitude: string,
    distance: number,
    geometry: object,
    image: {
      name: string,
      size: number,
      key: string,
      serverData: object,
      url: string,
      appUrl: string,
      customId: string,
      type: string,
    },
    filters: object,
    
    createdAt: string,
    updatedAt: string,
    __v: number,
    resetPasswordToken: string,
    resetPasswordTokenExpirationDate: Date
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    credentials({
      name: "Credentials",
      id: "credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connectDB();
        const user = await Group.findOne({
          email: credentials?.email,
        }).select("+password");

        if (!user) throw new Error("Wrong Credentials");
        const passwordMatch = await bcrypt.compare(
          credentials!.password,
          user.password
        );

        if (!passwordMatch) throw new Error("Wrong Credentials");
        return user;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async session({ session }) {
      const userData = await Group.findOne({ email: session.user?.email });

      return {
        ...session,
        user: {
          ...userData._doc,
        }
      };
    },
    async jwt({ token }) {
      return token
    }
  },
};