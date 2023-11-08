module.exports = (sequelize, Sequelize) => {
    return sequelize.define("task", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.STRING
        },
        longDescription: {
            type: Sequelize.STRING
        },
        status: {
            type: Sequelize.STRING
        },
        priority: {
            type: Sequelize.STRING
        },
        username: {
            type: Sequelize.STRING
        }
    });
};
