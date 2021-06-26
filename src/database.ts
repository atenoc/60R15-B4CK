import { connect } from 'mongoose';

export async function startConnectionDB(){
    await connect('mongodb://localhost/goris_db',{
        useNewUrlParser: true,
        useFindAndModify: false
    })

    console.log('Goris Database conected');
}

