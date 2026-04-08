import { createUserFromGoogle, findUserByEmail } from "../services/auth.service.js"


const authController = {
  handleSignIn: async ({ user, account }) => {
    try {
      if (account.provider === 'google') {
        const existingUser = await findUserByEmail(user.email)

        if (!existingUser) { // ถ้าไม่เจอให้สร้างใหม่
          const nameParts = user.name ? user.name.split(' ') : ['', '']
          await createUserFromGoogle({
            email: user.email,
            firstName: nameParts[0],
            lastName: nameParts.slice(1).join(' '),
            profileImg: user.image
          })
        }
      }
      return true
    } catch (error) {
      console.error("Auth Error:", error)
      return false
    }
  }
}

export default authController