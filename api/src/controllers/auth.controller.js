

export async function register(req, res, next) {
  try {
    const { firstName, lastName, email } = req.body
  } catch (error) {
    console.log(error)
  }
}


export async function login(req, res, next) {
  res.send('login')
}