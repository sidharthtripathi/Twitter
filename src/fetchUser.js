// constructor for User
export default function User(username, userid, userimg, msg) {
  this.userid = userid;
  this.username = username;
  this.userimg = userimg;
  this.msg = msg;
  this.stats = {
    comments: Math.floor(Math.random() * 101),
    retweets: Math.floor(Math.random() * 101),
    likes: Math.floor(Math.random() * 101),
    interactions: Math.floor(Math.random() * 101),
  };
  this.imgs = randomPics();
}

function randomPics() {
  const imgs = [];
  const randomNumber = Math.floor(Math.random() * 4) + 1;
  for (let i = 0; i < randomNumber; i++) {
    imgs.push(
      `https://random.imagecdn.app/${randomDimen()[0]}/${randomDimen()[1]}`
    );
  }

  return imgs;
}

function randomDimen() {
  const min = 100;
  const max = 500;
  const l = Math.floor((Math.random() * (max - min + 1)) / 50) * 50 + min;
  const w = Math.floor((Math.random() * (max - min + 1)) / 50) * 50 + min;
  return [l, w];
}
