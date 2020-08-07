// 2 secend
let timer = 2000;
//follow button select
let followbtn = document.querySelector('._5f5mN');
//unfollow button select
let unfollowbtn = document.getElementsByClassName('aOOlW ')[0];
// i<20 is number of repit 
for (var i = 0; i <20 ; i++) {
	setTimeout(()=>{
		followbtn.click()
		console.log('follow')
	},timer)
	//add extra time
	timer +=2000;
	setTimeout(()=>{
		followbtn.click()
	},timer)
	timer +=2000;

	setTimeout(()=>{
		unfollowbtn.click()
		console.log('unfollow')
	},timer)
	timer +=2000;

}