const handler = async (req, res) => {
    const data = {"health" : "OK"}
    res.status(200).json(data);
}

export default handler()