const { newsletterModel } = require("../models/index")

module.exports = async function (context, req) {
    const email = req.query["email"]
    if(!email){
        context.res = {
            statusCode: 400,
            body: "Bad Request"
        }
        context.done()
    }
    try{
        await newsletterModel.remove({
            email: email
        })
        context.res = {
            statusCode: 200,
            body : "Sorry to see you go..."
        }
    }catch(err){
        context.res = {
            statusCode: 500,
            body: err.message
        }
    }
}