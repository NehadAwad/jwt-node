const test = async (req, res) => {
    const { a } = req.body
    console.log(a)
    res.send('ok')
}

module.exports = test