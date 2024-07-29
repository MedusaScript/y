process.env.NODE_TLS_REJECT_UNAUTHORIZED = 1;
noti_key = "Medusa"
console.log("LOADING 1%");
console.log("LOADING 2%");
console.log("LOADING 3%");
console.log("LOADING 4%");
console.log("LOADING 5%");
console.log("LOADING 6%");
console.log("LOADING 7%");
console.log("LOADING 8%");
console.log("LOADING 9%");
console.log("LOADING 10%");
console.log("LOADING 20%");
console.log("LOADING 25%");
console.log("LOADING 30%");
console.log("LOADING 40%");
console.log("LOADING 50%");
console.log("LOADING 60%");
console.log("LOADING 70%");
console.log("LOADING 80%");
console.log("LOADING 90%");
console.log("LOADING 99%");
console.log("LOADING 100%");
console.log("Medusa Script \nJoinDiscord: https://discord.gg/medusa-script-1182005198206545941");
name_server = " Brutality Hub "; 
invite_discord = "https://discord.gg/medusa-script-1182005198206545941"; 
concac = "lon"
ping_role_id = {
  boss: "-",
  sword: "-",
  mirage: "-",
  kitsune: "-",
  haki: {
    normal: "-",
    legend: "-"
  },
  fullmoon: "-",
  fruit_drop: "-",
  near: "-",
},
noti_config = {
  random_anime_picture: false ,
  boss: true,
  sword: true,
  mirage: true,
  kitsune: true,
  haki: {
    normal: true,
    legend: true,
  },
  fullmoon: true,
  fruit_drop: true,
  king_legacy: true,
  near: true,
};

// req: turn on for edit webhook or no = error
webhook_config = {
  boss: "https://discord.com/api/webhooks/1266466470548996161/18BzUV7lTuQ8JyDFVViGFo6t0VvN-PhN1orv-DPtWaJy4mhTAZiWPiNh4lcBmhksmHVv",
  sword: "https://discord.com/api/webhooks/1266466453331251290/q3-M_NpH9So5tmOY6whbzNCIaRHVTDrKDMeovYee_xrE6Ud5mU7gUZbIXFSb3q6G3i5z",
  mirage: "https://discord.com/api/webhooks/1266466442069413959/ttUgfFaFV9duBtp5wbqJ8AygvqQaIeWlq-ksFTRB3Pq6o0LpUOcS8hUMvvgpKWZ85Uh5",
  kitsune: "https://discord.com/api/webhooks/1266466482867671162/aAddkrYIGUfX32O0GCdXI2tTIQ3HVLkMhzonBwUpgpgkIrEzdRoT7vRDhA5iA7U4bw21",
  haki: {
    normal: "https://discord.com/api/webhooks/1266466459119255705/ndiIkn1CFmY5dNgvBy31nTj5qsLQmscoIQLLIRQ13G2JM3U3CGFYjm1cSschj5G8Fxv9",
    legend: "https://discord.com/api/webhooks/1266466464399884402/qr9ZFjg6LE8HMQkpVX3_S62N3IaptEPC4gd3Xw6dycdSRtnw8F2mdTvlqeLDeCBbTuYe",
  },
  fullmoon: "https://discord.com/api/webhooks/1266466493579657227/0LZbLvpVw34l6oljpjRC7OKiqGQDmisYlitf3kKe9_UDO-h4NnZdCDvX7TgHil1Kfs0L",
  fruit_drop: "https://discord.com/api/webhooks/1266466476458512566/ZxhQX4kND_rXUQZSYRhzWVd51b-yctO6vtnCd_Fj00qoxq2v35c58ZaUyGki0bYmB5_e",
  king_legacy: "https://discord.com/api/webhooks/1266466488643223723/LD2TZ965zJ9zDTkRD7Q7GD9xKtVDUbwsWzemtVa2FSZR4WwtxmdxTEeOrsNqWYcbTFD3",
  near: "https://discord.com/api/webhooks/1266671688658190416/_IpldSFzzx2iiwfnUYRPVfk0YRav10gWD-2_ItRMsBOInprUfe_6UgtkHtJuB36-1ONe",
};

