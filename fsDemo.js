   import { error } from 'console';
// import fs from 'fs';
 import fs from 'fs/promises'

//             //  readFile() - callback
// fs.readFile('./test.txt', 'utf8', (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

            // readFileSync() - Synchronous version

// const data = fs.readFileSync('./test.txt', 'utf8');
// console.log(data);

              //  readFile() - Promise.then()
// fs.readFile('./test.txt', 'utf8')
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));


                  // readFile() - async/await

// const readFile = async () => {
//   try{
//     const data = await fs.readFile('./test.txt', 'utf8');
//     console.log(data)
//   }catch(err){
//     throw new err;
//   }
// }
// readFile();


                  // writeFile();
// const writeFile = async () => {
//   try{
//     await fs.writeFile('./test.txt', "Hello, I'm writing to this File");
//     console.log('File written to...');
//     console.log(error);
//   }catch(error){
//     throw new error;
//   }
// }
// writeFile()

        // appendFile

const appendFile = async () => {
  try{
    await fs.appendFile('./test.txt', '\nThis is appended text' );
    console.log('File appended to...');
  }
  catch(error){
      throw new error
  }
}
appendFile();
