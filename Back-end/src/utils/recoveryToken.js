const recoveryToken = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    return Array.from({ length: 5 }, () => characters[Math.floor(Math.random() * characters.length)]).join('');
}
module.exports=recoveryToken