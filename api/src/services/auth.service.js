import { prisma } from '../lib/prisma.js'

export function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: { email }
  })
}