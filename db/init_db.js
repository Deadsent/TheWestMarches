// code to build and initialize DB goes here
const {
  client
  // other db methods 
} = require('./index');

async function buildTables() {
  try {
    client.connect();
    console.log("Dropping tables!");

    await client.query(`
      

      
      DROP TABLE IF EXISTS char_items;
      DROP TABLE IF EXISTS items;
      DROP TABLE IF EXISTS char_weapons;
      DROP TABLE IF EXISTS weapons;
      DROP TABLE IF EXISTS characters;
      DROP TABLE IF EXISTS users;

    `)
    console.log("Finished dropping tables!")
    // drop tables in correct order

    // build tables in correct order
    console.log("Building tables!")
    await client.query(`
      CREATE TABLE users(
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "userEmail" VARCHAR(255) UNIQUE NOT NULL,
        "isAdmin" BOOLEAN DEFAULT 'false'
      );
      CREATE TABLE character(
        id SERIAL PRIMARY KEY,
        "userId" INTEGER REFERENCES users(id) NOT NULL,
        "charName" VARCHAR(255) NOT NULL,
        "charLevel" INTEGER NOT NULL,
        "charClass" VARCHAR(255),
        "charStr" INTEGER,
        "charDex" INTEGER,
        "charCon" INTEGER,
        "charInt" INTEGER,
        "charWis" INTEGER,
        "charCha" INTEGER,
        "charConnect" SMALLINT NOT NULL DEFAULT -1,
        "charControl" SMALLINT NOT NULL DEFAULT -1,
        "charExert" SMALLINT NOT NULL DEFAULT -1,
        "charFire" SMALLINT NOT NULL DEFAULT -1,
        "charHeal" SMALLINT NOT NULL DEFAULT -1,
        "charKnow" SMALLINT NOT NULL DEFAULT -1,
        "charLabor" SMALLINT NOT NULL DEFAULT -1,
        "charLead" SMALLINT NOT NULL DEFAULT -1,
        "charMelee" SMALLINT NOT NULL DEFAULT -1,
        "charNotice" SMALLINT NOT NULL DEFAULT -1,
        "charPerform" SMALLINT NOT NULL DEFAULT -1,
        "charPunch" SMALLINT NOT NULL DEFAULT -1,
        "charSneak" SMALLINT NOT NULL DEFAULT -1,
        "charStudy" SMALLINT NOT NULL DEFAULT -1,
        "charSurvive" SMALLINT NOT NULL DEFAULT -1,
        "charTalk" SMALLINT NOT NULL DEFAULT -1,
        "charTrade" SMALLINT NOT NULL DEFAULT -1,
        "charWeave" SMALLINT NOT NULL DEFAULT -1,
        "charChaos" SMALLINT NOT NULL DEFAULT -1,
        "charDeath" SMALLINT NOT NULL DEFAULT -1,
        "charDivine" SMALLINT NOT NULL DEFAULT -1,
        "charMeta" SMALLINT NOT NULL DEFAULT -1,
        "charNature" SMALLINT NOT NULL DEFAULT -1,
        "charWill" SMALLINT NOT NULL DEFAULT -1,
        "charNotes" TEXT
      );
      CREATE TABLE weapons(
        id SERIAL PRIMARY KEY
        name VARCHAR(255) UNIQUE NOT NULL,
        damage VARCHAR(255) NOT NULL,
        shock VARCHAR(255) NOT NULL,
        attribute VARCHAR(255) NOT NULL,
        skill VARCHAR(255) NOT NULL,
        encumberance SMALLINT NOT NULL,
        cost SMALLINT NOT NULL
      );
      CREATE TABLE user_items(

      )
    `)
    console.log("Finished building tables!")
  } catch (error) {
    throw error;
  }
}

async function populateInitialData() {
  try {
    // create useful starting data
  } catch (error) {
    throw error;
  }
}

buildTables()
  .then(populateInitialData)
  .catch(console.error)
  .finally(() => client.end());