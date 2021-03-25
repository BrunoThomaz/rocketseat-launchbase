module.exports = {
    age: (timestamp) => {
            let now = new Date()
            let birth = new Date(timestamp)
            
            let idade = now.getFullYear() - birth.getFullYear()
            if (now.getMonth() < birth.getMonth() ||  ( now.getMonth() == birth.getMonth() && now.getDate() < birth.getDate() ) ) {
                idade--
            }
            return idade
        }
}