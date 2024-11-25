import config from './app/config';
import mongoose from 'mongoose';
import app from './app';

async function main() {
  try {
    await mongoose.connect(config.database_url as string);

    app.listen(config.port, () => {
      console.log(`EXPLAIN APP LISTENING ON PORT${config.port}`);
    });
  } catch (error) {
    console.log(error);
  }
}
main();

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
//   })
