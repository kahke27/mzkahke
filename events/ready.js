module.exports = async client => {
  //youtube/NoblesYT
  console.log(`[API] Logged in as ${client.user.username}`);
  await client.user.setActivity("k!help", {
    //Oynuyor Kısmı
    type: "WATCHING" //LISTENING, WATCHING, PLAYING, STREAMING
  });
};