//TOKEN DISINI

const token = "MTI1MDQ3NTg5ODMwMjM2OTg4NA.GR7tKb.7vsGa9hr7O6rOxrQNCL3fvvKIw9SmPYmpZX2zQ"

try {
  require.resolve("discord.js-selfbot-v13");
} catch (e) {
  console.log("Please run: `npm install discord.js-selfbot-v13");
  process.exit(0);
}

try {
  require.resolve("discord.js");
} catch (e) {
  console.log("Please run: `npm install discord.js");
  process.exit(0);
}

try {
  require.resolve("axios");
} catch (e) {
  console.log("Please run: `npm install axios");
  process.exit(0);
}

const { Client, Intents } = require("discord.js-selfbot-v13");
const { WebhookClient, EmbedBuilder } = require("discord.js");
const client = new Client({
  intents: new Intents(7796),
  partials: [
    "USER",
    "CHANNEL",
    "GUILD_MEMBER",
    "MESSAGE",
    "REACTION",
    "GUILD_SCHEDULED_EVENT",
  ],
  checkUpdate: true,
});

const anime = async function (e) {
  e = e.toJSON();
  if (!noti_config.random_anime_picture) {
    return e;
  }
  const { data: anime } = await require("axios").get(
    "https://api.waifu.pics/sfw/cry",

  );
  e.content = noti_config.content;
  e.image = { url: anime.url };
  return e;
};

// dont edit some here ... pls
const ownerID = "949574208466325574"; // ignore = error
avtOwner = "https://cdn.discordapp.com/attachments/1253030557529673758/1263586155308257280/2e.gif?ex=66a2060f&is=66a0b48f&hm=fb45feccb78c8d955208c120bed6bdcb783467c72023ff912f230b7bb48d9839&";
nameOwner1 = "Brutality Hub.";
nameOwner = "Brutality Hub.";
image = "https://cdn.discordapp.com/attachments/1253030557529673758/1264202593350189076/standard_1.gif?ex=66a63e6a&is=66a4ecea&hm=8c36af105f2b10a3546ead2e4c5c1e7d92caa80fbf05ed8cdb9f6433379719c4&";
client.on("ready", async () => {
console.log(`Kode dibuat oleh: Medusa`);
console.log(`Successfully: kode mulai dijalankan`);
  client.user.setStatus("invisible");
  namenameOwner1 = client.users.cache.get(ownerID);
});

