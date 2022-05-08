/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "hi",
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}hi`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/L6TYbITAZGkAAAPo/violet-evergarden-anime.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `Hi, i am  *Violet* 💞. A WhatsApp bot developed by: *Fantox*. It is a pleasure to meet you. If it is your wish, I will travel anywhere to meet your request. Auto Memory Doll, Violet Evergarden, at your service. Use command from *${this.client.config.prefix}help* list if you want me to do anything. \n`,
			}
		);
	};
}
