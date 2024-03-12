

const getMotobike = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Motobike: has hecho un get'
    });
}

const createMotobike = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'Motobike: has hecho un post'
    });
}


const updateMotobike = async (req, res, next) => {
    res.status(201).json({
        status: 201,
        message: 'Motobike: has hecho un patch'
    });
}


const deleteMotobike = async (req, res, next) => {
    res.status(200).json({
        status: 200,
        message: 'Motobike: has hecho un delete'
    });
}


module.exports = { getMotobike, createMotobike, updateMotobike, deleteMotobike }