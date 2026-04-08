import { prisma } from '../lib/prisma.js'

export function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email }
  })
}

export function createUserFromGoogle(userData) {
  const { email, firstName, lastName, profileImg } = userData
  return prisma.user.create({
    data: {
      email: email,
      firstName: firstName,
      lastName: lastName,
      profileImg: profileImg,
      password: "OAUTH_USER",
      gender: "OTHER",
      isVerified: false
    }
  })
}