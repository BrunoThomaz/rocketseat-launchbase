module.exports = {
    age: (timestamp) => {
            let now = new Date()
            let birth = new Date(timestamp)
          
            let idade = now.getFullYear() - birth.getFullYear()
            if (now.getMonth() < birth.getMonth() ||  ( now.getMonth() == birth.getMonth() && now.getDate() < birth.getDate() ) ) {
                idade--
            }
            return idade
        },
    dateBirth: (timestamp)=>{
        let date = new Date(timestamp)
        let year = date.getUTCFullYear()
        let month = ("0" + (date.getUTCMonth() + 1)).slice(-2)
        let day = ("0" + date.getUTCDate()).slice(-2)
        return `${year}-${month}-${day}`
        }
}