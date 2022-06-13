
const login = async (req, res) => {
    res.send('Fake Login/Reg/SignUp Route')
}

const dashboard = async (req, res) => {
    const luckyNumber = Math.floor(Math.random() * 100)
    res.status(200).json({ msg: `Hello, Jhon Doe`, secret: `lucky number ${luckyNumber}`})
}

