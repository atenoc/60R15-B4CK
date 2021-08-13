import { connect } from 'mongoose';

export async function startConnectionDB(){
    await connect('mongodb+srv://Gorichelas2021:M3YU0rfFskSgMQZp@cluster0.n6ic6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
    //await connect('mongodb:localhost/goris_db',{
        
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Goris Database conected');
}

