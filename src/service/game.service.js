const GameModel = require('../model/game.model');

const createOne = (input, callback) => { 
  const ins = new GameModel(input)
  ins.save(callback)
};

const findOne = (input, callback) => { 
    GameModel.findOne(input, callback)
}

const updateOne = (query, input, callback) => {
    GameModel.findOneAndUpdate(query, input, callback)
}

const deleteOne = (query,callback) => {
    GameModel.findOneAndUpdate(query, {isDeleted: true}, callback)
}

const findAll = (query,callback) => {
    return GameModel.find(query,callback)
}

module.exports = {
    createOne,
    findOne,
    deleteOne,
    findAll,
    updateOne
};
