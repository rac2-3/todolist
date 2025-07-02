
module.exports.getData=()=>
{
    let today = new Date()
    let options = {
        weekday: 'long',
        month: 'long', 
        day: 'numeric'
    }
    return today.toLocaleDateString('en-US',options)
}