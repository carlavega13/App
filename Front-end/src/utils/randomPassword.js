const randomPassword=()=>{
  
    let randomPart = Array(4) 
        .fill(null)
        .map(() => Math.random().toString(36).charAt(2))
        .join('');

    const uppercaseLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    const number = Math.floor(Math.random() * 10);


    const password = uppercaseLetter + randomPart + number;

    return password;
}
export default randomPassword;