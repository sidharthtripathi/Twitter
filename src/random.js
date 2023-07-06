import User from "./fetchUser";

async function randomMsg() {
	const data = await fetch("https://api.quotable.io/random");
	const obj = await data.json();
	const msg = obj.content;
	return msg;
}

export default async function randomUser() {
	try {
		const response = await fetch("https://randomuser.me/api/");
		const person = (await response.json()).results[0];
		// creating the user details
		const username = person.name.first;
		const userid = person.login.username;
		const userimg = person.picture.thumbnail;

		// getting random quote
		const msg = await randomMsg();

		//console.log(new User(username, userid, userimg, msg));
		return new User(username, userid, userimg, msg);
	} catch (e) {
		console.log("Some error occured while fetching");
	}
}