client.on("messageCreate", async (message) => {
  const channel = message.channelId;
  if (channel == "1232834774088024175" && noti_config.boss) {
    // boss infinite
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.boss });
    webhook.send({
      content: ping_role_id.boss,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Boss Spawn" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[👺] __Boss Name:__**", value: data[0].value.replace("True Form", ""),},
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Copy Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
  } else if (channel == "1258384147467210843" && noti_config.boss) {
    // boss royx
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.boss });
    webhook.send({
      content: ping_role_id.boss,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Boss Spawn" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[👺] __Boss Name:__**", value: data[0].value.replace("True Form", ""),},
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
  } else if (channel == "1258384147467210843" && noti_config.boss) {
    // boss grayx
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.boss });
    webhook.send({
      content: ping_role_id.boss,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Boss Spawn" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[👺] __Boss Name:__**", value: data[0].value.replace("True Form", ""),},
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🔗] __Job ID:__**", value: data[2].value },
              { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
      } else if (channel == "1175226540766810132" && noti_config.boss) {
        // boss skays
        const data = message.embeds[0].fields;
        const webhook = new WebhookClient({ url: webhook_config.boss });
        webhook.send({
          content: ping_role_id.boss,
          embeds: [
            await anime(
              new EmbedBuilder()
                .setTitle(" Boss Spawn" + name_server,)
                .setURL(invite_discord)
                .addFields(
                  { name: "**[👺] __Boss Name:__**", value: data[0].value.replace("True Form", ""),},
                  { name: "**[🌊] __In Sea:__**", value: data[1].value },
                  { name: "**[👤] __Players In Server:__**", value: data[2].value },
                  { name: "**[🌎] __Job ID:__**", value: data[3].value },
                  { name: "**[📜] __Script Join:__**", value: data[3].value },
                )
                .setThumbnail(`${avtOwner}`)
                .setImage(`${image}`)
                .setTimestamp(Date.now())
                .setColor("00FF00")
                .setFooter({
                  text: `Created By: @${nameOwner}`,
                  iconURL: avtOwner,
                }),
            ),
          ],
        });
} else if (channel == "1178548674050146334" && noti_config.sword) {
    // sword infinite
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.sword });
    webhook.send({
      content: ping_role_id.sword,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Sword Legend" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[⚔️] __Sword Name:__**", value: data[0].value },
              { name: "**[👤] __Players In Server:__**", value: data[2].value },
              { name: "**[🌎] __Job ID:__**", value: data[3].value },
              { name: "**[🔗] __Script Join:__**", value: data[4].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
  } else if (channel == "1190876054026457148" && noti_config.sword) {
    //sword infinite2
        const data = message.embeds[0].fields;
        const join = data[3].value;
        const webhook = new WebhookClient({ url: webhook_config.sword });
        webhook.send({
          content: ping_role_id.sword,
          embeds: [
            await anime(
              new EmbedBuilder()
                .setTitle(" Sword Legend" + name_server,)
                .setURL(invite_discord)
                .addFields(
                  { name: "**[⚔️] __Sword Name:__**", value: data[2].value },
                  { name: "**[👤] __Players In Server:__**", value: data[0].value },
                  { name: "**[🌊] __In Sea:__**", value: data[1].value },
                  { name: "**[🌎] __Job ID:__**", value: data[3].value },
                  { name: "**[🔗] __Script Join:__**", value: data[4].value },
              )
                .setThumbnail(`${avtOwner}`)
                .setImage(`${image}`)
                .setTimestamp(Date.now())
                .setColor("00FF00")
                .setFooter({
                  text: `Created By: @${nameOwner}`,
                  iconURL: avtOwner,
                }),
            ),
          ],
        });
    } else if (channel == "1172884489777729619" && noti_config.sword) {
      //sword skays
          const data = message.embeds[0].fields;
          const webhook = new WebhookClient({ url: webhook_config.sword });
          webhook.send({
            content: ping_role_id.sword,
            embeds: [
              await anime(
                new EmbedBuilder()
                  .setTitle(" Sword Legend" + name_server,)
                  .setURL(invite_discord)
                  .addFields(
                    { name: "**[⚔️] __Sword Name:__**", value: data[0].value },
                    { name: "**[👤] __Players In Server:__**", value: data[1].value },
                    { name: "**[🌎] __Job ID:__**", value: data[2].value },
                    { name: "**[🔗] __Script Join:__**", value: data[3].value },
                  )
                  .setThumbnail(`${avtOwner}`)
                  .setImage(`${image}`)
                  .setTimestamp(Date.now())
                  .setColor("00FF00")
                  .setFooter({
                    text: `Created By: @${nameOwner}`,
                    iconURL: avtOwner,
                  }),
              ),
            ],
          });
  } else if (channel == "1190876089061478431" && noti_config.mirage) {
    // mirage infinite
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Mirage Island" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🏝️] __Mirage Spawn:__**", value: `\`\`\`✅\`\`\`` },
              { name: "**[⏳] __Server Time:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[2].value },
              { name: "**[🔗] __Job ID:__**", value: data[3].value },
              { name: "**[📜] __Script Join:__**", value: data[4].value},
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    } else if (channel == "1178548674050146334" && noti_config.mirage) {
      // mirage infinite
      const data = message.embeds[0].fields;
      const webhook = new WebhookClient({ url: webhook_config.mirage });
      webhook.send({
        content: ping_role_id.mirage,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(" Mirage Island" + name_server,)
              .setURL(invite_discord)
              .addFields(
                { name: "**[🏝️] __Mirage Spawn:__**", value: `\`\`\`✅\`\`\`` },
                { name: "**[⏳] __Server Time:__**", value: data[1].value },
                { name: "**[👤] __Players In Server:__**", value: data[2].value },
                { name: "**[🔗] __Job ID:__**", value: data[3].value },
                { name: "**[📜] __Script Join:__**", value: data[4].value},
              )
              .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
  } else if (channel == "1258381326646509649" && noti_config.mirage) {
    // mirage royx
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
    webhook.send({
      content: ping_role_id.mirage,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Mirage Island" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🏝️] __Mirage Spawn:__**", value: `\`\`\`✅\`\`\`` },
              { name: "**[⏳] __Server Time:__**", value: data[1].value },
              { name: "**[👤] __Players In Server:__**", value: data[2].value },
              { name: "**[🔗] __Job ID:__**", value: data[3].value },
              { name: "**[📜] __Script Join:__**", value: data[47].value},
            )

             .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    })
} else if (channel == "1190876089061478431" && noti_config.mirage) {
      // mirage infinite
const data = message.embeds[0].fields;
const webhook = new WebhookClient({ url: webhook_config.mirage });
      webhook.send({
        content: ping_role_id.mirage,
        embeds: [
          await anime(
            new EmbedBuilder()
          .setTitle(" Mirage Island" + name_server,)
          .setURL(invite_discord)
          .addFields(
                { name: "**[🏝️] __Mirage Spawn:__**", value: `\`\`\`✅\`\`\`` },
                { name: "**[⏳] __Server Time:__**", value: data[1].value },
                { name: "**[👤] __Players In Server:__**", value: data[2].value },
                { name: "**[🔗] __Job ID:__**", value: data[3].value },
                { name: "**[📜] __Script Join:__**", value: data[4].value},
              )

          .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
          }),
      ),
    ],
});
    } else if (channel == "1181816146975019088" && noti_config.mirage) {
      // mirage hn
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.mirage });
      webhook.send({
        content: ping_role_id.mirage,
        embeds: [
          await anime(
            new EmbedBuilder()
          .setTitle(" Mirage Island" + name_server,)
          .setURL(invite_discord)
          .addFields(
                { name: "**[🏝️] __Mirage Spawn:__**", value: `\`\`\`✅\`\`\`` },
                { name: "**[⏳] __Server Time:__**", value: data[2].value },
                { name: "**[👤] __Players In Server:__**", value: data[1].value },
                { name: "**[🔗] __Job ID:__**", value: data[3].value },
                { name: "**[📜] __Script Join:__**", value: data[4].value},
              )

          .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
          }),
      ),
    ],
    });
  } else if (channel == "1190874818510323722" && noti_config.haki.legend) {
    // haki legendary infinite
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.legend });
    webhook.send({
      content: ping_role_id.haki.legend,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Haki Legendary" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🌈] __Color Haki:__**", value: data[0].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🌎] __Job ID:__**", value: data[2].value },
              { name: "**[🔗] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    } else if (channel == "1229752149479784499" && noti_config.haki.legend) {
      // haki legendary coka hub
      const data = message.embeds[0].fields;
      const join = data[5].value;
      const webhook = new WebhookClient({ url: webhook_config.haki.legend });
      webhook.send({
        content: ping_role_id.haki.legend,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(" Haki Legendary" + name_server,)
              .setURL(invite_discord)
              .addFields(
                { name: "**[🌈] __Color Haki:__**", value: data[2].value },
                { name: "**[👤] __In Sea:__**", value: data[1].value },
                { name: "**[👤] __Players In Server:__**", value: data[0].value },
                { name: "**[🌎] __Job ID:__**", value: data[5].value },
                { name: "**[🔗] __Script Join:__**", value: `game:GetService("ReplicatedStorage").__ServerBrowser:InvokeServer("teleport", "${join}")`.replace("```", "").replace("```", "") },
              )
              .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
    } else if (channel == "1075657172358266951" && noti_config.haki.legend) {
      // haki legendary cokka2
      const data = message.embeds[0].fields;
      const webhook = new WebhookClient({ url: webhook_config.haki.legend });
      webhook.send({
        content: ping_role_id.haki.legend,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(" Haki Legendary" + name_server,)
              .setURL(invite_discord)
              .addFields(
                { name: "**[🌈] __Color Haki:__**", value: data[0].value },
                { name: "**[👤] __Players In Server:__**", value: data[1].value },
                { name: "**[🌎] __Job ID:__**", value: data[2].value },
                { name: "**[🔗] __Script Join:__**", value: data[3].value },
              )
              .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
  } else if (channel == "1172884322357874690" && noti_config.haki.legend) {
    // haki legendary skays
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.haki.legend });
    webhook.send({
      content: ping_role_id.haki.legend,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(" Haki Legendary" + name_server,)
            .setURL(invite_discord)
            .addFields(
              { name: "**[🌈] __Color Haki:__**", value: data[0].value },
              { name: "**[👤] __Players In Server:__**", value: data[1].value },
              { name: "**[🌎] __Job ID:__**", value: data[2].value },
              { name: "**[🔗] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    } else if (channel == "1258381516510068736" && noti_config.haki.legend) {
      // haki normal grayx
      const data = message.embeds[0].fields;
      const webhook = new WebhookClient({ url: webhook_config.haki.normal });
      webhook.send({
        content: ping_role_id.haki.legend,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(" Haki Normal" + name_server,)
              .setURL(invite_discord)
              .addFields(
                { name: "**[🌈] __Color Haki:__**", value: data[0].value },
                { name: "**[👤] __Players In Server:__**", value: data[1].value },
                { name: "**[🌎] __Job ID:__**", value: data[2].value },
                { name: "**[🔗] __Script Join:__**", value: data[3].value },
              )
              .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
    } else if (channel == "1055457822818709596" && noti_config.haki.legend) {
      // haki normal hn
      const data = message.embeds[0].fields;
      const webhook = new WebhookClient({ url: webhook_config.haki.normal });
      webhook.send({
        content: ping_role_id.haki.legend,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(" Haki Normal" + name_server,)
              .setURL(invite_discord)
              .addFields(
                { name: "**[🌈] __Color Haki:__**", value: data[0].value },
                { name: "**[🌊] __In Sea:__**", value: data[1].value}, 
                { name: "**[👤] __Players In Server:__**", value: data[2].value },
                { name: "**[🌎] __Job ID:__**", value: data[3].value },
                { name: "**[🔗] __Script Join:__**", value: data[4].value },
              )
              .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
    } else if (channel == "1126872521946443850" && noti_config.haki.legend) {
      // haki normal coka hub
      const data = message.embeds[0].fields;
      const join = data[5].value;
      const webhook = new WebhookClient({ url: webhook_config.haki.normal });
      webhook.send({
        content: ping_role_id.haki.legend,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(" Haki Legendary" + name_server,)
              .setURL(invite_discord)
              .addFields(
                { name: "**[🌈] __Color Haki:__**", value: data[2].value },
                { name: "**[👤] __In Sea:__**", value: data[1].value },
                { name: "**[👤] __Players In Server:__**", value: data[0].value },
                { name: "**[🌎] __Job ID:__**", value: data[5].value },
                { name: "**[🔗] __Script Join:__**", value: `game:GetService("ReplicatedStorage").__ServerBrowser:InvokeServer("teleport", "${join}")`.replace("```", "").replace("```", "") },
              )
              .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
  } else if (channel == "1055457822818709596" && noti_config.fullmoon) {
    // full moon skays1
    const data = message.embeds[0].fields;
    const join = data[4].value;
    const webhook = new WebhookClient({ url: webhook_config.fullmoon });
    webhook.send({
      content: ping_role_id.fullmoon,
      embeds: [
        await anime(
          new EmbedBuilder()
            .setTitle(
                " Full Moon" +
                name_server,
            )
            .setURL(invite_discord)
            .addFields(
              { name: "**[⏳] __Time Remaining:__**", value: data[0].value },
              { name: "**[👤] __Player Count:__**", value: data[1].value },
              { name: "**[🔗] __Script Join:__**", value: data[2].value },
              )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({
              text: `Created By: @${nameOwner}`,
              iconURL: avtOwner,
            }),
        ),
      ],
    });
    } else if (channel == "1172884193001345175" && noti_config.fullmoon) {
      // full moon skays2
      const data = message.embeds[0].fields;
      const webhook = new WebhookClient({ url: webhook_config.fullmoon });
      webhook.send({
        content: ping_role_id.fullmoon,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle(
                  " Full Moon" +
                  name_server,
              )
              .setURL(invite_discord)
              .addFields(
              { name: "**[⏳] __Time Remaining:__**", value: data[0].value },
              { name: "**[👤] __Player Count:__**", value: data[1].value },
              { name: "**[🔗] __Script Join:__**", value: data[2].value },
                )
                .setThumbnail(`${avtOwner}`)
              .setImage(`${image}`)
              .setTimestamp(Date.now())
              .setColor("00FF00")
              .setFooter({
                text: `Created By: @${nameOwner}`,
                iconURL: avtOwner,
              }),
          ),
        ],
      });
  } else if (channel == "1228897152432869416" && noti_config.fruit_drop) { 
    // fruit infinite
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.fruit_drop });
  webhook.send({
    content: ping_role_id.fruit_drop,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🥝] - __Fruit Name :__**", value: data[0].value },
            { name: "**[👥] - __Players In Server :__**", value: data[1].value },
            { name: "**[🔗] - __Job ID :__**", value: data[2].value },
            { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
      ),
    ],
  });
} else if (channel == "1258381943125442570" && noti_config.fruit_drop) {
  // fruit drop grayx
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.fullmoon });
  webhook.send({
    content: ping_role_id.fruit_drop,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle( " Fruit Drop " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🥝] - __Fruit Name :__**", value: data[0].value },
            { name: "**[👥] - __Players In Server :__**", value: data[1].value },
            { name: "**[🔗] - __Job ID :__**", value: data[2].value },
            { name: "**[📜] __Script Join:__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
      ),
    ],
  });
} else if (channel == "1225459275103600671" && noti_config.king_legacy) {
  // king legacy infinite
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.king_legacy });
  webhook.send({
    content:  ping_role_id.king_legacy,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle("ɴᴏᴛɪғʏ ʙᴏss ᴋɪɴɢ ʟᴇɢᴀᴄʏ - Medusa Script", )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🐯] - __Boss Name :__**", value: data[2].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[⏳] - __Server Time :__**", value: data[0].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[👥] - __Players In Server :__**", value: data[1].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[🔗] - __Job ID :__**", value: data[3].value.replace("```yaml\n", "```").replace("\n```", "```") },
            { name: "**[📋] - __Script Join :__**", value: data[4].value },
          )
            .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
      ),
    ],
  });
} else if (channel == "1258382325792772106" && noti_config.king_legacy) {
      // king legacy grayx
const data = message.embeds[0].fields;
const webhook = new WebhookClient({ url: webhook_config.king_legacy });
     webhook.send({
     content:  ping_role_id.king_legacy,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle("ɴᴏᴛɪғʏ ʙᴏss ᴋɪɴɢ ʟᴇɢᴀᴄʏ - Medusa Script", )
            .setURL(invite_discord)
            .addFields(
                { name: "**[🐯] - __Boss Name :__**", value: data[0].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[⏳] - __Server Time :__**", value: data[1].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[👥] - __Players In Server :__**", value: data[2].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[🔗] - __Job ID :__**", value: data[3].value }, 
                { name: "**[📋] - __Script Join :__**", value: data[4].value },
            )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
          ),
        ],
      });
    } else if (channel == "1255494727101583401" && noti_config.king_legacy) {
      // king legacy skays
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.king_legacy });
     webhook.send({
     content:  ping_role_id.king_legacy,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle("ɴᴏᴛɪғʏ ʙᴏss ᴋɪɴɢ ʟᴇɢᴀᴄʏ - Medusa Script", )
            .setURL(invite_discord)
            .addFields(
                { name: "**[🐯] - __Boss Name :__**", value: data[0].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[⏳] - __Server Time :__**", value: data[1].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[👥] - __Players In Server :__**", value: data[2].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[🔗] - __Job ID :__**", value: data[3].value }, 
                { name: "**[📋] - __Script Join :__**", value: data[4].value },
              )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
          ),
        ],
      });
    } else if (channel == "1258382325792772106" && noti_config.king_legacy) {
      // king legacy grayx
    const data = message.embeds[0].fields;
    const webhook = new WebhookClient({ url: webhook_config.king_legacy });
     webhook.send({
     content:  ping_role_id.king_legacy,
        embeds: [
          await anime(
            new EmbedBuilder()
              .setTitle("ɴᴏᴛɪғʏ ʙᴏss ᴋɪɴɢ ʟᴇɢᴀᴄʏ - Medusa Script", )
            .setURL(invite_discord)
            .addFields(
                { name: "**[🐯] - __Boss Name :__**", value: data[0].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[⏳] - __Server Time :__**", value: data[1].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[👥] - __Players In Server :__**", value: data[2].value.replace("```yaml\n", "```").replace("\n```", "```") },
                { name: "**[🔗] - __Job ID :__**", value: data[3].value }, 
                { name: "**[📋] - __Script Join :__**", value: data[4].value },
              )
            .setThumbnail(`${avtOwner}`)
            .setImage(`${image}`)
            .setTimestamp(Date.now())
            .setColor("00FF00")
            .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
          ),
        ],
      });
}else if (channel == "1208655936344825887" && noti_config.kitsune) {
  // kitsune infinite
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.kitsune });
  webhook.send({
    content: ping_role_id.kitsune,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(" Kitsune Spawn " + name_server, )
          .setURL(invite_discord)
          .addFields(
            { name: "**[🦊] __Kitsune Island:__**", value: `\`\`\`✅\`\`\`` },
            { name: "**[👥] - __Players In Server :__**", value: data[1].value },
            { name: "**[🔗] - __Job ID :__**", value: data[2].value },
            { name: "**[📋] - __Script Join :__**", value: data[3].value },
            )
            .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({ text: `Created By: @${nameOwner}`, iconURL: avtOwner, }),
      ),
    ],
  });
} else if (channel == "1208655936344825887" && noti_config.near) {
  // near moon infinite
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.near });
  webhook.send({
    content: ping_role_id.near,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(
            " Near Full Moon" +
              name_server,
          )
          .setURL(invite_discord)
          .addFields(
            { name: "**[👤] __Player Count:__**", value: data[0].value },
            { name: "**[⏳] __Time Till Full Moon:__**", value: data[1].value },
            { name: "**[👤] __Current Time:__**", value: data[2].value },
            { name: "**[🔗] __JOB-ID:__**", value: data[3].value },
            { name: "**[📋] - __Script Join :__**", value: data[4].value },
          )
          .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({
            text: `Created By: @${nameOwner}`,
            iconURL: avtOwner,
          }),
      ),
    ],
  });
} else if (channel == "1258382443204055040" && noti_config.near) {
  // near moon grayx
  const data = message.embeds[0].fields;
  const webhook = new WebhookClient({ url: webhook_config.near });
  webhook.send({
    content: ping_role_id.near,
    embeds: [
      await anime(
        new EmbedBuilder()
          .setTitle(
              " Near Full Moon" +
              name_server,
          )
          .setURL(invite_discord)
          .addFields(
            { name: "**[👤] __Player Count:__**", value: data[0].value },
            { name: "**[⏳] __Time Till Full Moon:__**", value: data[1].value },
            { name: "**[👤] __Current Time:__**", value: data[2].value },
            { name: "**[🔗] __JOB-ID:__**", value: data[3].value },
            { name: "**[📋] - __Script Join :__**", value: data[4].value },
          )
          .setThumbnail(`${avtOwner}`)
          .setImage(`${image}`)
          .setTimestamp(Date.now())
          .setColor("00FF00")
          .setFooter({
            text: `Created By: @${nameOwner}`,
            iconURL: avtOwner,
          }),
      ),
    ],
  });
}
});

client.login(token); 
