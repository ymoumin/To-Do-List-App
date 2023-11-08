module.exports = (sequelize, Sequelize) => {
    return sequelize.define("user", {
        userName: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        avatar: {
            type: Sequelize.STRING
        }
    });
};
