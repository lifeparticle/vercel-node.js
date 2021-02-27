module.exports = (req, res) => {
	const { name = 'stranger' } = req.query
	res.status(200).send(`Hello, ${name}!`)
}