

const getJetski = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Jetski: has hecho un get'
    });
}

const createJetski = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'Jetski: has hecho un post'
    });
}


const updateJetski = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'Jetski: has hecho un patch'
    });
}


const deleteJetski = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Jetski: has hecho un delete'
    });
}


module.exports = { getJetski, createJetski, updateJetski, deleteJetski }