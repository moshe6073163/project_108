import http  from 'http';
import readLine  from 'readline';
const cmd = readLine.createInterface(process.stdin, process.stdout);
const server = http.createServer();
import dotnev from 'dotenv';
import * as socketIo from 'socket.io';
import pressAnyKey from 'press-any-key';

dotnev.config();
const port = process.env.PORT || 5198;

const io = new socketIo.Server(server, {
    origin: '*',
    credentials: 'true'
})


async function insertData(client){
    let answers = {};
    cmd.question("Please enter Altitude \n", (ans)=>{
        answers.Altitude = ans;

        cmd.question("Please enter HIS \n", (ans)=>{
            answers.HIS = ans;

            cmd.question("Please enter ADI \n", (ans)=>{
                answers.ADI = ans;

                pressAnyKey()
                .then(() => {
                    console.log("Success sending data");
                    cmd.close();
                    if(answers.Altitude >= 0 && answers.Altitude <= 3000 &&
                       answers.HIS >= 0 && answers.HIS <= 360 &&
                       answers.ADI >= -100 && answers.ADI <= 100
                       ){
                        return client.emit('getData', answers);
                       }
                })
            })
        })

    })
}

io.on('connection', async(client)=>{

    client.on('setData', async ()=>{
        await insertData(client);
    })

    client.on('disconnect', () =>{
        console.log('User disconnected');
        client.disconnect(true);
    })
})

server.listen(port, () => {
    console.log('TCP Server is running on port ' + port +'.');
});

