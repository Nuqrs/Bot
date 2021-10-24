const { Client, Intents } = require('discord.js');
const { MessageEmbed } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS, Intents.FLAGS.GUILD_BANS, Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS, Intents.FLAGS.GUILD_INTEGRATIONS, Intents.FLAGS.GUILD_WEBHOOKS, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_INVITES, Intents.FLAGS.GUILD_VOICE_STATES, Intents.FLAGS.GUILD_PRESENCES, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.DIRECT_MESSAGES, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_TYPING],
  partials: ["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});

client.on('ready', () => {
	client.user.setPresence({ activities: [{ name: "Your Party Die", type: "WATCHING" }], status: "dnd" })
});

client.on('guildMemberAdd', member => {
	try{
		let memberlist = ',' + member.guild.members.cache.map(m=>m.displayName).join(',') + ',';
		const welcomeEmbed = new MessageEmbed();
		welcomeEmbed.setColor('RANDOM');
		welcomeEmbed.setDescription("OH HELLOOOOOOOOO! <@" + member.user + "> has joined the Ascendancy campaign server.");
		member.guild.channels.cache.find(i => i.name === 'off-topic').send({ embeds: [welcomeEmbed] });
		member.send('Welcome to Broken Covenant. \nDo not be Tiefling scum. \n \nJust kidding... we do not have prejudice here...');
	}
	catch(error){
		member.guild.channels.cache.find(i => i.name === 'dm-rolls').send(`I almost crashed. Fix your shit. \nError code: ADD`);
	}
});

client.on('guildMemberRemove', member => {
	try{
		const leaveEmbed = new MessageEmbed();
		leaveEmbed.setColor('RANDOM');
		leaveEmbed.setDescription(member.user.tag + " has left the server. Tiefling scum.");
		member.guild.channels.cache.find(i => i.name === 'off-topic').send({ embeds: [leaveEmbed] });
	}
	catch(error){
		member.guild.channels.cache.find(i => i.name === 'dm-rolls').send(`I almost crashed. Fix your shit. \nError code: REMOVE`);
	}
});

client.on('messageCreate', (message) => {
	try{
		const msg = message.content.toLowerCase();
/*	
		if(message.author.id == '216628403921485824') {
			message.delete();
		}
*/	
		if (message.author == client.user)
			return;
		
		if (msg == '?help') {
			if (message.channel.type != 'DM') {
				message.delete();
				message.channel.send('In order to roll, type **?roll [sides of dice] [modifier]** or **?r [sides of dice] [modifier]**.');
			} else {
				message.channel.send('In order to roll, type **?roll [sides of dice] [modifier]** or **?r [sides of dice] [modifier]**.');
			}
		}
		
/*
		if(msg == '!!!ping') {
			setTimeout(function(){ 
			message.channel.send('!!!pong'); 
			}, 3000);
		}
*/
		
		if (msg == 'jaleed, who made you?') {
			if (message.channel.type != 'DM') {
				message.channel.send('<@!216628403921485824>');
			} else {
				message.channel.send('<@!216628403921485824>');
			}
		}
	
		if (msg == '?ping') {
			if (message.channel.type != 'DM') {
				message.delete();
				message.channel.send('Pong, bitch!');
			} else {
				message.channel.send('Pong, bitch!');
			}
		}
		
		const args = message.content.trim().split(/ +/g);
		const command = args.shift().toLowerCase();
		
		if (msg.toString().indexOf(" tiefling ")!=-1 || msg.toString().indexOf("tiefling ")!=-1 || msg.toString().indexOf(" tiefling")!=-1 || msg === 'tiefling') {
			
			message.channel.send('Tiefling scum!\n\nI mean- no problem, no problem...');
			//message.channel.send({files: ["https://media.giphy.com/media/icDAoPu619Jahmhoai/giphy.gif"]});
		}
		
		if (command === "?how") {
			let a = args[0];
			let b = args[1];
			let name = args[2];
			
			var list = [
				'1, Not Actually Dumb',
				'2, Not the Brightest Dude on the Block',
				'3, Pretty Goddamn Stupid',
				'4, Incompetent Fool',
				'5, Born and Raised in Texas',
				'6, Invested in Cryptocurrency',
				'7, Cannot Tell the Difference Between Tomatoes and Dildos',
				'8, Believes America is a Meritocracy',
				'9, Considers Nuqrs a Good DM - LMAO',
				'10, Thinks a 14-Year-Old D&D Character is a Good Idea'
			];
		
			var rand = Math.floor(Math.random() * list.length);
			
			if (a === 'dumb' && b === 'is') {
				if (name!='nuqrs') {
					message.channel.send(`On a scale of 1-10, ${name} has received a dumbass score of **` + list[rand].toString() + `**.`);
				} else {
					message.channel.send(`On a scale of 1-10, ${name} has received a dumbass score of **` + list[0].toString() + `**.`);
				}
			} else {
			}
		}
		
		if (command === "jaleed") {
			
			var list = [
				'OH HELLO!',
				'OH HELLOOO?',
				'OH HELLOOOOOO?!',
				'OH HELLOOOOOOOOO???',
				'OH HELLOOOOOOOOOOOOOOOOOO!!!',
				'Welcome to my shop, the Enamored Fish! Oh!',
				'How goes the day, friend?',
				'What a beautiful day! Huh, what do you want?',
				'Ooooh, greetings, fair maiden.',
				'OH! My back- OOOOH... anyway, you need something?'
			];
			
			var rand = Math.floor(Math.random() * list.length);
			
			message.channel.send(list[rand].toString());
		}
		
		if (command === "?roll" || command === "?r") {
			var a = parseInt(args[0],10);
			var b = parseInt(args[1],10);
			let c = message.author;
			if (Number.isNaN(+a)) {
				message.reply(`No rigged dice here! Get out of here with your exotic infernal dice!`);
			} else {
				if (Number.isNaN(+b)) {
					if (a === 0) {
						message.reply(`OH NO! You rolled a d0! The universe is imploding! MY SHOP!`);
					} else {
						if (a > 0) {
							var rand = Math.floor(Math.random() * a + 1);
							
							if (a === 20) {
								if (rand === a) {
									message.delete();
									message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (**` + rand.toString() + `**)\n**Total**: ` + rand.toString() + `\n***Critical Hit!***`);
								} else {
									if (rand === 1) {
										message.delete();
										message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (**` + rand.toString() + `**)\n**Total**: ` + rand.toString() + `\n***Critical Fail!***`);
									} else {
										message.delete();
										message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (` + rand.toString() + `)\n**Total**: ` + rand.toString());
									}
								}
							} else {
								if (rand === a || rand === 1) {
									message.delete();
									message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (**` + rand.toString() + `**)\n**Total**: ` + rand.toString());
								} else {
									message.delete();
									message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (` + rand.toString() + `)\n**Total**: ` + rand.toString());
								}
							}
						} else {
							message.reply(`No rigged dice here! Get out of here with your exotic infernal dice!`);
						}
					}
				} else {
					if (a === 0) {
						message.reply(`OH NO! You rolled a d0! The universe is imploding! MY SHOP!`);
					} else {
						if (a > 0) {
							var rand = Math.floor(Math.random() * a + 1);
							var rands = Math.floor(rand + b);
							
							if (a === 20) {
								if (rand === a) {
									message.delete();
									message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (**` + rand.toString() + `**) + ${b}\n**Total**: ` + rands.toString() + `\n***Critical Hit!***`);
								} else {
									if (rand === 1) {
										message.delete();
										message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (**` + rand.toString() + `**) + ${b}\n**Total**: ` + rands.toString() + `\n***Critical Fail!***`);
									} else {
										message.delete();
										message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (` + rand.toString() + `) + ${b}\n**Total**: ` + rands.toString());
									}
								}
							} else {
								if (rand === a || rand === 1) {
									message.delete();
									message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (**` + rand.toString() + `**) + ${b}\n**Total**: ` + rands.toString());
								} else {
									message.delete();
									message.channel.send(`${c} :game_die:\n**Result**: 1d${a} (` + rand.toString() + `) + ${b}\n**Total**: ` + rands.toString());
								}
							}
						} else {
							message.reply(`No rigged dice here! Get out of here with your exotic infernal dice!`);
						}
					}
				}
			}
		}
		
		const argus = message.content.trim().split(',');
		const commando = argus.shift().toLowerCase();
		
		const arguss = message.content.trim().split('^');
		const commandos = arguss.shift().toLowerCase();
		
		if (commandos === "d$m") {
			if (message.channel.type != 'DM') {
				let nick = arguss[0];
				let dm = arguss[1];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes('^' + nick + '^')) {
						message.channel.send(`DM has been sent to ${nickmember}.`);
						nickmember.send(dm.toString());
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "s$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
				
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						message.guild.channels.cache.find(i => i.name === channelname).send(`${b}`);
						message.channel.send(`Custom message has been sent.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "s$e$") {
			if (message.channel.type != 'DM') {
				let title = arguss[0];
				let description = arguss[1];
				let author = arguss[2];
				let authorpic = arguss[3];
				let image = arguss[4];
				let footer = arguss[5];
				let channelname = arguss[6];
					if (authorpic.includes(' ')) {
						message.channel.send(`Invalid author avatar.`);
					} else {
						if (image.includes(' ')) {
							message.channel.send(`Invalid image.`);
						} else {
							
							const exampleEmbed = new MessageEmbed()
							.setColor('RANDOM')
							.setTitle(title)
							//.setURL('https://discord.js.org/')
							.setAuthor(author, authorpic, authorpic)
							.setDescription(description)
							.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
							//.addFields(
							//        { name: 'Regular field title', value: 'Some value here' },
							//        { name: '\u200B', value: '\u200B' },
							//        { name: 'Inline field title', value: 'Some value here', inline: true },
							//        { name: 'Inline field title', value: 'Some value here', inline: true },
							//)
							//.addField('Inline field title', 'Some value here', true)
							.setImage(image)
							.setTimestamp()
							.setFooter(footer, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
							let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
							let chan = message.channel.name;
							if (chan == 'audit-log') {
								if (chanlist.includes('^' + channelname + '^')) {
									message.guild.channels.cache.find(i => i.name === channelname).send({ embeds: [exampleEmbed] });
									message.channel.send(`Custom embed has been sent.`);
								} else {
									message.channel.send(`${channelname} is not a valid channel in this server.`);
								}
							} else {
								message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
							}
						}
					}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "e$e$") {
			if (message.channel.type != 'DM') {
				let otitle = arguss[0];
				let odescription = arguss[1];
				let ntitle = arguss[2];
				let ndescription = arguss[3];
				let nauthor = arguss[4];
				let nauthorpic = arguss[5];
				let nimage = arguss[6];
				let nfooter = arguss[7];
				let channelname = arguss[8];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
				let chan = message.channel.name;
				if (nauthorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (nimage.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (chan == 'audit-log') {
							if (chanlist.includes('^' + channelname + '^')) {
								const exampleEmbed = new MessageEmbed()
								.setColor('RANDOM')
								.setTitle(ntitle)
								//.setURL('https://discord.js.org/')
								.setAuthor(nauthor, nauthorpic, nauthorpic)
								.setDescription(ndescription)
								.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
								//.addFields(
								//        { name: 'Regular field title', value: 'Some value here' },
								//        { name: '\u200B', value: '\u200B' },
								//        { name: 'Inline field title', value: 'Some value here', inline: true },
								//        { name: 'Inline field title', value: 'Some value here', inline: true },
								//)
								//.addField('Inline field title', 'Some value here', true)
								.setImage(nimage)
								.setTimestamp()
								.setFooter(nfooter, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
								channelid.messages.fetch({limit: 99}).then(msg => {
									const aospecMessage = msg.filter(msg => msg.embeds[0]);
									const ospecMessage = aospecMessage.filter(msg => msg.embeds[0]?.description?.includes(odescription));
									const specMessage = ospecMessage.filter(msg => msg.embeds[0]?.title?.includes(otitle)).map(m=>m.id).join('\n');
									async function edit() {
										const message = await channelid.messages.fetch(specMessage);
										await message.edit({ embeds: [exampleEmbed] });
									}
									edit();
								});
								message.channel.send(`Embed has been edited.`);
							} else {
								message.channel.send(`${channelname} is not a valid channel in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "d$e$") {
			if (message.channel.type != 'DM') {
				let otitle = arguss[0];
				let odescription = arguss[1];
				let channelname = arguss[2];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
				
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({limit: 99}).then(msg => {
							const aospecMessage = msg.filter(msg => msg.embeds[0]);
							const ospecMessage = aospecMessage.filter(msg => msg.embeds[0]?.description?.includes(odescription));
							const specMessage = ospecMessage.filter(msg => msg.embeds[0]?.title?.includes(otitle)).map(m=>m.id).join('\n');
							async function del() {
								const message = await channelid.messages.fetch(specMessage);
								await message.delete();
							}
							del();
						});
						message.channel.send(`Embed has been deleted.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "d$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let channelname = arguss[1];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
				
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({limit: 99}).then(msg => {
							const specMessage = msg.filter(msg => msg.content.includes(b));
							channelid.bulkDelete(specMessage);
						});
						message.channel.send(`Message has been deleted.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "e$m$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let channelname = arguss[2];
				let channelid = message.guild.channels.cache.find(i => i.name === channelname);
				let chanlist = '^' + message.guild.channels.cache.map(m=>m.name).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (chanlist.includes('^' + channelname + '^')) {
						channelid.messages.fetch({limit: 99}).then(msg => {
							const specMessage = msg.filter(msg => msg.content.includes(b)).map(m=>m.id).join('\n');
							async function edit() {
								const message = await channelid.messages.fetch(specMessage);
								await message.edit(c);
							}
							edit();
						});
						message.channel.send(`Message has been edited.`);
					} else {
						message.channel.send(`${channelname} is not a valid channel in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "e$dm$") {
			if (message.channel.type != 'DM') {
				let b = arguss[0];
				let c = arguss[1];
				let nick = arguss[2];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
				let chan = message.channel.name;
				if (chan == 'audit-log') {
					if (memberlist.includes('^' + nick + '^')) {
						let channelid = nickmember.user.dmChannel;
						channelid.messages.fetch({limit: 99}).then(msg => {
							const specMessage = msg.filter(msg => msg.content.includes(b)).map(m=>m.id).join('\n');
							async function edit() {
								const message = await channelid.messages.fetch(specMessage);
								await message.edit(c);
							}
							edit();
						});
						message.channel.send(`DM has been edited.`);
					} else {
						message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
					}
				} else {
					message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "dm$e$") {
			if (message.channel.type != 'DM') {
				let nick = arguss[0];
				let title = arguss[1];
				let description = arguss[2];
				let author = arguss[3];
				let authorpic = arguss[4];
				let image = arguss[5];
				let footer = arguss[6];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
				let chan = message.channel.name;
				if (authorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (image.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (chan == 'audit-log') {
							const exampleEmbed = new MessageEmbed()
							.setColor('RANDOM')
							.setTitle(title)
							//.setURL('https://discord.js.org/')
							.setAuthor(author, authorpic, authorpic)
							.setDescription(description)
							.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
							//.addFields(
							//        { name: 'Regular field title', value: 'Some value here' },
							//        { name: '\u200B', value: '\u200B' },
							//        { name: 'Inline field title', value: 'Some value here', inline: true },
							//        { name: 'Inline field title', value: 'Some value here', inline: true },
							//)
							//.addField('Inline field title', 'Some value here', true)
							.setImage(image)
							.setTimestamp()
							.setFooter(footer, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
							if (memberlist.includes('^' + nick + '^')) {
								message.channel.send(`Embed DM has been sent to ${nickmember}.`);
								nickmember.send({ embeds: [exampleEmbed] });
							} else {
								message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
							}
						} else {
								message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
		
		if (commandos === "e$edm$") {
			if (message.channel.type != 'DM') {
				let otitle = arguss[0];
				let odescription = arguss[1];
				let ntitle = arguss[2];
				let ndescription = arguss[3];
				let nauthor = arguss[4];
				let nauthorpic = arguss[5];
				let nimage = arguss[6];
				let nfooter = arguss[7];
				let nick = arguss[8];
				let nickmember = message.guild.members.cache.find(member => member.displayName === nick);
				let memberlist = '^' + message.guild.members.cache.map(m=>m.displayName).join('^') + '^';
				let chan = message.channel.name;
				if (nauthorpic.includes(' ')) {
					message.channel.send(`Invalid author avatar.`);
				} else {
					if (nimage.includes(' ')) {
						message.channel.send(`Invalid image.`);
					} else {
						if (chan == 'audit-log') {
							if (memberlist.includes('^' + nick + '^')) {
								let channelid = nickmember.user.dmChannel;
								const exampleEmbed = new MessageEmbed()
								.setColor('RANDOM')
								.setTitle(ntitle)
								//.setURL('https://discord.js.org/')
								.setAuthor(nauthor, nauthorpic, nauthorpic)
								.setDescription(ndescription)
								.setThumbnail('https://cdn.discordapp.com/icons/391183651649486848/a_a2fc07c28a76c4aae91d4fa38ff567c8.png?size=512')
								//.addFields(
								//        { name: 'Regular field title', value: 'Some value here' },
								//        { name: '\u200B', value: '\u200B' },
								//        { name: 'Inline field title', value: 'Some value here', inline: true },
								//        { name: 'Inline field title', value: 'Some value here', inline: true },
								//)
								//.addField('Inline field title', 'Some value here', true)
								.setImage(nimage)
								.setTimestamp()
								.setFooter(nfooter, 'https://cdn.discordapp.com/emojis/417837304036589568.png?v=1');
								channelid.messages.fetch({limit: 99}).then(msg => {
									const aospecMessage = msg.filter(msg => msg.embeds[0]);
									const ospecMessage = aospecMessage.filter(msg => msg.embeds[0]?.description?.includes(odescription));
									const specMessage = ospecMessage.filter(msg => msg.embeds[0]?.title?.includes(otitle)).map(m=>m.id).join('\n');
									async function edit() {
										const message = await channelid.messages.fetch(specMessage);
										await message.edit({ embeds: [exampleEmbed] });
									}
									edit();
								});
								message.channel.send(`Embed in DM has been edited.`);
							} else {
								message.channel.send(`${nick} is not a valid nickname of a user in this server.`);
							}
						} else {
							message.channel.send(`${chan} is not a valid channel to use this command in, ***DUMBASS***.`);
						}
					}
				}
			} else {
				message.channel.send(`Did you seriously just try to **DM** that command to me? You *have* to be the biggest idiot of all time. Gonna make a mark of that right here...`);
			}
		}
	}
	catch(error){
		message.guild.channels.cache.find(i => i.name === 'dm-rolls').send(`I almost crashed. Fix your shit. \nError code: MESSAGE`);
	}
});

client.login(process.env.BOT_TOKEN);
