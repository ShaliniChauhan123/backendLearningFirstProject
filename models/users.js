module.exports=(sequelize, DataTypes)=>{
    const Users=sequelize.define('users',{
    name:{
        type: DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
        defaultValue:'test@gmail.com'
    },
    gender:{
        type:DataTypes.STRING
    }
    });
    return Users;
}